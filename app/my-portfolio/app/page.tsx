import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const techStack = [
  "Python",
  "Machine Learning",
  "TensorFlow",
  "Scikit-learn",
  "RAG / LLMs",
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
];

const projects = [
  {
    title: "SoftShares — Corporate Social Network",
    year: "2024",
    tagline:
      "A full-stack internal communication platform built with Flutter and React for Softinsa.",
    banner: "/banners/softshares-banner.jpg",
    accent: "indigo",
    writeup: [
      "The project was divided into two products: a Flutter mobile app for employees and a React web admin dashboard. On the mobile side, I worked on the authentication system — supporting email/password, Google OAuth, and Facebook OAuth — and the events module, which includes filtering by category, a photo album shared between participants, a comment system, and map integration via Google Maps API. The app is fully multilingual (PT/EN/ES), with dynamic greetings based on time of day.",
      "On the web admin dashboard, built in React, I helped implement the statistics dashboard with charts showing user distribution and comment activity, the content moderation system for validating comments across events, forums, and places, and the announcements feature that broadcasts company-wide notices to all mobile users in real time.",
      "One of the most interesting challenges was designing the content validation flow: every comment, event, and place submitted by a user is in a pending state until an admin reviews and approves it. This required careful state management both on the API level and across the two separate frontends.",
    ],
    tags: [
      "Flutter",
      "Dart",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Google Maps API",
      "OAuth 2.0",
      "Git",
    ],
    screenshots: [
      {
        src: "/screenshots/softshares-login-oauth.png",
        label: "Mobile — Login (Google & Facebook OAuth)",
        width: 294,
        height: 570,
      },
      {
        src: "/screenshots/softshares-event-map.png",
        label: "Mobile — Event details & Google Maps",
        width: 291,
        height: 509,
      },
      {
        src: "/screenshots/softshares-admin-dashboard.png",
        label: "Web — Admin statistics dashboard",
        width: 1920,
        height: 2066,
      },
    ],
    github: "https://github.com/ricardo-04/softinsa-social-network",
  },
  {
    title: "Management & Quality Control of Boxes",
    year: "2024",
    tagline:
      "A computer vision and IoT system that detects damaged cardboard boxes in real time and monitors them through a web dashboard.",
    banner: "/banners/boxqc-banner.jpg",
    accent: "amber",
    writeup: [
      "The system turns a Raspberry Pi 3 with a camera into a real-time capture interface. A Flask server exposes an HTTP endpoint that, when called, grabs a frame with the Picamera2 library, encodes it to JPEG with OpenCV, and serves it to the rest of the pipeline. This kept the edge device simple and cheap while letting a more powerful machine handle the heavy inference.",
      "For detection I trained a YOLOv8 model on a Roboflow dataset of boxes in different conditions, using Google Colab's free GPUs. The model classifies each box as “normal box” or “destroyed box” with an associated confidence score, reaching around 0.9 precision. The training curves for precision and recall both trend steadily upward, confirming the model learned to separate the two classes.",
      "The results — box status and validation timestamp — are pushed to a database and surfaced on an OutSystems web dashboard. It gives production managers a real-time overview: counts and percentages of damaged, good and uncertain boxes, a distribution chart, and a searchable history of every captured image. This was a group academic project at the School of Technology and Management of Viseu.",
    ],
    tags: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Flask",
      "Raspberry Pi",
      "Google Colab",
      "Roboflow",
      "OutSystems",
      "IoT",
    ],
    screenshots: [
      {
        src: "/screenshots/boxqc-yolo-detection.png",
        label: "YOLOv8 — Box detection results",
        width: 561,
        height: 561,
      },
      {
        src: "/screenshots/boxqc-raspberry-pi.png",
        label: "Hardware — Raspberry Pi 3 + camera",
        width: 507,
        height: 352,
      },
      {
        src: "/screenshots/boxqc-dashboard.png",
        label: "Web — OutSystems monitoring dashboard",
        width: 1153,
        height: 877,
      },
    ],
    github:
      "https://github.com/ricardo-04/Management-and-Quality-Control-of-Boxes-Computer-Vision-IoT-Project",
  },
];

const accentStyles: Record<
  string,
  { bar: string; tag: string; ring: string }
> = {
  indigo: {
    bar: "from-indigo-500 to-violet-500",
    tag: "border-indigo-200 bg-indigo-50 text-indigo-700",
    ring: "group-hover:border-indigo-300",
  },
  amber: {
    bar: "from-amber-500 to-orange-500",
    tag: "border-amber-200 bg-amber-50 text-amber-700",
    ring: "group-hover:border-amber-300",
  },
};

export default function Home() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="border-b border-indigo-900/20 bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 text-indigo-100 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:shrink-0 lg:border-b-0 lg:border-r">
        <div className="flex h-full flex-col justify-between p-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Ricardo Pombo
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-indigo-200">
              Software Engineer focused on AI, finance and modern applications.
            </p>

            {/* Navigation */}
            <nav className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300/70">
                Navigation
              </p>
              <ul className="mt-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-indigo-200 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/60 transition-colors group-hover:bg-cyan-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Tech stack */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300/70">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-indigo-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300/70">
              Links
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://github.com/ricardo-04"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-indigo-200 transition-colors hover:text-cyan-300"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ricardoapombo/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-indigo-200 transition-colors hover:text-cyan-300"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:ricardoapombo@gmail.com"
                className="text-sm font-medium text-indigo-200 transition-colors hover:text-cyan-300"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-12 sm:px-10 lg:px-14">
        <section id="projects" className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-slate-600">Academic and personal projects.</p>

          {/* Featured case study */}
          <Link
            href="/projects/critical-software"
            className="group mt-10 block overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white">
                  Featured · AI / ML
                </span>
                <span className="text-sm font-medium text-slate-500">
                  Critical Software · 2025
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                AI-Enhanced Semantic Analysis of Vehicle Logs
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                My internship project: an AI-powered tool that automatically
                analyzes automotive vehicle logs — combining Machine Learning
                pipelines (Random Forest, DBSCAN, LSTM) with a
                Retrieval-Augmented Generation system and a local LLM, behind a
                FastAPI + Streamlit interface.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Random Forest",
                  "DBSCAN",
                  "LSTM",
                  "RAG",
                  "TensorFlow",
                  "Hugging Face",
                  "FastAPI",
                  "Streamlit",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-indigo-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-indigo-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors group-hover:text-indigo-500">
                Read the full case study
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </div>
          </Link>

          <div className="mt-10 flex flex-col gap-12">
            {[...projects].reverse().map((project) => {
              const accent =
                accentStyles[project.accent] ?? accentStyles.indigo;
              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors"
                >
                  {/* Colored top bar */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${accent.bar}`}
                  />

                  <div className="p-7 sm:p-9">
                    {/* Header */}
                    <header>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                          {project.title}
                        </h3>
                        <span className="text-sm font-medium text-slate-400">
                          {project.year}
                        </span>
                      </div>
                      <p className="mt-2 text-base leading-relaxed text-slate-600">
                        {project.tagline}
                      </p>
                    </header>

                    {/* Banner image */}
                    <div className="relative mt-6 overflow-hidden rounded-xl">
                      <Image
                        src={project.banner}
                        alt={`${project.title} banner`}
                        width={1400}
                        height={500}
                        className="h-44 w-full object-cover sm:h-56"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                    </div>

                    {/* Write-up — first paragraph */}
                    <div className="mt-6 text-[15px] leading-7 text-slate-700">
                      <p>{project.writeup[0]}</p>
                    </div>

                    {/* Read more — rest of write-up + screenshots */}
                    <details className="group/more mt-4">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 [&::-webkit-details-marker]:hidden">
                        <span className="group-open/more:hidden">Read more</span>
                        <span className="hidden group-open/more:inline">
                          Show less
                        </span>
                        <span className="transition-transform group-open/more:rotate-180">
                          ↓
                        </span>
                      </summary>

                      {project.writeup.length > 1 && (
                        <div className="mt-4 flex flex-col gap-4 text-[15px] leading-7 text-slate-700">
                          {project.writeup.slice(1).map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      )}

                      {/* Screenshots */}
                      <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {project.screenshots.map((shot) => (
                          <figure
                            key={shot.label}
                            className="flex flex-col gap-2"
                          >
                            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                              <Image
                                src={shot.src}
                                alt={shot.label}
                                width={shot.width}
                                height={shot.height}
                                className="h-auto w-full object-cover"
                              />
                            </div>
                            <figcaption className="text-center text-xs font-medium text-slate-500">
                              {shot.label}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </details>

                    {/* Tech tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-md border px-2.5 py-1 text-xs font-medium ${accent.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* GitHub button */}
                    <div className="mt-7">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                      >
                        View on GitHub ↗
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mt-16 max-w-3xl border-t border-slate-200 pt-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            About
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            Full-stack engineer with a strong interest in AI and finance. I
            build projects to learn, experiment and sharpen my skills — always
            looking for the next interesting problem to solve.
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-12 max-w-3xl border-t border-slate-200 pt-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Contact
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            Want to work together or just say hi? Reach out on{" "}
            <a
              href="https://github.com/ricardo-04"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-500"
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/ricardoapombo/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-500"
            >
              LinkedIn
            </a>{" "}
            or by{" "}
            <a
              href="mailto:ricardoapombo@gmail.com"
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-500"
            >
              email
            </a>
            .
          </p>

          <footer className="mt-12 text-xs text-slate-400">
            © {new Date().getFullYear()} Ricardo Pombo
          </footer>
        </section>
      </main>
    </div>
  );
}
