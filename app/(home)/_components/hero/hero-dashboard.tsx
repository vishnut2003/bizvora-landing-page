import Image from "next/image";
import {
  Activity,
  Banknote,
  Bell,
  ChevronDown,
  ChevronRight,
  FileSpreadsheet,
  FileText,
  FolderKanban,
  Layers,
  LayoutDashboard,
  Receipt,
  Search,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import davidSingh from "./assets/david-singh.png";

/**
 * The hero artwork — a faithful markup redraw of the real BizvoraOne
 * workspace Overview (bizvora-web: layouts/dashboard-layout + the owner/admin
 * executive-overview): topbar, sidebar rail, greeting hero card, KPI tiles,
 * mini-stat strip and the cropped activity/pipeline row.
 *
 * Everything sizes off the root `font-size`, which is a `cqw` value, so the
 * whole board scales with its container. Use `em` for every dimension in
 * here, never rem/px. Cards are border-only (no shadows), purple is always
 * the primary→secondary gradient — both rules copied from the real app.
 */

const SIDEBAR: {
  section: string;
  items: { label: string; icon: LucideIcon; active?: boolean; badge?: string }[];
}[] = [
  {
    section: "Workspace",
    items: [
      { label: "Overview", icon: LayoutDashboard, active: true },
      { label: "Notifications", icon: Bell, badge: "3" },
    ],
  },
  {
    section: "Sales",
    items: [
      { label: "Leads & Prospects", icon: UserPlus },
      { label: "AI Proposals", icon: FileText },
      { label: "Quotations", icon: FileSpreadsheet },
    ],
  },
  {
    section: "Accounts",
    items: [
      { label: "Sale Invoice", icon: Receipt },
      { label: "Payments", icon: Wallet },
    ],
  },
];

const KPIS: {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
  accent: string;
}[] = [
  {
    label: "Pipeline value (INR)",
    value: "₹42,50,000.00",
    hint: "18 open leads",
    icon: TrendingUp,
    accent: "from-violet-500 to-purple-700",
  },
  {
    label: "Receivable (INR)",
    value: "₹8,74,500.00",
    hint: "From open invoices",
    icon: Banknote,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    label: "Payable (INR)",
    value: "₹2,15,000.00",
    hint: "Owed to vendors",
    icon: Wallet,
    accent: "from-rose-500 to-red-600",
  },
  {
    label: "Active projects",
    value: "12",
    hint: "48 customers · 9 vendors",
    icon: FolderKanban,
    accent: "from-blue-500 to-indigo-700",
  },
];

const MINI_STATS: { label: string; value: string; icon: LucideIcon }[] = [
  { label: "Won this month", value: "6", icon: TrendingUp },
  { label: "New customers (mo)", value: "11", icon: UserPlus },
  { label: "Quotations (mo)", value: "24", icon: FileSpreadsheet },
  { label: "Collected (mo, INR)", value: "₹6,20,000.00", icon: Receipt },
];

const QUICK_ACTIONS: { label: string; icon: LucideIcon }[] = [
  { label: "New lead", icon: UserPlus },
  { label: "Add customer", icon: Users },
  { label: "New quotation", icon: FileSpreadsheet },
  { label: "New invoice", icon: Receipt },
];

const ACTIVITY = [
  { action: "added lead", target: "Priya Sharma", company: "Acme Pvt Ltd", time: "2h ago" },
  { action: "quoted", target: "QT-2025-0118", company: "Nimbus Traders", time: "4h ago" },
  { action: "converted", target: "Rohan Mehta", company: "Vertex Realty", time: "6h ago" },
];

/** Stage segments of the real pipeline distribution bar (per-stage share). */
const PIPELINE_BAR: { color: string; pct: number }[] = [
  { color: "bg-sky-500", pct: 22 },
  { color: "bg-cyan-500", pct: 12 },
  { color: "bg-indigo-500", pct: 17 },
  { color: "bg-violet-500", pct: 17 },
  { color: "bg-blue-500", pct: 11 },
  { color: "bg-amber-500", pct: 10 },
  { color: "bg-emerald-500", pct: 11 },
];

const PIPELINE_LEGEND = [
  { color: "bg-sky-500", label: "New Lead", count: 4 },
  { color: "bg-violet-500", label: "Qualified", count: 3 },
  { color: "bg-blue-500", label: "Proposal Sent", count: 2 },
];

/** 28px gradient icon chip — the real app's signature card-header ornament. */
function GradientChip({ icon: Icon, accent }: { icon: LucideIcon; accent: string }) {
  return (
    <span
      className={`grid size-[1.75em] shrink-0 place-items-center rounded-[0.375em] bg-gradient-to-br ${accent} text-white shadow-sm shadow-primary/30`}
    >
      <Icon className="size-[0.875em]" strokeWidth={2} />
    </span>
  );
}

export function HeroDashboard() {
  return (
    <div className="@container w-full">
      <div
        role="img"
        aria-label="BizvoraOne workspace dashboard: good morning greeting, ₹42,50,000 pipeline value across 18 open leads, ₹8,74,500 receivable, 12 active projects, with recent activity and lead pipeline"
        className="overflow-hidden rounded-[1.5em] bg-ink p-[0.6em] text-[1.5625cqw] leading-none text-zinc-900"
      >
        <div className="overflow-hidden rounded-[1.1em] bg-white">
          {/* --- topbar ---------------------------------------------------- */}
          <div className="flex h-[2.9em] items-center justify-between border-b border-zinc-200 bg-white px-[1.1em]">
            <div className="flex items-center gap-[0.7em]">
              <span className="flex items-baseline text-[0.95em] font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Bizvora
                </span>
                <span className="text-zinc-900">One</span>
                <span className="ml-[0.35em] size-[0.375em] translate-y-[-0.1em] rounded-full bg-gradient-to-br from-primary to-primary-dark" />
              </span>
              <span className="h-[1.25em] w-px bg-zinc-200" />
              <span className="flex items-center gap-[0.4em] text-[0.8em]">
                <span className="text-zinc-500">Workspaces</span>
                <ChevronRight className="size-[0.9em] text-zinc-400" />
                <span className="grid size-[1.25em] place-items-center rounded-[0.3em] bg-gradient-to-br from-violet-500 to-purple-700 text-[0.625em] font-semibold text-white">
                  B
                </span>
                <span className="font-semibold text-zinc-900">Bizvora Pvt Ltd</span>
              </span>
            </div>

            <span className="flex items-center gap-[0.35em] rounded-full border border-zinc-200 bg-white/80 py-[0.2em] pr-[0.5em] pl-[0.2em]">
              <Image
                src={davidSingh}
                alt=""
                width={96}
                height={96}
                className="size-[1.75em] rounded-full object-cover ring-1 ring-zinc-200"
              />
              <ChevronDown className="size-[0.8em] text-zinc-500" />
            </span>
          </div>

          {/* --- body: sidebar rail + overview content --------------------- */}
          <div className="flex">
            {/* sidebar */}
            <div className="w-[23%] shrink-0 border-r border-zinc-200 bg-white/40 px-[0.75em] py-[1em]">
              <div className="flex h-[2em] items-center gap-[0.5em] rounded-[0.375em] border border-zinc-200 bg-white px-[0.6em]">
                <Search className="size-[0.8em] text-zinc-400" />
                <span className="flex-1 text-[0.78em] text-zinc-400">Search…</span>
                <span className="rounded-[0.25em] border border-zinc-200 bg-zinc-50 px-[0.35em] py-[0.15em] text-[0.625em] text-zinc-500">
                  ⌘K
                </span>
              </div>

              <div className="mt-[1.1em] flex flex-col gap-[0.9em]">
                {SIDEBAR.map((group) => (
                  <div key={group.section} className="flex flex-col gap-[0.3em]">
                    <p className="px-[0.5em] text-[0.625em] font-semibold tracking-[0.18em] text-zinc-400 uppercase">
                      {group.section}
                    </p>
                    {group.items.map((item) => (
                      <span
                        key={item.label}
                        className={`relative flex items-center gap-[0.6em] rounded-[0.5em] px-[0.5em] py-[0.35em] ${
                          item.active
                            ? "bg-gradient-to-r from-primary/[0.08] via-primary/[0.03] to-transparent"
                            : ""
                        }`}
                      >
                        {item.active && (
                          <span className="absolute left-[-0.75em] h-[1.5em] w-[0.19em] rounded-full bg-gradient-to-b from-primary to-primary-dark" />
                        )}
                        {item.active ? (
                          <span className="grid size-[1.75em] place-items-center rounded-[0.375em] bg-gradient-to-br from-primary to-primary-dark text-white shadow-sm shadow-primary/30">
                            <item.icon className="size-[0.875em]" strokeWidth={2} />
                          </span>
                        ) : (
                          <span className="grid size-[1.75em] place-items-center text-zinc-400">
                            <item.icon className="size-[1em]" strokeWidth={1.8} />
                          </span>
                        )}
                        <span
                          className={`flex-1 text-[0.8em] ${
                            item.active
                              ? "font-semibold text-zinc-900"
                              : "font-medium text-zinc-600"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="rounded-[0.375em] bg-zinc-100 px-[0.4em] py-[0.15em] text-[0.625em] font-semibold text-zinc-500 tabular-nums">
                            {item.badge}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* content */}
            <div className="flex min-w-0 flex-1 flex-col gap-[0.9em] bg-zinc-50 p-[1em]">
              {/* hero greeting card */}
              <div className="relative overflow-hidden rounded-[1em] border border-zinc-200 bg-white">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-white to-primary-dark/[0.06]" />
                <div className="pointer-events-none absolute -top-[5em] -right-[4em] size-[11em] rounded-full bg-gradient-to-br from-primary/30 to-primary-dark/20 opacity-50 blur-3xl" />
                <div className="relative flex items-start justify-between p-[1.3em]">
                  <div className="flex items-start gap-[0.9em]">
                    <span className="grid size-[2.75em] shrink-0 place-items-center rounded-[0.75em] bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/30">
                      <LayoutDashboard className="size-[1.25em]" strokeWidth={2} />
                    </span>
                    <div className="flex flex-col gap-[0.35em]">
                      <p className="text-[0.625em] font-semibold tracking-[0.22em] text-zinc-400 uppercase">
                        Overview · Monday, August 24
                      </p>
                      <p className="text-[1.6em] leading-tight font-semibold tracking-tight text-zinc-900">
                        Good morning, Suraj
                      </p>
                      <p className="text-[0.8em] text-zinc-500">
                        Here’s what’s moving in{" "}
                        <span className="font-medium text-zinc-700">Bizvora Pvt Ltd</span>.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-[0.35em] rounded-[0.375em] bg-primary/10 px-[0.5em] py-[0.2em] text-[0.65em] font-medium tracking-wider text-primary uppercase ring-1 ring-primary/20 ring-inset">
                    <Sparkles className="size-[0.9em]" />
                    Owner view
                  </span>
                </div>
                <div className="relative flex items-center gap-[0.6em] border-t border-zinc-100 bg-white/60 px-[1.3em] py-[0.6em]">
                  <span className="text-[0.65em] tracking-wider text-zinc-400 uppercase">
                    Quick actions
                  </span>
                  <span className="text-zinc-300">·</span>
                  {QUICK_ACTIONS.map((action) => (
                    <span
                      key={action.label}
                      className="inline-flex items-center gap-[0.4em] rounded-[0.375em] border border-zinc-200 bg-white px-[0.7em] py-[0.35em] text-[0.78em] font-medium text-zinc-700"
                    >
                      <action.icon className="size-[0.875em] text-zinc-400" strokeWidth={2} />
                      {action.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-4 gap-[0.75em]">
                {KPIS.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="relative overflow-hidden rounded-[0.75em] border border-zinc-200 bg-white p-[1em]"
                  >
                    <div
                      className={`pointer-events-none absolute -top-[2em] -right-[2em] size-[5em] rounded-full bg-gradient-to-br ${kpi.accent} opacity-[0.10] blur-2xl`}
                    />
                    <div className="flex items-start justify-between gap-[0.5em]">
                      <p className="text-[0.65em] font-medium tracking-wider text-zinc-500 uppercase">
                        {kpi.label}
                      </p>
                      <GradientChip icon={kpi.icon} accent={kpi.accent} />
                    </div>
                    <p className="mt-[0.6em] text-[1.4em] font-semibold tracking-tight text-zinc-900 tabular-nums">
                      {kpi.value}
                    </p>
                    <p className="mt-[0.35em] text-[0.7em] text-zinc-500">{kpi.hint}</p>
                  </div>
                ))}
              </div>

              {/* mini-stat strip */}
              <div className="grid grid-cols-4 gap-[0.5em] rounded-[0.75em] border border-zinc-200 bg-white p-[0.75em]">
                {MINI_STATS.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-[0.6em]">
                    <span className="grid size-[1.75em] shrink-0 place-items-center rounded-[0.375em] bg-zinc-100 text-zinc-600">
                      <stat.icon className="size-[0.875em]" strokeWidth={2} />
                    </span>
                    <div className="flex min-w-0 flex-col gap-[0.2em]">
                      <p className="truncate text-[0.65em] tracking-wider text-zinc-500 uppercase">
                        {stat.label}
                      </p>
                      <p className="text-[0.875em] font-semibold text-zinc-900 tabular-nums">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* split row — cropped, so the board reads as a taller app */}
              <div className="grid h-[7em] grid-cols-5 gap-[0.75em] overflow-hidden">
                <div className="col-span-3 overflow-hidden rounded-t-[0.75em] border border-b-0 border-zinc-200 bg-white">
                  <div className="flex items-center gap-[0.6em] border-b border-zinc-100 px-[1.1em] py-[0.7em]">
                    <GradientChip icon={Activity} accent="from-primary to-primary-dark" />
                    <div className="flex flex-col gap-[0.2em]">
                      <p className="text-[0.85em] font-semibold text-zinc-900">Recent activity</p>
                      <p className="text-[0.7em] text-zinc-500">
                        Latest moves across leads, customers, and quotations
                      </p>
                    </div>
                  </div>
                  <ul className="list-none divide-y divide-zinc-100">
                    {ACTIVITY.map((row) => (
                      <li
                        key={row.target}
                        className="flex items-center gap-[0.6em] px-[1.1em] py-[0.55em] text-[0.8em]"
                      >
                        <span className="size-[0.375em] shrink-0 rounded-full bg-gradient-to-br from-primary to-primary-dark" />
                        <span className="min-w-0 flex-1 truncate text-zinc-700">
                          {row.action}{" "}
                          <span className="font-medium text-zinc-900">{row.target}</span>{" "}
                          <span className="text-zinc-500">· {row.company}</span>
                        </span>
                        <span className="shrink-0 text-[0.85em] text-zinc-400">{row.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-2 overflow-hidden rounded-t-[0.75em] border border-b-0 border-zinc-200 bg-white">
                  <div className="flex items-center gap-[0.6em] border-b border-zinc-100 px-[1.1em] py-[0.7em]">
                    <GradientChip icon={Layers} accent="from-violet-500 to-purple-700" />
                    <div className="flex flex-col gap-[0.2em]">
                      <p className="text-[0.85em] font-semibold text-zinc-900">Lead pipeline</p>
                      <p className="text-[0.7em] text-zinc-500">18 open leads by stage</p>
                    </div>
                  </div>
                  <div className="px-[1.1em] py-[0.8em]">
                    <div className="flex h-[0.5em] w-full overflow-hidden rounded-full bg-zinc-100">
                      {PIPELINE_BAR.map((segment) => (
                        <span
                          key={segment.color}
                          className={`h-full ${segment.color}`}
                          style={{ width: `${segment.pct}%` }}
                        />
                      ))}
                    </div>
                    <ul className="mt-[0.7em] flex list-none flex-col gap-[0.45em]">
                      {PIPELINE_LEGEND.map((stage) => (
                        <li key={stage.label} className="flex items-center gap-[0.5em] text-[0.75em]">
                          <span className={`size-[0.5em] rounded-full ${stage.color}`} />
                          <span className="flex-1 text-zinc-600">{stage.label}</span>
                          <span className="font-medium text-zinc-700 tabular-nums">
                            {stage.count}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
