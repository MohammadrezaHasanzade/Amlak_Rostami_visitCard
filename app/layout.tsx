import type { Metadata } from "next";
import { userInfo } from "@/config/conf";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  keywords: "",
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
    siteName: "process.env.NEXT_PUBLIC_APP_NAME",
    url: "process.env.NEXT_PUBLIC_SITE_URL",
    title: "process.env.NEXT_PUBLIC_APP_NAME",
    description: `${userInfo.description}`,
  },

  twitter: {
    card: "summary_large_image",
    title: "process.env.NEXT_PUBLIC_APP_NAME,",
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
    <html
      lang="fa"
      dir="rtl"
      className={`w-full h-screen antialiased`}
    >
      <body className="h-screen w-full flex flex-col select-none">{children}</body>
    </html>
  );
}

// ${geistSans.variable} ${geistMono.variable}