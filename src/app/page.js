import Layout from "./components/Layout/Layout";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Hero from "./components/Pages/Hero/Hero";
import TextRunner from "./components/Elements/RunningText/RunningText";
import MyProject from "./components/Pages/MyProject/MyProject";
import ContactMe from "./components/Pages/ContactMe/ContactMe";


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
        <AboutUs/>
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
