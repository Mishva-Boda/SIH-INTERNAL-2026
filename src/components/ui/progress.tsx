"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;          // 0–100
  max?: number;
  variant?: "default" | "gradient" | "success" | "warning" | "danger" | "rainbow";
  size?: "xs" | "sm" | "md" | "lg";
  label?: string;
  showValue?: boolean;
  animated?: boolean;
  striped?: boolean;
  indeterminate?: boolean;
  glow?: boolean;
}

// ─── Variant configs ──────────────────────────────────────────────────────────

const variantFill = {
  default:  "bg-indigo-500",
  gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  success:  "bg-gradient-to-r from-emerald-500 to-teal-500",
  warning:  "bg-gradient-to-r from-amber-500 to-orange-500",
  danger:   "bg-gradient-to-r from-red-500 to-rose-500",
  rainbow:  "bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-cyan-400 via-blue-500 to-purple-600",
};

const variantGlow = {
  default:  "rgba(99,102,241,0.6)",
  gradient: "rgba(139,92,246,0.6)",
  success:  "rgba(16,185,129,0.6)",
  warning:  "rgba(245,158,11,0.6)",
  danger:   "rgba(239,68,68,0.6)",
  rainbow:  "rgba(139,92,246,0.5)",
};

const sizeMap = {
  xs: "h-1",
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

// ─── Component ───────────────────────────────────────────────────────────────

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      variant = "default",
      size = "md",
      label,
      showValue = false,
      animated = true,
      striped = false,
      indeterminate = false,
      glow = true,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(Math.max(value, 0), max);
    const pct = (clampedValue / max) * 100;

    // Animate width spring
    const motionWidth = useMotionValue(0);
    const springWidth = useSpring(motionWidth, { stiffness: 80, damping: 20 });

    React.useEffect(() => {
      if (!indeterminate) {
        animate(motionWidth, pct, { duration: animated ? 1.2 : 0, ease: "easeOut" });
      }
    }, [pct, animated, indeterminate]);

    const glowColor = variantGlow[variant];

    return (
      <div className={cn("w-full space-y-1.5", className)} {...props}>
        {/* ── Label row ── */}
        {(label != null || showValue) && (
          <div className="flex items-center justify-between">
            {label && (
              <span className="text-sm font-medium text-white/70">{label}</span>
            )}
            {showValue && !indeterminate && (
              <motion.span
                className="text-xs font-mono font-semibold text-white/60 tabular-nums"
                key={pct}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {Math.round(pct)}%
              </motion.span>
            )}
          </div>
        )}

        {/* ── Track ── */}
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
          className={cn(
            "relative overflow-hidden rounded-full bg-white/8",
            sizeMap[size]
          )}
        >
          {/* Inner track glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent" />

          {/* ── Indeterminate bounce ── */}
          {indeterminate ? (
            <motion.div
              className={cn(
                "absolute inset-y-0 w-2/5 rounded-full",
                variantFill[variant]
              )}
              style={
                glow
                  ? { boxShadow: `0 0 12px 2px ${glowColor}` }
                  : undefined
              }
              animate={{ x: ["-100%", "250%"] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            />
          ) : (
            /* ── Determinate fill ── */
            <motion.div
              className={cn(
                "h-full rounded-full",
                variantFill[variant],
                striped && [
                  "bg-[length:20px_20px]",
                  "bg-[linear-gradient(45deg,rgba(255,255,255,0.12)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.12)_75%,transparent_75%,transparent)]",
                ].join(" ")
              )}
              style={{
                width: springWidth.get() + "%",
                boxShadow: glow
                  ? `0 0 16px 4px ${glowColor}, 0 0 6px 0 ${glowColor}`
                  : undefined,
              }}
            >
              {/* Live motion sync */}
              <motion.div
                className={cn("h-full w-full rounded-full", variantFill[variant])}
                style={{ scaleX: 1 }}
              />
            </motion.div>
          )}

          {/* Striped animation */}
          {striped && !indeterminate && (
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.08) 75%, transparent 75%, transparent)",
                backgroundSize: "20px 20px",
              }}
              animate={{ backgroundPositionX: ["0px", "20px"] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
            />
          )}
        </div>
      </div>
    );
  }
);

// Better animated progress using direct motion.div width
const ProgressBar = React.forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      className,
      value = 0,
      max = 100,
      variant = "default",
      size = "md",
      label,
      showValue = false,
      animated = true,
      striped = false,
      indeterminate = false,
      glow = true,
      ...rest
    } = props;

    const clampedValue = Math.min(Math.max(value, 0), max);
    const pct = (clampedValue / max) * 100;
    const glowColor = variantGlow[variant];

    return (
      <div className={cn("w-full space-y-1.5", className)} {...rest}>
        {(label != null || showValue) && (
          <div className="flex items-center justify-between">
            {label && <span className="text-sm font-medium text-white/70">{label}</span>}
            {showValue && !indeterminate && (
              <span className="text-xs font-mono font-semibold text-white/60">
                {Math.round(pct)}%
              </span>
            )}
          </div>
        )}

        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
          className={cn("relative overflow-hidden rounded-full bg-white/8", sizeMap[size])}
        >
          {indeterminate ? (
            <motion.div
              className={cn("absolute inset-y-0 w-2/5 rounded-full", variantFill[variant])}
              style={glow ? { boxShadow: `0 0 12px 2px ${glowColor}` } : undefined}
              animate={{ x: ["-100%", "250%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          ) : (
            <motion.div
              className={cn("h-full rounded-full", variantFill[variant])}
              initial={{ width: "0%" }}
              animate={{ width: `${pct}%` }}
              transition={
                animated
                  ? { duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }
                  : { duration: 0 }
              }
              style={
                glow
                  ? { boxShadow: `0 0 14px 3px ${glowColor}, 0 0 4px 0 ${glowColor}` }
                  : undefined
              }
            >
              {/* Shine */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "Progress";
Progress.displayName = "ProgressRaw";

export { ProgressBar as Progress, progressProps };

function progressProps(value: number) {
  return { value, "aria-valuenow": value };
}
