import {
  Hand,
  Upload,
  Wand2,
  ZoomIn,
  AlertTriangle,
} from "lucide-react";

const tools = [
  { icon: Upload, label: "Upload" },
  { icon: Hand, label: "Pan" },
  { icon: ZoomIn, label: "Zoom" },
  { icon: Wand2, label: "Wand" },
] as const;

const logs = [
  "[System] UI Initialized",
  "[System] PhaseCanvas v0.1.0 ready",
  "[Canvas] Awaiting micrograph input…",
  "[AI] Inspector modules loaded",
  "[Metrics] No active analysis session",
  "[Simulation] Engine idle — click Run to start",
];

export default function PhaseCanvas() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="flex min-h-0 flex-1">
        {/* Left tool palette */}
        <aside className="flex w-16 shrink-0 flex-col items-center gap-1 border-r border-zinc-800 bg-zinc-900 py-3">
          {tools.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              title={label}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-500"
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </button>
          ))}
        </aside>

        {/* Center canvas */}
        <main
          className="relative min-w-0 flex-1 bg-zinc-950"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgb(63 63 70 / 0.45) 1px, transparent 1px),
              linear-gradient(to right, rgb(39 39 42 / 0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(39 39 42 / 0.35) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px, 40px 40px, 40px 40px",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <p className="select-none text-sm font-medium tracking-wide text-zinc-500">
              Drop Micrograph Here
            </p>
          </div>
        </main>

        {/* Right AI Inspector */}
        <aside className="flex w-80 shrink-0 flex-col gap-4 overflow-y-auto border-l border-zinc-800 bg-zinc-900 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            AI Inspector
          </h2>

          <section className="rounded-md border border-zinc-700 bg-zinc-950/60 p-4">
            <h3 className="mb-3 text-sm font-semibold text-zinc-200">
              Current Metrics
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Grain Size</dt>
                <dd className="font-mono text-zinc-300">12.4 µm (ASTM 8)</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Phase α</dt>
                <dd className="font-mono text-zinc-300">68.2%</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Phase β</dt>
                <dd className="font-mono text-zinc-300">31.8%</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-md border border-zinc-700 bg-zinc-950/60 p-4">
            <h3 className="mb-3 text-sm font-semibold text-zinc-200">
              Expert Advisory
            </h3>
            <div className="flex gap-3 rounded border border-amber-900/60 bg-amber-950/40 p-3">
              <AlertTriangle
                className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                strokeWidth={2}
              />
              <p className="text-sm leading-relaxed text-amber-200/90">
                Elevated β-phase fraction detected. Recommend reducing hold
                temperature by 15–20°C during heat treatment to minimize
                embrittlement risk.
              </p>
            </div>
          </section>

          <section className="rounded-md border border-zinc-700 bg-zinc-950/60 p-4">
            <h3 className="mb-3 text-sm font-semibold text-zinc-200">
              Simulation
            </h3>
            <button
              type="button"
              className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Run Simulation
            </button>
          </section>
        </aside>
      </div>

      {/* Bottom console */}
      <footer className="h-48 shrink-0 overflow-y-auto border-t border-zinc-800 bg-black px-4 py-3 font-mono text-xs leading-relaxed text-emerald-400/90">
        {logs.map((line) => (
          <div key={line} className="whitespace-pre">
            {line}
          </div>
        ))}
      </footer>
    </div>
  );
}
