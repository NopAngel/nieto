import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angel Nieto | Developer Front-End",
  description: "Developer Front-End and Golang Developer - Angel Nieto",
  icons: {
    icon: "@/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        <div className="flex justify-center">
          <img src="/dog.png" className="rdx-4dog" alt="Dog - Avatar" />
        </div>
        <section className="xl:w-[500px] w-full mx-auto text-center mr-ani">
          {children}
        </section>

        <footer className="mb-3 opacity-20 w-[400px] flex justify-center text-center mx-auto">
          <span>@{year} Angel Nieto. All Rights Reserved.</span>
        </footer>
      </body>
    </html>
  );
}
