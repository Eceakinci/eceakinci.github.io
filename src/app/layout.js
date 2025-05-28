import { Geist, Geist_Mono } from "next/font/google";
import { Fira_Sans } from 'next/font/google';
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
