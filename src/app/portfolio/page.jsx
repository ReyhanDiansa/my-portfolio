import Layout from "../components/Layout/Layout";
import MyProject from "../components/Pages/MyProject/MyProject";

export const metadata = {
  metadataBase:new URL(`${process.env.NEXT_PUBLIC_BASE_URL}portfolio`),
  title: "Projects Portfolio",
  description: "Projects Portfolio by Reyhan Marsalino Diansa",
  openGraph:{
    title: "Projects Portfolio | Reyhan Marsalino Diansa Portfolio",
    description: "Projects Portfolio by Reyhan Marsalino Diansa",
    type:"website",
    url:process.env.NEXT_PUBLIC_BASE_URL+'portfolio',
    siteName:"Reyhan Marsalino Diansa Portfolio"
  }
};

export default function Portfolio() {
  return (
    <Layout>
      <div className="px-10 pb-10 md:px-40 md:pb-32 ">
        <MyProject/>
      </div>
    </Layout>
  );
}
