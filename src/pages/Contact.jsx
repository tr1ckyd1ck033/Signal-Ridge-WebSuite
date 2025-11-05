import React, { useState } from "react";
import DownloadCard from "../components/DownloadCard";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    method: "email",
    type: "Person locate",
    message: "",
    consent: false,
  });

  const [submitting, setSubmitting] = useState(false);

  function update(k, v) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  async function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.consent) {
      alert("Complete required fields and consent");
      return;
    }

    setSubmitting(true);

    const endpoint = "https://formspree.io/f/PLACEHOLDER";
    const payload = {
      "Full Name": form.name,
      Email: form.email,
      Phone: form.phone,
      "Preferred Method": form.method,
      "Case Type": form.type,
      Message: form.message,
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Intake submitted. We will respond within 24–72 hours.");
        setForm({
          name: "",
          email: "",
          phone: "",
          method: "email",
          type: "Person locate",
          message: "",
          consent: false,
        });
      } else {
        alert("Submission failed. Try again or email signalridgehq@proton.me");
      }
    } catch (err) {
      alert("Network error. Try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="container mx-auto px-4 py-12 section">
      <div className="watermark" />

      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title">
          Contact & Intake
        </h2>
        <div className="gold-divider w-32 mx-auto mb-6" />
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Start your case with a confidential intake. All submissions are
          reviewed within 24-72 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="animate-slide-up">
          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full name <span className="text-sryellow">*</span>
              </label>
              <input
                className="form-input"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email <span className="text-sryellow">*</span>
              </label>
              <input
                type="email"
                className="form-input"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                className="form-input"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(208) 555-0123"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Case type <span className="text-sryellow">*</span>
              </label>
              <select
                className="form-input cursor-pointer"
                value={form.type}
                onChange={(e) => update("type", e.target.value)}
              >
                <option>Person locate</option>
                <option>Asset locate</option>
                <option>OSINT</option>
                <option>Technical</option>
                <option>Advisory</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Short description <span className="text-sryellow">*</span>
              </label>
              <textarea
                className="form-input resize-none"
                rows="5"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Provide a brief overview of your case needs..."
                required
              />
            </div>

            <div className="glass rounded-lg p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-srgray bg-transparent checked:bg-sryellow checked:border-sryellow cursor-pointer"
                  required
                />
                <span className="text-sm text-gray-300">
                  I authorize Signal Ridge to perform lawful investigative
                  activities and confirm this request is not for unlawful
                  purpose. I understand Signal Ridge will provide a Confidential
                  Engagement Agreement prior to full engagement.{" "}
                  <span className="text-sryellow">*</span>
                </span>
              </label>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className={`cta cta-primary ${
                  submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Intake
                    <svg
                      className="inline-block w-5 h-5 ml-2"
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
                  </>
                )}
              </button>
              <a
                className="cta glass"
                href="/public/assets/intake-form.pdf"
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
                Download Form
              </a>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <aside className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6">Downloads</h3>
            <div className="grid gap-4">
              <DownloadCard
                title="Intake Form (PDF)"
                file="intake-form.pdf"
                desc="Fillable client intake form."
              />
              <DownloadCard
                title="Confidential Agreement (NDA)"
                file="nda.pdf"
                desc="Confidential Engagement Agreement (fillable)."
              />
              <DownloadCard
                title="Intel Report Template"
                file="intel-report-template.pdf"
                desc="Report template for deliverables."
              />
              <DownloadCard
                title="Master Operations"
                file="master-operations.pdf"
                desc="Full operations architecture (master)."
              />
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <svg
                className="w-6 h-6 text-sryellow flex-shrink-0 mt-1"
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
              <div>
                <h4 className="font-semibold mb-2">Security Note</h4>
                <p className="text-sm text-gray-400">
                  For sensitive files use encrypted transfer (ProtonDrive /
                  Tresorit). Avoid sending sensitive attachments by unencrypted
                  email.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-6 mt-4">
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-sryellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:signalridgehq@proton.me"
                  className="hover:text-sryellow transition-colors"
                >
                  signalridgehq@proton.me
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-sryellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Mountain Home, ID</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-sryellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Response: 24-72 hours</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
