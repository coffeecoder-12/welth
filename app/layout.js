import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";

const inter = Inter({subset: ["latin"]});

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made in Collaboration</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
