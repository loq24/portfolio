import Link from "next/link";
import Head from "next/head";
import Home from "components/Home/Home";

const Index = () => {
  return (
    <>
      <Head>
        <title>Lougie Quisel | ReactJS / NextJS Developer | About Me</title>
        <meta
          name="description"
          content="The best ReactJS / NextJS Developer"
        />
      </Head>
      <Home />
    </>
  );
};

export default Index;
