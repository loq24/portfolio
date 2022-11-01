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
          Hi, I&apos;m Lougie Quisel and I love building websites. With years of
          experience, I have built websites for a{" "}
          <a
            href="https://americanbb.bank/"
            rel="noopener noreferrer"
            target="_blank"
          >
            bank
          </a>
          , a website for a product that is being promoted by a{" "}
          <a
            href="https://whipshots.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            popular artist
          </a>
          ,{" "}
          <a
            href="https://thewoo.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            to a company website
          </a>
          . I also love to challenge myself with my personal projects that you
          can check on my{" "}
          <a
            href="https://github.com/loq24"
            rel="noopener noreferrer"
            target="_blank"
          >
            github account
          </a>
          .
        </p>
        <p>
          I have so many{" "}
          <Link href="/hire-me">
            <a>skills</a>
          </Link>{" "}
          that I can offer if you want to work with me.{" "}
          <a href="mailto:lougie.quisel@gmail.com">Contact me</a> if you are
          interested.
        </p>
      </div>
    </>
  );
};

export default Home;
