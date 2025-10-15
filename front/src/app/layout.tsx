import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";



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
      <body className="w-full min-h-screen">
      <NavBar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
