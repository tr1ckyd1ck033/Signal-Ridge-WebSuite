
import React from "react";

export default function WhisperLock() {
  return (
    <main className="bg-[#0b0f12] min-h-screen text-neutral-200">
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">WhisperLock</h1>
        <p className="mt-3 text-lg text-neutral-400">Hardware-attested. Metadata silent. Device-bound identity.</p>
        <p className="mt-6 text-neutral-300 max-w-3xl">
          WhisperLock was developed inside Lab 7 as our internal coordination layer for sensitive operations. It locks identity
          to the secure hardware inside a device, rejects emulators, rooted environments, and debugging. Messages are relayed as sealed,
          unreadable envelopes. Servers retain no content and minimal metadata. Access requires an invitation.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Capabilities</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-neutral-300">
          <li className="bg-[#0e1316] border border-neutral-800 rounded-xl p-4">Hardware-attested device identity</li>
          <li className="bg-[#0e1316] border border-neutral-800 rounded-xl p-4">End-to-end encryption with forward secrecy</li>
          <li className="bg-[#0e1316] border border-neutral-800 rounded-xl p-4">Sealed relay with minimal metadata</li>
          <li className="bg-[#0e1316] border border-neutral-800 rounded-xl p-4">Root/emulator/debug lockout</li>
          <li className="bg-[#0e1316] border border-neutral-800 rounded-xl p-4">Invite-only activation</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Request Access</h2>
        <p className="text-neutral-400 mb-4">Access is issued. If you need WhisperLock for operations, request an invite.</p>
        <a href="mailto:security@signalridge.com?subject=WhisperLock%20Access%20Request" className="inline-block rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 border border-neutral-700 transition">
          Request Access
        </a>
      </section>
    </main>
  );
}
