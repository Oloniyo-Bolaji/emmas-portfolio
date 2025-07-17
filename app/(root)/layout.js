import Navbar from "@/components/Navbar";
import "../globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Odewole Emmanuel's Portfolio",
  description: "My Project Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} bg-background flex flex-col sm:flex-col lg:flex-row`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
