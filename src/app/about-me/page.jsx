import Layout from "../components/Layout/Layout";
import AboutUs from "../components/Pages/AboutUs/AboutUs";



export default function AboutMe() {
  return (
    <Layout>
      <div className="px-10 py-10 md:px-40 md:py-32 ">
        <AboutUs/>
      </div>
    </Layout>
  );
}
