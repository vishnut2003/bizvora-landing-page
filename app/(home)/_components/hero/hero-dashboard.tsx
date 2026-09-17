import Image from "next/image";
import {
  Activity,
  Banknote,
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CreditCard,
  FileSpreadsheet,
  FileText,
  FolderKanban,
  Layers,
  LayoutDashboard,
  LineChart,
  Lock,
  MessageSquarePlus,
  Receipt,
  Search,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { appBaseUrl } from "@/lib/site";
import davidSingh from "./assets/david-singh.png";

/**
 * The hero artwork — a faithful markup redraw of the real BizvoraOne
 * workspace Overview in its dark theme (bizvora-web: layouts/dashboard-layout
 * + the owner/admin executive-overview): browser chrome, topbar, sidebar
 * rail, greeting hero card, KPI tiles, mini-stat strip and the cropped
 * activity/pipeline row, at a 16:9 laptop-screen aspect.
 *
 * Everything sizes off the root `font-size`, which is a `cqw` value, so the
 * whole board scales with its container. Use `em` for every dimension in
 * here, never rem/px. Cards are border-only (no shadows), purple is always
 * the primary→secondary gradient — both rules copied from the real app.
 * Dark palette mirrors the real app: zinc-950 page, zinc-900 cards,
 * zinc-800 borders.
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
      { label: "Payments", icon: CreditCard },
    ],
  },
  {
    section: "Project Management",
    items: [
      { label: "Projects", icon: FolderKanban },
      { label: "Projects Insights", icon: LineChart },
      { label: "Project Calendar", icon: CalendarDays },
    ],
  },
  {
    section: "HR & Payroll",
    items: [
      { label: "Employees", icon: Users },
      { label: "Payroll", icon: Wallet },
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
  { action: "added customer", target: "Kavya Nair", company: "Skyline Interiors", time: "8h ago" },
  { action: "moved", target: "Arjun Patel", company: "Meridian Exports", time: "9h ago" },
  { action: "noted on", target: "INV-2025-0042", company: "Acme Pvt Ltd", time: "11h ago" },
  { action: "updated", target: "Project Falcon", company: "Vertex Realty", time: "1d ago" },
  { action: "linked a project to", target: "Skyline Interiors", company: "Interiors", time: "1d ago" },
];

/** Stage segments of the real pipeline distribution bar (per-stage share of 18). */
const PIPELINE_BAR: { color: string; pct: number }[] = [
  { color: "bg-sky-500", pct: 22 },
  { color: "bg-cyan-500", pct: 11 },
  { color: "bg-indigo-500", pct: 17 },
  { color: "bg-violet-500", pct: 17 },
  { color: "bg-blue-500", pct: 11 },
  { color: "bg-amber-500", pct: 11 },
  { color: "bg-fuchsia-500", pct: 11 },
];

const PIPELINE_LEGEND = [
  { color: "bg-sky-500", label: "New Lead", count: 4 },
  { color: "bg-cyan-500", label: "Attempting Contact", count: 2 },
  { color: "bg-indigo-500", label: "Contacted", count: 3 },
  { color: "bg-violet-500", label: "Qualified", count: 3 },
  { color: "bg-blue-500", label: "Proposal Sent", count: 2 },
  { color: "bg-amber-500", label: "Negotiation", count: 2 },
  { color: "bg-fuchsia-500", label: "Follow-Up", count: 2 },
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
        aria-label="BizvoraOne workspace dashboard in dark mode: good morning greeting, ₹42,50,000 pipeline value across 18 open leads, ₹8,74,500 receivable, 12 active projects, with recent activity and lead pipeline"
        className="font-dashboard flex aspect-[16/9] flex-col overflow-hidden rounded-[1.5em] bg-ink p-[0.6em] text-[1.2cqw] leading-none text-zinc-100 shadow-[0_30px_60px_-15px_rgba(23,23,23,0.5),0_60px_120px_-25px_rgba(69,6,147,0.25)]"
      >
        {/* browser chrome: traffic lights + address bar, so the dark bezel
            reads as a desktop window instead of a plain slab */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-[0.8em] pt-[0.35em] pb-[0.7em]">
          <div className="flex items-center gap-[0.45em]">
            <span className="size-[0.65em] rounded-full bg-[#ff5f57]" />
            <span className="size-[0.65em] rounded-full bg-[#febc2e]" />
            <span className="size-[0.65em] rounded-full bg-[#28c840]" />
          </div>
          <span className="flex items-center gap-[0.4em] rounded-full bg-white/10 px-[1.2em] py-[0.35em] text-[0.7em] text-white/60">
            <Lock className="size-[0.9em]" strokeWidth={2} />
            {new URL(appBaseUrl()).host}/workspace
          </span>
          <span />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.1em] bg-zinc-950 ring-1 ring-zinc-800">
          {/* --- topbar ---------------------------------------------------- */}
          <div className="flex h-[2.9em] shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-[1.1em]">
            <div className="flex items-center gap-[0.7em]">
              <span className="flex items-baseline text-[0.95em] font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Bizvora
                </span>
                <span className="text-zinc-100">One</span>
                <span className="ml-[0.35em] size-[0.375em] translate-y-[-0.1em] rounded-full bg-gradient-to-br from-primary to-primary-dark" />
              </span>
              <span className="h-[1.25em] w-px bg-zinc-800" />
              <span className="flex items-center gap-[0.4em] text-[0.8em]">
                <span className="text-zinc-500">Workspaces</span>
                <ChevronRight className="size-[0.9em] text-zinc-600" />
                <span className="grid size-[1.25em] place-items-center rounded-[0.3em] bg-gradient-to-br from-violet-500 to-purple-700 text-[0.625em] font-semibold text-white">
                  B
                </span>
                <span className="font-semibold text-zinc-100">Bizvora Pvt Ltd</span>
              </span>
            </div>

            <span className="flex items-center gap-[0.35em] rounded-full border border-zinc-700 bg-zinc-800/80 py-[0.2em] pr-[0.5em] pl-[0.2em]">
              <Image
                src={davidSingh}
                alt=""
                width={96}
                height={96}
                className="size-[1.75em] rounded-full object-cover ring-1 ring-zinc-700"
              />
              <ChevronDown className="size-[0.8em] text-zinc-400" />
            </span>
          </div>

          {/* --- body: sidebar rail + overview content --------------------- */}
          <div className="flex min-h-0 flex-1">
            {/* sidebar */}
            <div className="flex w-[23%] shrink-0 flex-col border-r border-zinc-800 bg-zinc-900/40 px-[0.75em] py-[1em]">
              <div className="flex h-[2em] shrink-0 items-center gap-[0.5em] rounded-[0.375em] border border-zinc-800 bg-zinc-900 px-[0.6em]">
                <Search className="size-[0.8em] text-zinc-500" />
                <span className="flex-1 text-[0.78em] text-zinc-500">Search…</span>
                <span className="rounded-[0.25em] border border-zinc-700 bg-zinc-800 px-[0.35em] py-[0.15em] text-[0.625em] text-zinc-400">
                  ⌘K
                </span>
              </div>

              <div className="mt-[1.1em] flex flex-col gap-[0.9em]">
                {SIDEBAR.map((group) => (
                  <div key={group.section} className="flex flex-col gap-[0.3em]">
                    <p className="px-[0.5em] text-[0.625em] font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                      {group.section}
                    </p>
                    {group.items.map((item) => (
                      <span
                        key={item.label}
                        className={`relative flex items-center gap-[0.6em] rounded-[0.5em] px-[0.5em] py-[0.35em] ${
                          item.active
                            ? "bg-gradient-to-r from-primary/[0.16] via-primary/[0.06] to-transparent"
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
                          <span className="grid size-[1.75em] place-items-center text-zinc-500">
                            <item.icon className="size-[1em]" strokeWidth={1.8} />
                          </span>
                        )}
                        <span
                          className={`flex-1 text-[0.8em] ${
                            item.active
                              ? "font-semibold text-zinc-100"
                              : "font-medium text-zinc-400"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="rounded-[0.375em] bg-zinc-800 px-[0.4em] py-[0.15em] text-[0.625em] font-semibold text-zinc-400 tabular-nums">
                            {item.badge}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* feedback card pinned to the rail's bottom, like the real app */}
              <div className="relative mt-auto overflow-hidden rounded-[0.5em] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-primary/10 p-[0.75em]">
                <div className="pointer-events-none absolute -top-[1.5em] -right-[1.5em] size-[5em] rounded-full bg-gradient-to-br from-primary/30 to-primary-dark/20 blur-2xl" />
                <div className="relative flex items-start gap-[0.6em]">
                  <span className="grid size-[1.75em] shrink-0 place-items-center rounded-[0.375em] bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/30">
                    <MessageSquarePlus className="size-[0.875em]" strokeWidth={2} />
                  </span>
                  <div className="flex flex-col gap-[0.25em]">
                    <p className="text-[0.75em] font-semibold text-zinc-100">Send feedback</p>
                    <p className="text-[0.7em] leading-[1.35] text-zinc-500">
                      Spotted a bug or have an idea? Tell us.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="flex min-w-0 flex-1 flex-col gap-[0.9em] bg-zinc-950 p-[1em]">
              {/* hero greeting card */}
              <div className="relative overflow-hidden rounded-[1em] border border-zinc-800 bg-zinc-900">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.16] via-zinc-900 to-primary-dark/[0.12]" />
                <div className="pointer-events-none absolute -top-[5em] -right-[4em] size-[11em] rounded-full bg-gradient-to-br from-primary/30 to-primary-dark/20 opacity-50 blur-3xl" />
                <div className="relative flex items-start justify-between p-[1.3em]">
                  <div className="flex items-start gap-[0.9em]">
                    <span className="grid size-[2.75em] shrink-0 place-items-center rounded-[0.75em] bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/30">
                      <LayoutDashboard className="size-[1.25em]" strokeWidth={2} />
                    </span>
                    <div className="flex flex-col gap-[0.35em]">
                      <p className="text-[0.625em] font-semibold tracking-[0.22em] text-zinc-500 uppercase">
                        Overview · Monday, August 24
                      </p>
                      <p className="text-[1.6em] leading-tight font-semibold tracking-tight text-zinc-100">
                        Good morning, Suraj
                      </p>
                      <p className="text-[0.8em] text-zinc-400">
                        Here’s what’s moving in{" "}
                        <span className="font-medium text-zinc-200">Bizvora Pvt Ltd</span>.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-[0.35em] rounded-[0.375em] bg-primary/15 px-[0.5em] py-[0.2em] text-[0.65em] font-medium tracking-wider text-purple-300 uppercase ring-1 ring-primary/30 ring-inset">
                    <Sparkles className="size-[0.9em]" />
                    Owner view
                  </span>
                </div>
                <div className="relative flex items-center gap-[0.6em] border-t border-zinc-800 bg-zinc-900/60 px-[1.3em] py-[0.6em]">
                  <span className="text-[0.65em] tracking-wider text-zinc-500 uppercase">
                    Quick actions
                  </span>
                  <span className="text-zinc-700">·</span>
                  {QUICK_ACTIONS.map((action) => (
                    <span
                      key={action.label}
                      className="inline-flex items-center gap-[0.4em] rounded-[0.375em] border border-zinc-700 bg-zinc-800/80 px-[0.7em] py-[0.35em] text-[0.78em] font-medium text-zinc-300"
                    >
                      <action.icon className="size-[0.875em] text-zinc-500" strokeWidth={2} />
                      {action.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* KPI row */}
              <div className="grid shrink-0 grid-cols-4 gap-[0.75em]">
                {KPIS.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="relative overflow-hidden rounded-[0.75em] border border-zinc-800 bg-zinc-900 p-[1em]"
                  >
                    <div
                      className={`pointer-events-none absolute -top-[2em] -right-[2em] size-[5em] rounded-full bg-gradient-to-br ${kpi.accent} opacity-[0.16] blur-2xl`}
                    />
                    <div className="flex items-start justify-between gap-[0.5em]">
                      <p className="text-[0.65em] font-medium tracking-wider text-zinc-400 uppercase">
                        {kpi.label}
                      </p>
                      <GradientChip icon={kpi.icon} accent={kpi.accent} />
                    </div>
                    <p className="mt-[0.6em] text-[1.4em] font-semibold tracking-tight text-zinc-100 tabular-nums">
                      {kpi.value}
                    </p>
                    <p className="mt-[0.35em] text-[0.7em] text-zinc-500">{kpi.hint}</p>
                  </div>
                ))}
              </div>

              {/* mini-stat strip */}
              <div className="grid shrink-0 grid-cols-4 gap-[0.5em] rounded-[0.75em] border border-zinc-800 bg-zinc-900 p-[0.75em]">
                {MINI_STATS.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-[0.6em]">
                    <span className="grid size-[1.75em] shrink-0 place-items-center rounded-[0.375em] bg-zinc-800 text-zinc-300">
                      <stat.icon className="size-[0.875em]" strokeWidth={2} />
                    </span>
                    <div className="flex min-w-0 flex-col gap-[0.2em]">
                      <p className="truncate text-[0.65em] tracking-wider text-zinc-400 uppercase">
                        {stat.label}
                      </p>
                      <p className="text-[0.875em] font-semibold text-zinc-100 tabular-nums">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* split row — fills to the board's bottom edge and crops there,
                  so the board reads as a taller app */}
              <div className="grid min-h-0 flex-1 grid-cols-5 gap-[0.75em] overflow-hidden">
                <div className="col-span-3 overflow-hidden rounded-t-[0.75em] border border-b-0 border-zinc-800 bg-zinc-900">
                  <div className="flex items-center gap-[0.6em] border-b border-zinc-800 px-[1.1em] py-[0.7em]">
                    <GradientChip icon={Activity} accent="from-primary to-primary-dark" />
                    <div className="flex flex-col gap-[0.2em]">
                      <p className="text-[0.85em] font-semibold text-zinc-100">Recent activity</p>
                      <p className="text-[0.7em] text-zinc-500">
                        Latest moves across leads, customers, and quotations
                      </p>
                    </div>
                  </div>
                  <ul className="list-none divide-y divide-zinc-800/70">
                    {ACTIVITY.map((row) => (
                      <li
                        key={row.target}
                        className="flex items-center gap-[0.6em] px-[1.1em] py-[0.55em] text-[0.8em]"
                      >
                        <span className="size-[0.375em] shrink-0 rounded-full bg-gradient-to-br from-primary to-primary-dark" />
                        <span className="min-w-0 flex-1 truncate text-zinc-300">
                          {row.action}{" "}
                          <span className="font-medium text-zinc-100">{row.target}</span>{" "}
                          <span className="text-zinc-500">· {row.company}</span>
                        </span>
                        <span className="shrink-0 text-[0.85em] text-zinc-500">{row.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-2 overflow-hidden rounded-t-[0.75em] border border-b-0 border-zinc-800 bg-zinc-900">
                  <div className="flex items-center gap-[0.6em] border-b border-zinc-800 px-[1.1em] py-[0.7em]">
                    <GradientChip icon={Layers} accent="from-violet-500 to-purple-700" />
                    <div className="flex flex-col gap-[0.2em]">
                      <p className="text-[0.85em] font-semibold text-zinc-100">Lead pipeline</p>
                      <p className="text-[0.7em] text-zinc-500">18 open leads by stage</p>
                    </div>
                  </div>
                  <div className="px-[1.1em] py-[0.8em]">
                    <div className="flex h-[0.5em] w-full overflow-hidden rounded-full bg-zinc-800">
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
                          <span className="flex-1 text-zinc-400">{stage.label}</span>
                          <span className="font-medium text-zinc-300 tabular-nums">
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
