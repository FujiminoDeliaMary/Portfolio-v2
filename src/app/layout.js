import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Salut !",
  description: "Jeune développeuse recherchant une alternance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`} >{children}</body>
    </html>
  );
}
