import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Head from "next/head";
const inter = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Alfares",
  description: "Alfares is a real estate platform designed to simplify property management and enhance user experience. With features for adding properties, managing blogs, and user administration, Alfares provides an intuitive interface for both property owners and potential buyers. Built using modern web technologies, Alfares ensures responsive design and seamless functionality across all devices."
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="ar" dir="rtl" suppressHydrationWarning>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
        </Head>
      <body className={inter.className}>
        <Navbar/>
        <div className="mt-24 font-sans">
        {children}
        </div>
        <div className=" font-sans">
        <Footer /></div>
        </body>
    </html>
    </ClerkProvider>
  );
}
