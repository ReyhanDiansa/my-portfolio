import Hero from "./components/Elements/Hero/Hero";
import RunningText from "./components/Elements/RunningText/RunningText";
import Layout from "./components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="px-40">
        <Hero />
      </div>
      <div className="my-3">
        <RunningText />
      </div>
    </Layout>
  );
}
