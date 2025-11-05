import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Signal Ridge OSINT",
      description:
        "OSINT team maps digital footprints, network relationships, and public records. We transform open sources into usable intelligence.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
      ),
      features: [
        "Digital Footprint Analysis",
        "Network Mapping",
        "Public Records Investigation",
      ],
      color: "from-blue-500/10",
    },
    {
      title: "Signal Ridge Sentinel",
      description:
        "Skip tracing, asset location, and verification. We compile trails, verify identities, and deliver documented findings you can rely on.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      features: ["Skip Tracing", "Asset Location", "Identity Verification"],
      color: "from-green-500/10",
    },
    {
      title: "Signal Ridge Field Operations",
      description:
        "On-site verification, logistics coordination, and evidence capture. Deployed discretely and documented for chain-of-custody.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      features: [
        "On-Site Verification",
        "Logistics Coordination",
        "Evidence Documentation",
      ],
      color: "from-sryellow/10",
    },
    {
      title: "Signal Ridge Technical Works",
      description:
        "Defensive network scans, data recovery, and web presence mapping. Authorized testing only with written permission.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      features: [
        "Network Security Scans",
        "Data Recovery",
        "Web Presence Analysis",
      ],
      color: "from-purple-500/10",
    },
    {
      title: "Signal Ridge Advisory",
      description:
        "Strategy, risk assessment, and operational planning. Practical guidance, no fluff.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      features: [
        "Strategic Planning",
        "Risk Assessment",
        "Operational Consulting",
      ],
      color: "from-red-500/10",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 section">
      <div className="watermark" />

      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title">
          Services
        </h2>
        <div className="gold-divider w-32 mx-auto mb-6" />
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Comprehensive investigative services delivered with precision,
          discretion, and unwavering commitment to legal and ethical standards.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="card group animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} to-transparent flex items-center justify-center text-sryellow group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-sryellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-sryellow/10 text-sryellow border border-sryellow/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 self-center">
                <svg
                  className="w-6 h-6 text-sryellow opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="glass rounded-2xl p-10 text-center relative overflow-hidden animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-br from-sryellow/5 to-transparent" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every case is unique. Contact us to discuss your specific needs and
            receive a tailored approach that fits your situation.
          </p>
          <Link to="/contact" className="cta cta-primary">
            Start Your Intake
          </Link>
        </div>
      </div>
    </section>
  );
}
