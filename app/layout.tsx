import type { Metadata } from "next";
import { userInfo } from "@/config/conf";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InstallPWA from "@/components/pwa/InstallPWA";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: `${userInfo.tab_title}`,
  description: `${userInfo.description}`,
  keywords: `${userInfo.keywords}`,
  applicationName: `${userInfo.tab_title}`,
  appleWebApp: {
    capable: true,
    title: `${userInfo.tab_title}`,
    statusBarStyle: "default",
  },
  authors: [
    {
      name: "mr_ROBOT",
    },
  ],

  creator: "mr_ROBOT",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: `${userInfo.tab_title}`,
    url: "process.env.NEXT_PUBLIC_SITE_URL",
    title: `${userInfo.tab_title}`,
    description: `${userInfo.description}`,
  },

  twitter: {
    card: "summary_large_image",
    title: `${userInfo.tab_title}`,
    description: `${userInfo.description}`,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`antialiased`}>
      <body className="min-h-screen min-w-full flex flex-col select-none bg-black">
        <InstallPWA />
        {children}
      </body>
    </html>
  );
}

// ${geistSans.variable} ${geistMono.variable}
