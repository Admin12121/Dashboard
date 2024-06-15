import "@/styles/globals.css";
import type { Metadata } from 'next';
import { Providers } from "./providers";
import { fontSans } from '@/config/fonts';
import clsx from "clsx";

export const metadata: Metadata = {
  title: 'E-commerce Dashboard Template',
  description: 'A comprehensive and modern e-commerce dashboard template with advanced features and an intuitive user interface.',
  keywords: 'e-commerce, dashboard, template, admin panel, responsive, modern design',
  authors: [{ name: 'Vicky Tajpuriya'}],
  robots: 'index, follow',
  openGraph: {
    title: 'E-commerce Dashboard Template',
    description: 'A comprehensive and modern e-commerce dashboard template with advanced features and an intuitive user interface.',
    type: 'website',
    siteName: "Ecommerse-Dashboard",
    url: "https://dashboard.biki.com.np",
    images: [
      {
        url: 'https://dashboard.biki.com.np/og.jpeg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://dashboard.biki.com.np/og.jpeg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Dashboard Template',
    description: 'A comprehensive and modern e-commerce dashboard template with advanced features and an intuitive user interface.',
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx("font-sans antialiased", fontSans.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
