import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Sentinel",
      description: "Skip-tracing & location services. Every lead, verified.",
      gradient: "from-blue-500/10 to-transparent",
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "OSINT",
      description:
        "Digital investigation & pattern mapping. Data that tells the story.",
      gradient: "from-purple-500/10 to-transparent",
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
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      title: "Operations",
      description: "Field verification & logistics. We execute the plan.",
      gradient: "from-sryellow/10 to-transparent",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="watermark" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-sryellow/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 py-20 section">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 gradient-text">
              Signal Ridge
            </h1>
            <div className="h-1 w-32 mx-auto mb-6 gold-divider" />
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-8 font-light tracking-wide">
              Information. Precision. Resolution.
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
              We find what others can't. Signal Ridge combines OSINT, discreet
              investigations, and field operations to deliver verifiable answers
              — quietly, lawfully, and with absolute clarity.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/contact" className="cta cta-primary group">
                Get Verified
                <svg
                  className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                className="cta glass"
                href="/assets/intake-form.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="inline-block w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Intake Form
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-sryellow mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Discretion
                </div>
              </div>
              <div className="h-12 w-px bg-srgray" />
              <div className="text-center">
                <div className="text-4xl font-bold text-sryellow mb-2">
                  24-72h
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Response Time
                </div>
              </div>
              <div className="h-12 w-px bg-srgray" />
              <div className="text-center">
                <div className="text-4xl font-bold text-sryellow mb-2">
                  Idaho+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 section-title">
          Core Capabilities
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-sryellow mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sryellow/5 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Every case begins with a confidential intake. We review your
              needs, confirm legal scope, and deliver a clear engagement
              proposal.
            </p>
            <Link to="/contact" className="cta cta-primary">
              Submit Intake Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
