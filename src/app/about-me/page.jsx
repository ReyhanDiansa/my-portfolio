import Layout from "../components/Layout/Layout";
import AboutMeComponent from "../components/Pages/AboutMe/AboutMe";

export const metadata = {
  metadataBase:new URL(`${process.env.NEXT_PUBLIC_BASE_URL}about-me`),
  title: "About me",
  description: "About Reyhan Marsalino Diansa",
  openGraph:{
    title: "About me | Reyhan Marsalino Diansa Portfolio",
    description: "About Reyhan Marsalino Diansa",
    type:"website",
    url:process.env.NEXT_PUBLIC_BASE_URL+'about-me',
    siteName:"Reyhan Marsalino Diansa Portfolio"
  }
};

export default function AboutMe() {
  return (
      <Layout>
        <div className="px-10 py-10 md:px-40 md:py-32 ">
          <AboutMeComponent />
        </div>
      </Layout>
  );
}
