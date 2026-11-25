import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MechSpace",
  description: "Digital Learning Space for Mechanical Engineering Education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
