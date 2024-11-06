/* eslint-disable react/no-unescaped-entities */
import type {Metadata} from "next";
import localFont from "next/font/local";
import {NavBar} from "../../components/navbar";
import Footer from "../../components/footer";
import {ReactLenis} from "@/utils/lenis";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ReactLenis root>
        <div
          suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ffffff] overflow-x-hidden`}
        >
          <NavBar />
          <div>{children}</div>
          <Footer />
        </div>
      </ReactLenis>
    </div>
  );
}
