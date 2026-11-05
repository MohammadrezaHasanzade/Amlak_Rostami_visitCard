"use client";

import { useEffect, useState } from "react";
import InstallPopup from "./InstallPopup";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;

    setIsInstalled(isStandalone);

    if (isStandalone) return;

    const handleBeforeInstall = (event: Event) => {
      event.preventDefault();

      setDeferredPrompt(
        event as BeforeInstallPromptEvent,
      );

      setIsOpen(true);
    };

    const handleInstalled = () => {
      setIsInstalled(true);
      setIsOpen(false);
      setDeferredPrompt(null);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstall,
    );

    window.addEventListener(
      "appinstalled",
      handleInstalled,
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstall,
      );

      window.removeEventListener(
        "appinstalled",
        handleInstalled,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;

    if (result.outcome === "accepted") {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
    setIsOpen(false);
  };

  if (isInstalled || !deferredPrompt) return null;

  return (
    <InstallPopup
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onInstall={handleInstall}
    />
  );
}