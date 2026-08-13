"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  trendLabel?: string;
  decimals?: number;
  delay?: number;
}

function useAnimatedCounter(
  target: number,
  duration: number = 1500,
  decimals: number = 0,
  delay: number = 0
) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTime.current = null;
      const animate = (timestamp: number) => {
        if (!startTime.current) startTime.current = timestamp;
        const elapsed = timestamp - startTime.current;
        const progress = Math.min(elapsed / duration, 1);
        const eased =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        setCount(parseFloat((eased * target).toFixed(decimals)));
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };
      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, decimals, delay]);

  return count;
}

export function StatsCard({
  label,
  value,
  suffix = "",
  prefix = "",
  icon: Icon,
  iconColor = "text-accent-dark",
  iconBg = "bg-warm-peach/60",
  trend = "neutral",
  trendValue,
  trendLabel,
  decimals = 0,
  delay = 0,
}: StatsCardProps) {
  const animatedValue = useAnimatedCounter(value, 1500, decimals, delay);

  const trendConfig = {
    up: {
      icon: TrendingUp,
      color: "text-emerald-800",
      bg: "bg-emerald-100",
    },
    down: {
      icon: TrendingDown,
      color: "text-rose-800",
      bg: "bg-rose-100",
    },
    neutral: {
      icon: Minus,
      color: "text-txt-secondary",
      bg: "bg-surface-cream",
    },
  };

  const TrendIcon = trendConfig[trend].icon;

  return (
    <div className="group relative overflow-hidden rounded-24 border border-border-soft bg-surface p-5 shadow-soft-sm hover:shadow-soft-md hover:border-warm-beige transition-all duration-300 hover:-translate-y-1">
      <div className="relative flex items-start justify-between gap-3">
        {/* Icon container */}
        <div
          className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-20 bg-warm-peach/60 border border-warm-beige/70 text-accent-dark shadow-soft-sm"
        >
          <Icon className="w-5 h-5 text-accent-dark" />
        </div>

        {/* Trend Badge */}
        {trendValue && (
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full ${trendConfig[trend].bg} border border-border-soft`}
          >
            <TrendIcon className={`w-3.5 h-3.5 ${trendConfig[trend].color}`} />
            <span className={`text-2xs font-bold ${trendConfig[trend].color}`}>
              {trendValue}
            </span>
          </div>
        )}
      </div>

      <div className="relative mt-4">
        <div className="flex items-baseline gap-1">
          {prefix && (
            <span className="text-sm font-medium text-txt-secondary">{prefix}</span>
          )}
          <span className="font-heading text-3xl font-bold text-txt-primary tracking-tight">
            {decimals > 0
              ? animatedValue.toFixed(decimals)
              : Math.round(animatedValue)}
          </span>
          {suffix && (
            <span className="text-lg font-semibold text-txt-secondary">{suffix}</span>
          )}
        </div>

        <p className="mt-1 text-xs text-txt-secondary font-medium">{label}</p>

        {trendLabel && (
          <p className="mt-2 text-2xs text-txt-muted">{trendLabel}</p>
        )}
      </div>

      {/* Live indicator dot */}
      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    </div>
  );
}
