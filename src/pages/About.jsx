import React from "react";
export default function About() {
  return (
    <>
      <section className="container mx-auto py-12 section">
        <div className="watermark"></div>
        <h2 className="text-3xl mb-4">Who we are</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-yellow-600 to-yellow-400 mb-6"></div>
        <p className="text-gray-300 max-w-3xl">
          Signal Ridge is a compact team of investigators, analysts, and field
          operatives delivering answers for clients across Idaho and beyond. We
          combine old-school legwork with modern OSINT to find the truth, verify
          it, and present it in a way that matters.
        </p>
        <div className="mt-8 p-6 border border-srgray rounded">
          <h3 className="font-semibold">R. M. Thomas Livingston — Founder</h3>
          <p className="text-gray-300 mt-2">
            A finder by trade and a problem solver by habit. I started Signal
            Ridge to deliver clear, actionable intelligence without drama.
            Small, local, discreet — and ready to scale.
          </p>
        </div>
        <div className="mt-8">
          <h4 className="font-semibold">Core values</h4>
          <ul className="list-disc ml-6 text-gray-300 mt-2">
            <li>Precision</li>
            <li>Discretion</li>
            <li>Integrity</li>
            <li>Execution</li>
          </ul>
        </div>
      </section>
      <section className="min-h-screen bg-black text-white flex flex-col justify-center">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
          {/* all your content */}
        </div>
      </section>
    </>
  );
}
