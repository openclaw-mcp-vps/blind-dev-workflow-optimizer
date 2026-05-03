import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AccessCode — Workflow Optimizer for Vision-Impaired Developers",
  description: "VS Code & JetBrains plugins with enhanced screen reader navigation, audio debugging cues, and simplified code review for vision-impaired developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a8e2a1e1-e4a2-4fe3-aacf-3435bb8209de"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
