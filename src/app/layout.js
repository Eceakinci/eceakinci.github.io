import { Fira_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const fira = Fira_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-fira',
    display: 'swap',
});

export const metadata = {
  title: "Ece Akinci",
  description: "Data Scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fira.variable}>
      <body>
      <main className="min-h-screen bg-white text-gray-900 p-6 mt-16">
          <Navbar></Navbar>
          {children}
      </main>
      </body>
    </html>
  );
}
