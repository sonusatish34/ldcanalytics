import { Geist, Geist_Mono, Raleway, Roboto,Playfair_Display,Lato } from "next/font/google";
import { Lora } from "next/font/google";


import "./globals.css";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});


export const metadata = {
  title: "Fast Fashion Delivery | Affordable Outfits Delivered in Minutes",
  description: "Zuget delivers trendy mens, womens, and kids fashion in just 10 min. Shop instant outfits, daily new arrivals, affordable styles, and fast delivery across your city.",
  canonical: "www.zuget.com"
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body
        className={`${lato.variable} ${lato.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
