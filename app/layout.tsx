import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Virtual Reality - Experience the Future of Gaming | Light VR",
  description: "Explore immersive virtual reality experiences with cutting-edge VR headsets. Discover Metaverse, AIoT, HoloLens, and TPCASTT technologies. Join 400k+ users in the new digital world.",
  keywords: ["virtual reality", "VR headsets", "metaverse", "gaming", "VR technology", "immersive experience"],
  authors: [{ name: "Light VR" }],
  openGraph: {
    title: "Virtual Reality - Experience the Future of Gaming",
    description: "Explore immersive VR experiences with cutting-edge technology",
    type: "website",
  },
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
