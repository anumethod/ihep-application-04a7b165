export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-10">
        <header className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-wide text-emerald-700">Education</p>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900">Evidence-based learning for patients and families</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Short lessons, videos, and printable guides to help you make informed decisions with your care team.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Condition Fundamentals',
              desc: 'Plain-language explainers of diagnoses, labs, and treatment options.',
            },
            {
              title: 'Medication Literacy',
              desc: 'How to read labels, track side effects, and talk with pharmacists.',
            },
            {
              title: 'Care Planning',
              desc: 'Goal setting, shared decision making, and preparing for visits.',
            },
            {
              title: 'Safety & Privacy',
              desc: 'Protecting PHI, avoiding scams, and secure sharing with providers.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Learn with guidance</h2>
          <p className="text-gray-600 mb-4">
            Sign in to track progress, unlock recommendations, and sync with your provider notes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="px-5 py-2 rounded-full bg-gradient-to-r from-green-700 to-emerald-600 text-white text-sm font-medium" href="/login">
              Log in
            </a>
            <a className="px-5 py-2 rounded-full border border-green-700 text-green-800 text-sm font-medium hover:bg-green-50" href="/register">
              Create account
            </a>
            <a className="px-5 py-2 rounded-full border border-green-200 text-green-700 text-sm font-medium hover:bg-green-50" href="/">
              Back to home
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

