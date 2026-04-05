import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/ui/navbar";


const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-jakarta',
    display: 'swap',
})

export const metadata = {
  title: "Ece Akinci",
  description: "Data Scientist | Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
    <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="b867bc9c-6a81-401d-b52b-de4fd0e4bfab"></script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <title>{metadata.title}</title>
    </head>
      <body suppressHydrationWarning>
      <main className="mx-auto my-6 max-w-4xl bg-white text-gray-900 p-6">
          <Navbar></Navbar>
          {children}
      </main>
      </body>
    </html>
  );
}
