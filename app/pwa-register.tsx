"use client";
import { useEffect } from "react";
export default function PwaRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
      navigator.serviceWorker.register("/sw.js").catch((error) => console.error("PWA service worker registration failed", error));
    }
  }, []);
  return null;
}
