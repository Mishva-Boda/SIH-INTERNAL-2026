"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "gradient" | "glow";
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", hoverEffect = true, children, ...props }, ref) => {
    const variants = {
      glass: "bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-card-dark",
      solid: "bg-dark-50 border border-white/5 shadow-2xl",
      gradient: "bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent backdrop-blur-2xl border border-white/15",
      glow: "bg-white/[0.04] backdrop-blur-xl border border-primary/30 shadow-glow-primary",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl p-6 transition-all duration-300 relative overflow-hidden",
          variants[variant],
          hoverEffect && "hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-xl font-bold tracking-tight font-display text-white", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-white/60", className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("pt-2", className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center pt-4 border-t border-white/5 mt-4", className)} {...props}>
    {children}
  </div>
);
