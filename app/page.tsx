export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto flex">
        <aside className="w-80 min-h-screen sticky top-0 p-8 border-r border-slate-200 bg-white">
          <h1 className="text-2xl font-bold">Ricardo Pombo</h1>
          <p className="mt-2 text-slate-600">
            Software Engineer focused on AI, finance and modern applications.
          </p>
        </aside>

        <section className="flex-1 p-10">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-slate-600 mt-2">
            Academic and personal projects.
          </p>
        </section>
      </div>
    </main>
  );
}
