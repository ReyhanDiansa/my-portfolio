import Layout from "../components/Layout/Layout";
import MyProject from "../components/Pages/MyProject/MyProject";



export default function Portfolio() {
  return (
    <Layout>
      <div className="px-10 pb-10 md:px-40 md:pb-32 ">
        <MyProject/>
      </div>
    </Layout>
  );
}
