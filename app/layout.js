import Script from "next/script";
import StoreProvider from "./context/Store";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Sci-Tech Hackathon 2023",
  description:
    "Fuel your innovation at Sci-Tech Hackathon 2023! Join teams from Nigeria's South-South region in a three-phase competition, showcasing cutting-edge solutions in Energy, Tech, and more.",
  url: "https://amihub-hackathon.netlify.app",
  generator: "Next.js",
  applicationName: "SciTech-23",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    type: "image/x-icon",
    other: {
      rel: "icon",
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  },
  keywords: [
    "scitech-23",
    "scitech-2023",
    "2023",
    "hackathon",
    "science",
    "tech",
    "technology",
    "nigeria",
    "amihub",
    "ami",
    "ncdmb",
    "local content",
    "institution",
    "win",
    "students",
    "south south",
    "10 million",
    "naira",
    "tetiary",
    "competition",
    "igniting innovation",
    "innovation",
    "igniting",
    "Africa Manufacturing Innovation Hub",
    "Manufacturing",
    "Innovation",
    "Africa",
    "empower",
    "IoT",
    "Embedded Systems",
    "Software Solutions",
    "Oil & Gas Industry",
    "Telecommunication & Digital Communication Industry",
    "Energy & Power Industry",
    "Security Industry",
    "Health & Safety Industry",
  ],
  authors: [
    { name: "AmiHub", url: "https://amihub-hackathon.netlify.app" },
    { name: "NCDMB" },
  ],
  creator: "Chuku Success",
  publisher: "AmiHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  handheldFriendly: true,
  openGraph: {
    title: "Sci-Tech Hackathon 2023",
    description:
      "Fuel your innovation at Sci-Tech Hackathon 2023! Join teams from Nigeria's South-South region in a three-phase competition, showcasing cutting-edge solutions in Energy, Tech, and more.",
    url: "https://amihub-hackathon.netlify.app",
    siteName: "SciTech-2023 Hackathon",
    images: [
      {
        url: "https://amihub-hackathon.netlify.app/og-image.jpeg",
        width: 800,
        height: 600,
      },
      {
        url: "https://amihub-hackathon.netlify.app/og-image.jpeg",
        width: 1800,
        height: 1600,
        alt: "AmiHub SciTech 2023 hackathon for south-south tetiary institutions in Nigeria",
      },
    ],
    locale: "en_US",
    type: "website",
    authors: [
      { name: "AmiHub", url: "https://amihub-hackathon.netlify.app" },
      { name: "NCDMB" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#020C11" },
    { media: "(prefers-color-scheme: dark)", color: "#020C11" },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Sci-Tech Hackathon 2023",
    description:
      "Fuel your innovation at Sci-Tech Hackathon 2023! Join teams from Nigeria's South-South region in a three-phase competition, showcasing cutting-edge solutions in Energy, Tech, and more.",
    site: "@amihubafrica",
    url: "https://twitter.com/amihubafrica/",
    creator: "@Ulquiorra_ciffa",
    images: ["https://amihub-hackathon.netlify.app/og-image.jpeg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LFM96FP77V"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-LFM96FP77V');`}
      </Script>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11362639791"
      ></Script>
      <Script strategy="afterInteractive" async id="google-ads">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11362639791');`}
      </Script>
      <body className={`${inter.className} bg-primaryColor`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
