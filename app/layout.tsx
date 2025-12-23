import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MealsContextProvider } from "./contexts/MealsContext";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const interFont = Inter({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Egyptian Food Menu",
  description:
    "A simple and modern food menu app that displays a collection of traditional Egyptian dishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} antialiased`}>
        <MealsContextProvider>
          <ToastContainer />
          <div className="flex flex-col min-h-screen">
            {/* navbar */}
            <Navbar />
            {children}
            {/* footer */}
            <Footer />
          </div>
        </MealsContextProvider>
      </body>
    </html>
  );
}
