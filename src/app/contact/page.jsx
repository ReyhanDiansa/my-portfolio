import Layout from "../components/Layout/Layout";
import ContactMe from "../components/Pages/ContactMe/ContactMe";



export default function Contact() {
  return (
    <Layout>
      <div className="px-10 pb-10 md:px-40 md:pb-32 ">
        <ContactMe/>
      </div>
    </Layout>
  );
}
