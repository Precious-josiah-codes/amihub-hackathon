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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primaryColor`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
