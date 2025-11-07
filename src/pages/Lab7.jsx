
import React from "react";
import { Link } from "react-router-dom";

export default function Lab7() {
  return (
    <main className="bg-[#0b0f12] min-h-screen text-neutral-200">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0b0f12]" />
        <div className="absolute inset-0 opacity-[0.08] blur-3xl"
             style={{ backgroundImage: 'url("/assets/whisperlock-ui-redacted.png")', backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Lab 7</h1>
          <p className="mt-3 text-lg text-neutral-400">Internal Systems Development</p>
          <p className="mt-6 text-neutral-300 max-w-2xl">
            Tools built here are issued, not marketed. Lab 7 is the applied systems engineering cell inside Signal Ridge.
            Work focuses on communication integrity, counter-surveillance resilience, and operational coordination in contested environments.
            Outputs are developed to solve our own problems first. Some are shared. Few are explained.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Selected Output</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-[#0e1316] border border-neutral-800 rounded-xl p-4">
            <div>
              <div className="font-medium text-white">WhisperLock</div>
              <div className="text-sm text-neutral-400">Hardware-attested end-to-end communications (Invite-Only)</div>
            </div>
            <Link to="/whisperlock" className="text-neutral-200 hover:text-white underline">Learn more</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
