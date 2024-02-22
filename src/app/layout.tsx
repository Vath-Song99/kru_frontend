
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";



const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Learn with kru",
  description: "The kru platform provide you the real connection",
  icons:"/Logos/KruLogo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-full flex justify-center bg-white shadow-sm"> <Navbar/></div>
        {children}
         <div className="w-full flex justify-center items-end bg-gray-900 pt-10"><Footer/></div>
        </body>
    </html>
  );
}
