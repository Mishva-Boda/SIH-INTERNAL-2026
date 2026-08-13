"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  success?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
  variant?: "default" | "ghost" | "filled";
}

// ─── Component ───────────────────────────────────────────────────────────────

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      wrapperClassName,
      label,
      error,
      hint,
      success,
      leftIcon,
      rightIcon,
      variant = "default",
      type = "text",
      placeholder,
      value,
      defaultValue,
      disabled,
      id: externalId,
      ...props
    },
    ref
  ) => {
    const inputId = externalId ?? React.useId();
    const [isFocused, setIsFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(
      (defaultValue as string) ?? ""
    );

    const isControlled = value !== undefined;
    const currentValue = isControlled ? String(value ?? "") : internalValue;
    const hasValue = currentValue.length > 0;
    const isFloating = isFocused || hasValue;
    const isPassword = type === "password";
    const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

    const hasError = Boolean(error);
    const hasSuccess = Boolean(success) && !hasError;
    const hasLeftIcon = Boolean(leftIcon);
    const hasRightIcon = Boolean(rightIcon) || isPassword || hasError || hasSuccess;

    const variantStyles = {
      default: cn(
        "bg-white/5 border border-white/15 text-white placeholder-transparent",
        "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25",
        hasError && "border-red-500/60 focus:border-red-500 focus:ring-red-500/25",
        hasSuccess && "border-emerald-500/60 focus:border-emerald-500 focus:ring-emerald-500/25"
      ),
      ghost: cn(
        "bg-transparent border-b border-white/20 rounded-none text-white placeholder-transparent",
        "focus:border-indigo-400 focus:ring-0",
        hasError && "border-red-500/60 focus:border-red-500",
        hasSuccess && "border-emerald-500/60 focus:border-emerald-500"
      ),
      filled: cn(
        "bg-white/10 border border-transparent text-white placeholder-transparent",
        "focus:bg-white/12 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20",
        hasError && "bg-red-500/10 focus:border-red-500 focus:ring-red-500/20",
        hasSuccess && "bg-emerald-500/10 focus:border-emerald-500 focus:ring-emerald-500/20"
      ),
    };

    return (
      <div className={cn("relative flex flex-col gap-1.5", wrapperClassName)}>
        {/* ── Wrapper ── */}
        <div className="relative">
          {/* Left icon */}
          {hasLeftIcon && (
            <span
              className={cn(
                "absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 transition-colors duration-200 pointer-events-none z-10",
                "[&>svg]:h-4 [&>svg]:w-4",
                isFocused && "text-indigo-400"
              )}
            >
              {leftIcon}
            </span>
          )}

          {/* Input element */}
          <input
            ref={ref}
            id={inputId}
            type={resolvedType}
            value={isControlled ? value : internalValue}
            onChange={(e) => {
              if (!isControlled) setInternalValue(e.target.value);
              props.onChange?.(e);
            }}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            disabled={disabled}
            placeholder={placeholder ?? " "}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            className={cn(
              "peer w-full rounded-xl py-3.5 text-sm outline-none transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              variantStyles[variant],
              hasLeftIcon ? "pl-10" : "pl-4",
              hasRightIcon ? "pr-10" : "pr-4",
              label ? "pt-5 pb-2" : "py-3.5",
              className
            )}
            {...props}
          />

          {/* Floating label */}
          {label && (
            <motion.label
              htmlFor={inputId}
              animate={{
                y: isFloating ? -10 : 0,
                scale: isFloating ? 0.78 : 1,
                color: hasError
                  ? "#f87171"
                  : hasSuccess
                  ? "#34d399"
                  : isFocused
                  ? "#818cf8"
                  : "rgba(255,255,255,0.45)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={cn(
                "pointer-events-none absolute top-3.5 origin-left font-medium leading-none",
                hasLeftIcon ? "left-10" : "left-4"
              )}
              style={{ fontSize: "0.875rem" }}
            >
              {label}
            </motion.label>
          )}

          {/* Right content: password toggle / status icons / custom icon */}
          <div
            className={cn(
              "absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2",
              "[&>svg]:h-4 [&>svg]:w-4 z-10"
            )}
          >
            {hasError && !isPassword && (
              <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
            )}
            {hasSuccess && !isPassword && (
              <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
            )}
            {rightIcon && !isPassword && !hasError && !hasSuccess && (
              <span className="text-white/40">{rightIcon}</span>
            )}
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="text-white/40 hover:text-white/70 transition-colors focus:outline-none"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* ── Messages ── */}
        <AnimatePresence>
          {hasError && (
            <motion.p
              key="error"
              id={`${inputId}-error`}
              role="alert"
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -4, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1.5 text-xs text-red-400"
            >
              <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
              {error}
            </motion.p>
          )}
          {hasSuccess && !hasError && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -4, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1.5 text-xs text-emerald-400"
            >
              <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" />
              {success}
            </motion.p>
          )}
          {hint && !hasError && !hasSuccess && (
            <motion.p
              key="hint"
              id={`${inputId}-hint`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-white/40"
            >
              {hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
