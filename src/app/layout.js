import { Roboto_Serif } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const robotoSerif = Roboto_Serif({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-roboto-serif',
    display: 'swap',
});

export const metadata = {
  title: "Ece Akinci",
  description: "Data Scientist | Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoSerif.variable} suppressHydrationWarning>
    <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <title>{metadata.title}</title>
    </head>
      <body suppressHydrationWarning>
      <main className="min-h-screen bg-white text-gray-900 p-6">
          <Navbar></Navbar>
          {children}
      </main>
      </body>
    </html>
  );
}
