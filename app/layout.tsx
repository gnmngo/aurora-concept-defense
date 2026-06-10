import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProgressBar from "@/components/ui/ProgressBar";

export const metadata: Metadata = {
  title: "AURORA — Concept Defense",
  description: "Fully paperless thesis defense platform at Partido State University.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // We ALWAYS start in light mode.
                  // The toggle button will later add/remove the dark class.
                  document.documentElement.classList.remove('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <ProgressBar />
        <div className="flex max-w-[1340px] mx-auto px-4 gap-6 items-start">
          <Sidebar />
          <main className="flex-1 py-8 min-w-0">{children}</main>
        </div>
      </body>
    </html>
  );
}