"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Variants ────────────────────────────────────────────────────────────────

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5",
    "text-xs font-semibold tracking-wide",
    "border transition-all duration-200 select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
        ].join(" "),
        secondary: [
          "bg-white/8 border-white/15 text-white/70",
        ].join(" "),
        success: [
          "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
        ].join(" "),
        warning: [
          "bg-amber-500/15 border-amber-500/30 text-amber-300",
        ].join(" "),
        danger: [
          "bg-red-500/15 border-red-500/30 text-red-300",
        ].join(" "),
        info: [
          "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
        ].join(" "),
        glow: [
          "bg-indigo-500/20 border-indigo-400/50 text-indigo-200",
          "shadow-[0_0_12px_2px_rgba(99,102,241,0.35)]",
        ].join(" "),
        purple: [
          "bg-purple-500/15 border-purple-500/30 text-purple-300",
        ].join(" "),
        pink: [
          "bg-pink-500/15 border-pink-500/30 text-pink-300",
        ].join(" "),
        gradient: [
          "bg-gradient-to-r from-indigo-500/20 to-purple-500/20",
          "border-indigo-500/30 text-white",
        ].join(" "),
        outline: [
          "bg-transparent border-white/25 text-white/80",
          "hover:border-white/40 hover:text-white",
        ].join(" "),
      },
      size: {
        sm: "px-2 py-px text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      dot: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      dot: false,
    },
  }
);

// ─── Dot color map ────────────────────────────────────────────────────────────

const dotColorMap: Record<string, string> = {
  default: "bg-indigo-400",
  secondary: "bg-white/50",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  danger: "bg-red-400",
  info: "bg-cyan-400",
  glow: "bg-indigo-300",
  purple: "bg-purple-400",
  pink: "bg-pink-400",
  gradient: "bg-indigo-300",
  outline: "bg-white/60",
};

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  pulse?: boolean;
  icon?: React.ReactNode;
  animate?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

// ─── Component ───────────────────────────────────────────────────────────────

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      dot = false,
      pulse = false,
      icon,
      animate = true,
      removable = false,
      onRemove,
      children,
      ...props
    },
    ref
  ) => {
    const dotColor = dotColorMap[variant ?? "default"] ?? "bg-indigo-400";

    return (
      <motion.span
        ref={ref}
        className={cn(badgeVariants({ variant, size, dot }), className)}
        initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
        animate={animate ? { opacity: 1, scale: 1 } : undefined}
        exit={animate ? { opacity: 0, scale: 0.8 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        {...(props as any)}
      >
        {/* Dot indicator */}
        {dot && (
          <span className="relative inline-flex h-1.5 w-1.5 flex-shrink-0">
            {pulse && (
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                  dotColor
                )}
              />
            )}
            <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotColor)} />
          </span>
        )}

        {/* Custom icon */}
        {icon && !dot && (
          <span className="flex-shrink-0 [&>svg]:h-3 [&>svg]:w-3">{icon}</span>
        )}

        {/* Label */}
        <span>{children}</span>

        {/* Remove button */}
        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className="ml-0.5 flex-shrink-0 rounded-full p-0.5 opacity-60 hover:opacity-100 hover:bg-white/10 transition-opacity"
            aria-label="Remove"
          >
            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </motion.span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
