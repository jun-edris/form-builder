import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import DesignerContextProvider from "@/components/context/designer";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Form Builder Web App | Junaire Edris Buico",
    template: `%s - Form Builder Web App | Junaire Edris Buico`,
  },
  description:
    "A side project web app for creating custom and simple form for any type of use in terms of forms. Open for collaboration to innovate this app.",
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "react server actions",
    "prisma",
    "forms",
    "form",
    "form builder",
    "simple form builder",
  ],
  authors: [
    {
      name: "jun-edris",
      url: "https://jun-edris.github.io/portfolio",
    },
  ],
  creator: "jun-edris",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://form-builder-jun-edris.vercel.app/",
    title: "Form Builder Web App | Junaire Edris Buico",
    description:
      "A side project web app for creating custom and simple form for any type of use in terms of forms. Open for collaboration to innovate this app.",
    siteName: "Form Builder Web App | Junaire Edris Buico",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader />
          <DesignerContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
              <Analytics />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
