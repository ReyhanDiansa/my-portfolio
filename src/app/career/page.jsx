import Layout from "../components/Layout/Layout";
import CareerComponent from "../components/Pages/Career/Career";

export const metadata = {
  metadataBase:new URL(`${process.env.NEXT_PUBLIC_BASE_URL}career`),
  title: "Careers",
  description: "Reyhan Marsalino Diansa Career's",
  openGraph:{
    title: "Careers | Reyhan Marsalino Diansa Portfolio",
    description: "Reyhan Marsalino Diansa Career's",
    type:"website",
    url:process.env.NEXT_PUBLIC_BASE_URL+'career',
    siteName:"Reyhan Marsalino Diansa Portfolio"
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL+'career'
  }
};

export default function Career() {
  return (
    <Layout>
      <div className="px-10 pb-10 md:px-40 md:pb-32 ">
        <CareerComponent />
      </div>
    </Layout>
  );
}
