import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const font = Lato({ subsets: ["latin"],weight:['100', '300', '400', '700', '900'] });

export const metadata = {
  title: "Modern church MS",
  description: "We help churches to adopt into digital world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={font}>
        <Toaster position="top-right"/>
        {children}</body>
    </html>
  );
}
