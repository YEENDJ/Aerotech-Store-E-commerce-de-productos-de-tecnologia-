import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {Inter, Orbitron, Poppins,} from "next/font/google"




export const primary = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
})

export const secondary = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ["500", "700"],
})



export const metadata: Metadata = {
  title: "AeroTech Store",
  description: "Tecnologia a un solo click",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${primary.variable} ${secondary.variable} antialiased`}>
      <NavBar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
