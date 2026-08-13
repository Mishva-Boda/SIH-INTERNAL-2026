"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export interface SkillDataPoint {
  subject: string;
  score: number;
  fullMark?: number;
}

interface RadarChartProps {
  data: SkillDataPoint[];
  title?: string;
  subtitle?: string;
  color?: string;
  fillOpacity?: number;
  height?: number;
  showLegend?: boolean;
  dataKey?: string;
  dataLabel?: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 border border-white/20 rounded-xl px-4 py-3 shadow-2xl backdrop-blur-xl">
        <p className="text-sm font-bold text-white mb-1">{label}</p>
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-xs text-slate-300">
              {entry.name}:{" "}
              <span className="font-bold text-violet-300">{entry.value}</span>
              /100
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

function CustomAngleAxis({ x, y, payload }: { x?: number; y?: number; payload?: { value: string } }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor="middle"
        fill="#94a3b8"
        fontSize={11}
        fontWeight={600}
        fontFamily="Inter, sans-serif"
      >
        {payload?.value ?? ""}
      </text>
    </g>
  );
}

export function SkillRadarChart({
  data,
  title = "Skill Assessment",
  subtitle = "Your competency across core domains",
  color = "#8b5cf6",
  fillOpacity = 0.25,
  height = 340,
  showLegend = false,
  dataKey = "score",
  dataLabel = "Proficiency",
}: RadarChartProps) {
  const filled = data.map((d) => ({ ...d, fullMark: d.fullMark ?? 100 }));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute -inset-px rounded-2xl opacity-30 pointer-events-none bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

      {title && (
        <div className="mb-4 relative">
          <h3 className="text-base font-bold text-white">{title}</h3>
          {subtitle && (
            <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
          )}
        </div>
      )}

      <div className="relative" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="75%"
            data={filled}
          >
            <defs>
              <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                <stop offset="100%" stopColor={color} stopOpacity={0.05} />
              </radialGradient>
            </defs>
            <PolarGrid
              stroke="rgba(255,255,255,0.07)"
              strokeDasharray="3 3"
            />
            <PolarAngleAxis
              dataKey="subject"
              tick={(props) => <CustomAngleAxis {...props} />}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: "rgba(148,163,184,0.5)", fontSize: 9 }}
              tickCount={5}
              axisLine={false}
              stroke="rgba(255,255,255,0.05)"
            />
            <Radar
              name={dataLabel}
              dataKey={dataKey}
              stroke={color}
              fill="url(#radarGradient)"
              fillOpacity={fillOpacity}
              strokeWidth={2.5}
              dot={{ fill: color, r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: color, stroke: "#fff", strokeWidth: 2 }}
            />
            <Tooltip content={<CustomTooltip />} />
            {showLegend && (
              <Legend
                wrapperStyle={{ color: "#94a3b8", fontSize: 12 }}
              />
            )}
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Score summary pills */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {filled
          .sort((a, b) => b.score - a.score)
          .slice(0, 3)
          .map((item) => (
            <div
              key={item.subject}
              className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/5"
            >
              <span className="text-xs font-bold text-white">{item.score}</span>
              <span className="text-[10px] text-slate-400 mt-0.5 text-center leading-tight">
                {item.subject}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
