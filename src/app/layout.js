import { Charis_SIL, Encode_Sans_Expanded, Inter, Lato, Poppins, Prompt } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const font = Encode_Sans_Expanded({ subsets: ["latin"],weight:['100', '300', '400', '700', '900'] });

export const metadata = {
  title: "Modern church MS",
  description: "We help churches to adopt into digital world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

 

      </head>
      <body  className={font.className}>
        <Toaster position="top-right"/>
        <div className="font-aeonik">
        {children}
        </div>
        </body>




    </html>
  );
}
