export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Accessibility Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Code Without Limits.
          <br />
          <span className="text-[#58a6ff]">Built for Vision-Impaired Devs.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          AccessCode supercharges VS Code &amp; JetBrains with screen-reader-first navigation,
          audio debugging cues, and frictionless code review — so you ship faster, eyes or no eyes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔊", title: "Audio Debug Cues", desc: "Hear breakpoints, errors, and test results as distinct audio signals." },
            { icon: "🧭", title: "Screen Reader Nav", desc: "Semantic code structure announced clearly — functions, classes, diffs." },
            { icon: "📋", title: "Simplified Reviews", desc: "PR diffs reformatted for linear, distraction-free screen reader flow." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per developer</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "VS Code + JetBrains plugins",
              "Audio debugging suite",
              "Enhanced screen reader nav",
              "Accessible PR review mode",
              "Priority support",
              "14-day free trial"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which IDEs are supported?",
              a: "AccessCode ships plugins for VS Code and all JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.). More editors are on the roadmap."
            },
            {
              q: "Which screen readers work with AccessCode?",
              a: "We test against NVDA, JAWS, and VoiceOver. Our plugins emit ARIA-compliant annotations that any modern screen reader can interpret."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your dashboard at any time. You keep access until the end of your billing period with no hidden fees."
            }
          ].map((item) => (
            <details key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {item.q}
                <span className="text-[#58a6ff] text-lg">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} AccessCode. All rights reserved.
      </footer>
    </main>
  );
}
