"use client";

interface InstallPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall: () => void;
}

export default function InstallPopup({
  isOpen,
  onClose,
  onInstall,
}: InstallPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

      <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">

        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100">
          <img
            src="/icons/icon-192.png"
            alt="App Icon"
            className="h-16 w-16 rounded-xl"
          />
        </div>

        <h2 className="mb-2 text-xl font-bold text-gray-900">
          نصب اپلیکیشن
        </h2>

        <p className="mb-6 text-sm leading-7 text-gray-600">
          برای دسترسی سریع‌تر و تجربه بهتر،
          اپلیکیشن ما را روی گوشی خود نصب کنید.
        </p>

        <button
          onClick={onInstall}
          className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          نصب اپلیکیشن
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full py-2 text-sm text-gray-500"
        >
          فعلاً نه
        </button>

      </div>
    </div>
  );
}