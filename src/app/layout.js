import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase:new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Reyhan Marsalino Diansa Portfolio",
    template:"%s | Reyhan Marsalino Diansa Portfolio"
  },
  description: "Portfolio website by Reyhan Marsalino Diansa use Nextjs and Api from Nodejs",
  favicon:"/favicon.ico",
  keywords: ['Next.js', 'React', 'JavaScript', 'Portfolio', 'Nodejs', 'Nextjs'],
  creator: 'Reyhan Marsalino Diansa',
  publisher: 'Reyhan Marsalino Diansa',
  openGraph:{
    title: "Reyhan Marsalino Diansa Portfolio",
    description: "Portfolio website by Reyhan Marsalino Diansa use Nextjs and Api from Nodejs",
    type:"website",
    url:process.env.NEXT_PUBLIC_BASE_URL,
    siteName:"Reyhan Marsalino Diansa Portfolio"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
