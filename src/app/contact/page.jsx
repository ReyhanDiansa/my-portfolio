import Layout from "../components/Layout/Layout";
import ContactMe from "../components/Pages/ContactMe/ContactMe";

export const metadata = {
  metadataBase:new URL(`${process.env.NEXT_PUBLIC_BASE_URL}contact`),
  title: "Contact",
  description: "Contact Reyhan Marsalino Diansa by sending an email",
  openGraph:{
    title: "Contact | Reyhan Marsalino Diansa Portfolio",
    description: "Contact Reyhan Marsalino Diansa by sending an email",
    type:"website",
    url:process.env.NEXT_PUBLIC_BASE_URL+'contact',
    siteName:"Reyhan Marsalino Diansa Portfolio"
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL+'contact'
  }
};

export default function Contact() {
  return (
    <Layout>
      <div className="px-10 pb-10 md:px-40 md:pb-32 ">
        <ContactMe/>
      </div>
    </Layout>
  );
}
