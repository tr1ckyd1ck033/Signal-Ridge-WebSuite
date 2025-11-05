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

  function update(k, v) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  async function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.consent) {
      alert("Complete required fields and consent");
      return;
    }

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
    }
  }

  return (
    <section className="container mx-auto py-12 section">
      <div className="watermark" />
      <h2 className="text-3xl mb-4">Contact & Intake</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            Full name*
            <input
              className="w-full mt-2 p-2 bg-transparent border border-srgray rounded"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </label>

          <label className="block">
            Email*
            <input
              className="w-full mt-2 p-2 bg-transparent border border-srgray rounded"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </label>

          <label className="block">
            Phone
            <input
              className="w-full mt-2 p-2 bg-transparent border border-srgray rounded"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </label>

          <label className="block">
            Case type
            <select
              className="w-full mt-2 p-2 bg-transparent border border-srgray rounded"
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
          </label>

          <label className="block">
            Short description*
            <textarea
              className="w-full mt-2 p-2 bg-transparent border border-srgray rounded"
              rows="5"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </label>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
            />
            <span className="text-sm">
              I authorize Signal Ridge to perform lawful investigative
              activities and confirm this request is not for unlawful purpose. I
              understand Signal Ridge will provide a Confidential Engagement
              Agreement prior to full engagement.*
            </span>
          </label>

          <div className="flex gap-3">
            <button className="cta cta-primary" type="submit">
              Submit Intake
            </button>
            <a
              className="cta"
              href="/public/assets/intake-form.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Fillable Form
            </a>
          </div>
        </form>

        <aside>
          <h3 className="mb-3">Downloads</h3>

          <div className="grid gap-3">
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

          <div className="mt-6 text-gray-300">
            <strong>Security note:</strong> For sensitive files use encrypted
            transfer (ProtonDrive / Tresorit). Avoid sending sensitive
            attachments by unencrypted email.
          </div>
        </aside>
      </div>
    </section>
  );
}
