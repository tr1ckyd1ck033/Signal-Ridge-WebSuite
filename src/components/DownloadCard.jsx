import React from "react";

export default function DownloadCard({ title, file, desc }) {
  return (
    <div className="card group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sryellow/10 to-transparent flex items-center justify-center text-sryellow flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold mb-1 group-hover:text-sryellow transition-colors">
            {title}
          </h4>
          <p className="text-sm text-gray-400 mb-3">{desc}</p>
          <a
            className="inline-flex items-center gap-2 text-sm font-medium text-sryellow hover:underline"
            href={`/assets/${file}`}
            target="_blank"
            rel="noreferrer"
          >
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
