import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Virtual Reality",
  description: "A landing page of Virtual Reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
