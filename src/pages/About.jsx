import React from "react";

export default function About() {
  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Precision",
      description:
        "Every detail matters. We verify, cross-reference, and document with meticulous accuracy.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Discretion",
      description:
        "Your trust is paramount. We operate quietly, maintain confidentiality, and leave no trace.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Integrity",
      description:
        "Legal, ethical, and transparent. We never compromise our principles for any outcome.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Execution",
      description:
        "Results-driven action. We plan thoroughly, execute decisively, and deliver reliably.",
    },
  ];

  return (
    <>
      <section className="container mx-auto px-4 py-12 section">
        <div className="watermark" />

        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title">
            Who We Are
          </h2>
          <div className="gold-divider w-32 mb-8" />
          <p className="text-gray-300 max-w-4xl text-lg leading-relaxed">
            Signal Ridge is a compact team of investigators, analysts, and field
            operatives delivering answers for clients across Idaho and beyond.
            We combine old-school legwork with modern OSINT to find the truth,
            verify it, and present it in a way that matters.
          </p>
        </div>

        {/* Founder Section */}
        <div className="glass rounded-2xl p-8 md:p-10 mb-16 relative overflow-hidden animate-slide-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sryellow/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sryellow/20 to-transparent flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-sryellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  R. M. Thomas Livingston
                </h3>
                <p className="text-sryellow">Founder & Lead Investigator</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              A finder by trade and a problem solver by habit. I started Signal
              Ridge to deliver clear, actionable intelligence without drama.
              Small, local, discreet — and ready to scale.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-sryellow/10 to-transparent flex items-center justify-center text-sryellow">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="glass rounded-2xl p-10 text-center relative overflow-hidden animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-sryellow/5 to-transparent" />
          <div className="relative z-10">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-sryellow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              To provide professional investigative services that combine
              technical expertise, field experience, and unwavering ethical
              standards. We exist to find answers, verify facts, and deliver
              intelligence that empowers informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-transparent to-srblack py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How We Work</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0s" }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sryellow/10 flex items-center justify-center text-2xl font-bold text-sryellow">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Intake & Assessment
              </h4>
              <p className="text-gray-400">
                Submit your case details through our secure intake form. We
                review scope and confirm legal parameters.
              </p>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sryellow/10 flex items-center justify-center text-2xl font-bold text-sryellow">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Investigation & Execution
              </h4>
              <p className="text-gray-400">
                Our team deploys the appropriate methods—OSINT, field ops, or
                technical analysis—to gather verified intelligence.
              </p>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sryellow/10 flex items-center justify-center text-2xl font-bold text-sryellow">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Delivery & Follow-up
              </h4>
              <p className="text-gray-400">
                Receive comprehensive reports with actionable findings,
                documentation, and ongoing support as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
