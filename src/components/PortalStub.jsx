import React, { useState } from "react";

export default function PortalStub() {
  const [pwd, setPwd] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    setError("");

    if (pwd === "s3cur3") {
      setOk(true);
    } else {
      setError("Access denied. Invalid credentials.");
      setPwd("");
    }
  }

  if (ok) {
    return (
      <section className="container mx-auto px-4 py-12 section">
        <div className="watermark" />

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-10 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Client Portal</h2>
                <p className="text-gray-400">Secure access granted</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-400"
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
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Active Cases</h3>
                <p className="text-gray-400 text-sm">
                  Your active investigations and case files will appear here.
                  All documents are encrypted and access-logged for security.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Secure File Transfer</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Upload sensitive documents using our encrypted transfer
                  system. Files are automatically encrypted and stored with
                  zero-knowledge architecture.
                </p>
                <button className="cta glass">
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
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  Upload Files
                </button>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Communication</h3>
                <p className="text-gray-400 text-sm">
                  Secure messaging with your assigned investigator. All
                  communications are end-to-end encrypted.
                </p>
              </div>

              <div className="glass rounded-lg p-4 flex items-start gap-3">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <div className="text-sm text-gray-400">
                  <strong className="text-white">Security Notice:</strong> Never
                  share portal credentials. Use encrypted channels (ProtonMail,
                  Signal) for sensitive communications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12 section min-h-[70vh] flex items-center">
      <div className="watermark" />

      <div className="max-w-md mx-auto w-full">
        <div className="glass rounded-2xl p-10 animate-scale-in">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-sryellow/20 to-transparent flex items-center justify-center">
              <svg
                className="w-10 h-10 text-sryellow"
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
            </div>
            <h2 className="text-2xl font-bold mb-2">Client Portal</h2>
            <p className="text-gray-400 text-sm">
              Restricted Access - Authorized Users Only
            </p>
          </div>

          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Portal Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="form-input pr-10"
                  value={pwd}
                  onChange={(e) => {
                    setPwd(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your password"
                  autoFocus
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
              {error && (
                <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {error}
                </div>
              )}
            </div>

            <button className="w-full cta cta-primary" type="submit">
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
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
              Enter Portal
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-srgray/30 text-center">
            <p className="text-sm text-gray-500">
              Need access?{" "}
              <a href="/contact" className="text-sryellow hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 glass rounded-lg p-4 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-sryellow flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs text-gray-400">
            This portal is for authorized clients only. All access attempts are
            logged and monitored for security purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
