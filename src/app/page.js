import Layout from "./components/Layout/Layout";
import AboutMe from "./components/Pages/AboutMe/AboutMe";
import Hero from "./components/Pages/Hero/Hero";
import TextRunner from "./components/Elements/RunningText/RunningText";
import MyProject from "./components/Pages/MyProject/MyProject";
import ContactMe from "./components/Pages/ContactMe/ContactMe";

export const metadata = {
  metadataBase:new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Home | Reyhan Marsalino Diansa Portfolio",
  description: "Portfolio website by Reyhan Marsalino ",
  openGraph:{
    title: "Home | Reyhan Marsalino Diansa Portfolio",
    description: "Portfolio website by Reyhan Marsalino ",
    type:"website",
    url:process.env.NEXT_PUBLIC_BASE_URL,
    siteName:"Reyhan Marsalino Diansa Portfolio"
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL
  }
};


export default function Home() {
  return (
    <Layout>
      <div className="px-5 md:px-40 ">
        <Hero />
      </div>
      <div className="mt-10 md:my-3">
        <TextRunner />
      </div>
      <div className="px-10 py-10 md:px-40 md:py-32 ">
        <AboutMe/>
      </div>
      <div className="px-10 py-10 md:px-40 md:py-20">
        <MyProject/>
      </div>
      <div className="px-10 py-10 md:px-40 md:py-20">
        <ContactMe />
      </div>
    </Layout>
  );
}
