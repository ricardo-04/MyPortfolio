import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinSight AI — Financial Intelligence Platform | Ricardo Pombo",
  description:
    "How I built FinSight AI: an end-to-end AI engineering project combining agentic workflows, RAG pipelines, the Model Context Protocol, OpenTelemetry observability, and a full Docker-based production stack.",
};

const tags = [
  "Python",
  "PydanticAI",
  "Agentic AI",
  "RAG",
  "Model Context Protocol (MCP)",
  "NVIDIA NIM",
  "OpenAI",
  "Ollama",
  "pgvector",
  "PostgreSQL",
  "FastAPI",
  "Next.js",
  "TypeScript",
  "OpenTelemetry",
  "Jaeger",
  "Docker Compose",
  "Redis",
  "SQLite",
  "CI / GitHub Actions",
  "SSE (streaming)",
];

function SkillCard({
  icon,
  title,
  body,
  accent,
}: {
  icon: string;
  title: string;
  body: string;
  accent: "teal" | "blue" | "violet" | "amber";
}) {
  const colors: Record<string, string> = {
    teal: "border-teal-800/50 bg-teal-950/30 text-teal-300",
    blue: "border-blue-800/50 bg-blue-950/30 text-blue-300",
    violet: "border-violet-800/50 bg-violet-950/30 text-violet-300",
    amber: "border-amber-800/50 bg-amber-950/30 text-amber-300",
  };
  const titleColors: Record<string, string> = {
    teal: "text-teal-400",
    blue: "text-blue-400",
    violet: "text-violet-400",
    amber: "text-amber-400",
  };
  return (
    <div
      className={`rounded-xl border p-5 ${colors[accent]}`}
    >
      <p className="text-2xl">{icon}</p>
      <p className={`mt-2 text-sm font-semibold uppercase tracking-wide ${titleColors[accent]}`}>
        {title}
      </p>
      <p className="mt-1 text-sm leading-6 text-zinc-400">{body}</p>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 scroll-mt-8 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[16px] leading-8 text-zinc-400">{children}</p>;
}

export default function FinSightAIArticle() {
  return (
    <div className="min-h-screen bg-[#090909]">
      {/* Top bar */}
      <div className="border-b border-zinc-800 bg-[#0e0e0e]/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-200"
          >
            ← Back to portfolio
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Personal project
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 pb-24">
        {/* Header */}
        <header className="pt-12">
          <div className="flex items-center gap-3 text-sm font-medium text-teal-400">
            <span>FinSight AI</span>
            <span className="text-zinc-700">•</span>
            <span className="text-zinc-500">Personal project · 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-zinc-100 sm:text-4xl">
            AI-Powered Financial Intelligence Platform
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            FinSight AI ingests financial PDFs — 10-Qs, 10-Ks, earnings decks —
            and turns them into structured, queryable knowledge through four
            AI-driven workflows: structured metric extraction, grounded RAG
            chat, an autonomous multi-tool agent, and a live-market financial
            intelligence terminal. Built to go deep on the modern AI engineering
            stack: agentic AI, RAG pipelines, the Model Context Protocol, and
            production-grade observability.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-teal-800/60 bg-teal-950/30 px-2.5 py-1 text-xs font-medium text-teal-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/ricardo-04/FinSight-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-zinc-100"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </header>

        {/* Banner */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-[#0F1A2E] shadow-sm">
          <Image
            src="/finsight_linkedin_banner.svg"
            alt="FinSight AI — banner showing the tech stack: RAG pipeline, AI agents, OpenTelemetry, Docker"
            width={770}
            height={400}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Why I built this */}
        <H2>Why I built this</H2>
        <P>
          Financial documents are dense and inconsistent — a Berkshire Hathaway
          10-Q spans ~227 000 characters across 69 chunks, and the income
          statement can sit past the naive truncation window of any standard LLM
          call. I chose this domain deliberately: it is hard enough to force real
          engineering decisions instead of toy examples, yet grounded enough that
          the quality of every AI answer is verifiable.
        </P>
        <P>
          The real goal was to build a hands-on vehicle for the modern AI
          engineering stack — agentic AI, RAG, the Model Context Protocol — and
          to do it in a way that every layer, from the LLM call to the production
          infra, could be evaluated, observed and iterated on.
        </P>

        {/* What it does */}
        <H2>What it does</H2>
        <P>
          FinSight AI exposes four distinct workflows through the same Next.js
          front-end:
        </P>
        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/60 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-300">Mode</th>
                <th className="px-4 py-3 font-semibold text-zinc-300">What it does</th>
                <th className="px-4 py-3 font-semibold text-zinc-300">How</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 bg-[#111111]">
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-200">Extract</td>
                <td className="px-4 py-3 text-zinc-400">Upload a 10-Q/10-K → structured metrics (revenue, YoY growth, risks)</td>
                <td className="px-4 py-3 text-zinc-500">LLM extraction agent + chunk prioritisation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-200">Chat (RAG)</td>
                <td className="px-4 py-3 text-zinc-400">Ask questions; every answer cites source passages</td>
                <td className="px-4 py-3 text-zinc-500">Semantic retrieval + research agent</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-200">Agent mode</td>
                <td className="px-4 py-3 text-zinc-400">Autonomous multi-tool reasoning over docs and live market data</td>
                <td className="px-4 py-3 text-zinc-500">Agentic analyst (streaming SSE)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-200">Financial Intel</td>
                <td className="px-4 py-3 text-zinc-400">Type a ticker → full AI analyst report with live metric cards</td>
                <td className="px-4 py-3 text-zinc-500">FMP live data + financial analyst agent</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Key skills */}
        <H2>Key skills & what I learned</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <SkillCard
            icon="🤖"
            accent="blue"
            title="Agentic AI & multi-step reasoning"
            body="Four PydanticAI agents with clearly scoped roles. The agentic analyst decides which tools to call, in what order, and how to combine results — with UsageLimits, per-tool timeouts and output truncation as guardrails so a runaway tool loop can never silently blow the token budget."
          />
          <SkillCard
            icon="📚"
            accent="teal"
            title="RAG — beyond naive vector search"
            body="Hybrid retrieval (semantic + BM25-style signals), overlapping chunks to preserve context at boundaries, and financial-keyword density ranking to reach deep content in long SEC filings. Verified: Berkshire Q3 2024 → revenue $92,995M, +2.8% YoY — from a 227k-char document."
          />
          <SkillCard
            icon="🔌"
            accent="violet"
            title="Model Context Protocol (MCP)"
            body="A standalone FastMCP stdio server exposes four tools — semantic search, live financials, metric extraction, SEC fetch — to any MCP client: the web UI, VS Code Copilot, Claude Desktop. Same backend tools, zero duplication."
          />
          <SkillCard
            icon="📡"
            accent="amber"
            title="Observability with OpenTelemetry"
            body="LLM calls are black boxes without traces. Every agent run and tool call is wrapped in an OTLP span, exported to Jaeger via the OpenTelemetry Collector. Structured JSON logs inject the active trace_id so a frontend error correlates directly to the retrieval span that caused it."
          />
          <SkillCard
            icon="🐳"
            accent="blue"
            title="Docker Compose & containers"
            body="A single docker compose up --build brings up frontend, FastAPI backend, PostgreSQL + pgvector, Redis, the OpenTelemetry Collector and Jaeger — all with health checks. The same compose stack mirrors production, eliminating 'works on my machine' issues."
          />
          <SkillCard
            icon="🧪"
            accent="teal"
            title="Evals & CI without live LLMs"
            body="Deterministic eval suites (Recall@K, MRR, groundedness checks) run in GitHub Actions without any API keys. This was a forcing function for clean architecture: retrieval and grounding logic had to be unit-testable in isolation, which made them cleaner by design."
          />
          <SkillCard
            icon="⚙️"
            accent="violet"
            title="Production hardening"
            body="Rate limiting (Redis INCR or in-process), optional API-key auth, an FMP circuit breaker (opens after 5 failures, 30s cooldown), Redis-backed conversation memory with graceful fallback, and liveness / readiness health probes — so the app stays useful even when an upstream is flaky."
          />
          <SkillCard
            icon="🏗️"
            accent="amber"
            title="LLM provider abstraction"
            body="A single llm_provider.py module presents an OpenAI-compatible interface regardless of what's underneath: NVIDIA NIM, Ollama, or OpenAI. Swapping providers mid-project (NIM → Ollama → OpenAI) required only a one-line env var change — no code changes."
          />
        </div>

        {/* Architecture */}
        <H2>Architecture</H2>
        <P>
          The backend is a FastAPI application structured around clearly bounded
          modules: agents, RAG (parse → chunk → embed → retrieve), prompt
          registry, tools, telemetry and API routes. A standalone MCP server
          runs as a separate process and exposes the same financial capabilities
          over stdio to any MCP client.
        </P>
        <P>
          In production the full stack runs in Docker Compose: the Next.js
          frontend talks to the FastAPI backend, which uses PostgreSQL + pgvector
          for vector storage, Redis for cache and conversation memory, and the
          OpenTelemetry Collector to route traces to Jaeger. A SQLite fallback
          (cosine similarity computed in Python) keeps the development loop fast
          without needing a running Postgres instance.
        </P>

        {/* Agentic workflow deep-dive */}
        <H2>The agentic workflow in detail</H2>
        <P>
          The agentic analyst is the centrepiece. When agent mode is toggled on,
          the model decides autonomously which tools to call — semantic document
          search via the RAG pipeline or live market data from the Financial
          Modeling Prep API — and in what order. It streams its answer back to
          the UI via Server-Sent Events, reporting both the final text and the
          list of tools it actually used.
        </P>
        <P>
          Without the toggle, the same chat endpoint runs as standard RAG:
          grounded only in the uploaded document, citing source passages with
          numbered references. Same UI, two grounding strategies, clearly
          communicated to the user.
        </P>
        <P>
          Guardrails make the agentic mode safe to ship:{" "}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-300">
            UsageLimits(request_limit, tool_calls_limit)
          </code>{" "}
          bound total model requests and tool calls per run;{" "}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-300">
            asyncio.wait_for(..., timeout)
          </code>{" "}
          ensures one slow dependency cannot hang the entire run; and tool
          outputs are truncated before being fed back into the context to keep
          token usage predictable.
        </P>

        {/* RAG detail */}
        <H2>RAG pipeline in detail</H2>
        <P>
          The pipeline has four stages: parse (PyMuPDF, with encrypted-PDF
          rejection and a page cap), chunk (overlapping windows to preserve
          context at boundaries), embed (
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-300">
            nvidia/nv-embedqa-e5-v5
          </code>{" "}
          at 1024 dimensions), and retrieve (native cosine distance in pgvector
          in production, Python cosine similarity in SQLite for local
          development).
        </P>
        <P>
          The extraction path adds one more step: SEC filings are so long that a
          naive top-K retrieval never reaches the income statement buried on page
          40. The solution is to rank chunks by financial-keyword density before
          feeding them to the extraction agent, raising the effective input budget
          so the metrics deep in the PDF are actually reached.
        </P>

        {/* MCP server */}
        <H2>Model Context Protocol server</H2>
        <P>
          Beyond the web UI, the project ships a standalone{" "}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-300">
            mcp_server.py
          </code>{" "}
          built with FastMCP. It exposes four tools over stdio:{" "}
          <em>search_documents</em>, <em>get_company_financials</em>,{" "}
          <em>extract_metrics</em>, and <em>fetch_sec_filing</em>. The same
          backend logic powers both the web app and any external MCP client,
          including VS Code Copilot and Claude Desktop, with no duplication.
          Building this taught me how tool schemas, argument validation and
          session lifecycle work under the hood.
        </P>

        {/* Screenshots */}
        <H2>Screenshots — live session (Apple 10-Q Q1 2025)</H2>
        <P>
          All screenshots were captured during a live run with a real Apple
          10-Q filing. The AI extracted: Company = Apple Inc. · Revenue =
          $124,306M · YoY Growth = +3.95% · 5 key risks identified
          automatically.
        </P>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { src: "/finsight/01-landing-page.png", label: "Landing page", w: 1920, h: 1080 },
            { src: "/finsight/02-upload.png", label: "PDF upload", w: 1920, h: 1080 },
            { src: "/finsight/03-extracted-metrics.png", label: "Extracted metrics (overview)", w: 1920, h: 1080 },
            { src: "/finsight/04-extracted-metrics-detail.png", label: "Extracted metrics (detail)", w: 1920, h: 1080 },
            { src: "/finsight/05-chat-rag.png", label: "Chat — RAG mode (grounded, with citations)", w: 1920, h: 1080 },
            { src: "/finsight/06-agent-mode.png", label: "Chat — Agent mode (multi-tool, streaming)", w: 1920, h: 1080 },
          ].map((shot) => (
            <figure key={shot.label} className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <Image
                  src={shot.src}
                  alt={shot.label}
                  width={shot.w}
                  height={shot.h}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="text-center text-xs font-medium text-zinc-600">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Tech stack */}
        <H2>Full tech stack</H2>
        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/60 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-300">Layer</th>
                <th className="px-4 py-3 font-semibold text-zinc-300">Technology</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 bg-[#111111]">
              {[
                ["Frontend", "Next.js 14, React, TailwindCSS, TypeScript"],
                ["Backend", "FastAPI, Python 3.12, SQLAlchemy (async)"],
                ["AI / Agents", "PydanticAI, OpenAI-compatible LLMs (NVIDIA NIM default)"],
                ["Vector store", "PostgreSQL + pgvector (prod) · SQLite + JSON cosine (dev)"],
                ["Cache / memory", "Redis"],
                ["Live data", "Financial Modeling Prep (FMP)"],
                ["Protocol", "Model Context Protocol (FastMCP stdio)"],
                ["Observability", "OpenTelemetry → Collector → Jaeger"],
                ["Infra", "Docker Compose"],
                ["CI", "GitHub Actions (evals, ruff, pytest)"],
              ].map(([layer, tech]) => (
                <tr key={layer}>
                  <td className="px-4 py-3 font-medium text-zinc-200">{layer}</td>
                  <td className="px-4 py-3 text-zinc-400">{tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Wrap up */}
        <H2>What I took away</H2>
        <P>
          FinSight AI was my deepest dive into applied AI engineering. The
          biggest shift in thinking was around <strong>observability</strong>:
          without OpenTelemetry spans wrapping every agent run and tool call,
          debugging a bad answer means guessing. Structured traces and logs are
          not optional for AI systems — they are the only way to know what the
          model actually did.
        </P>
        <P>
          The second major lesson was that{" "}
          <strong>RAG quality is entirely about retrieval quality</strong> —
          chunking strategy, embedding model, ranking heuristics. A better
          retriever beats a better LLM almost every time. Designing deterministic
          evals (Recall@K, MRR, groundedness) that run in CI without live API
          keys was the forcing function that made the retrieval layer rigorous.
        </P>
        <P>
          Building proper agentic guardrails — usage limits, per-tool timeouts,
          output truncation — turned out to be as important as the agent logic
          itself. Autonomous systems without explicit cost and latency bounds
          are not production-ready, no matter how capable the model is.
        </P>

        <div className="mt-14 border-t border-zinc-800 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-zinc-100"
          >
            ← Back to portfolio
          </Link>
        </div>
      </article>
    </div>
  );
}
