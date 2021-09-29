import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Lougie Quisel | ReactJS / NextJS Developer | About Me</title>
        <meta
          name="description"
          content="The best ReactJS / NextJS Developer"
        />
      </Head>
      <div>
        <h1>About Me</h1>
        <p>
          I&apos;m Lougie Quisel, a ReactJS, NextJS {`&`} React Native
          developer. I&apos;m currently working at{" "}
          <a
            href="https://thewoo.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            TheWoo
          </a>{" "}
          as a Senior Web Developer. I also work at{" "}
          <a
            href="https://www.onlinejobs.ph/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Onlinejobs.ph
          </a>{" "}
          maintaining the website with CodeIgniter framework.
        </p>
        <p>
          I have several small personal projects that you can check on my{" "}
          <a
            rel="noopener noreferrer"
            href="https://github.com/loq24"
            target="_blank"
          >
            Github
          </a>{" "}
          account. You can also check my React Native{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.randomdumagueterestaurant"
          >
            app
          </a>{" "}
          too! If you want some help with your project, don't hesitate to{" "}
          <Link href="/hire-me">
            <a>contact me!</a>
          </Link>
        </p>
        <p>When I&apos;m not working, I enjoy playing Badminton and DOTA 2!</p>
      </div>
    </>
  );
};

export default Home;
