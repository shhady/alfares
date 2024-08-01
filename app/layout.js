import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Alfares",
  description: "Alfares is a real estate platform designed to simplify property management and enhance user experience. With features for adding properties, managing blogs, and user administration, Alfares provides an intuitive interface for both property owners and potential buyers. Built using modern web technologies, Alfares ensures responsive design and seamless functionality across all devices."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar/>
        <div className="mt-24 font-sans">
        {children}
        </div>
        <div className=" font-sans">
        <Footer /></div>
        </body>
    </html>
  );
}
