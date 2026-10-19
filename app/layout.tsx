import type { Metadata, Viewport } from "next";
import "./globals.css";
import PwaRegister from "./pwa-register";

export const metadata: Metadata = {
  title: "Zerowatt Energy | Industrial Energy Intelligence",
  description: "Turn plant data into clear energy actions with ZOE.",
  applicationName: "Zerowatt Energy",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Zerowatt" },
  icons: { icon: "/icons/zoe.svg", apple: "/icons/zoe.svg" },
};
export const viewport: Viewport = { themeColor: "#071b18", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PwaRegister />{children}</body></html>;
}
