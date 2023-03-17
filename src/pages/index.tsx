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
          Hello! I'm Lougie Quisel, a seasoned web developer with a passion for
          creating engaging and intuitive websites. Over the years, I've had the
          privilege of building websites for various clients, including a{" "}
          <a
            href="https://americanbb.bank/"
            rel="noopener noreferrer"
            target="_blank"
          >
            bank
          </a>
          , a popular artist's{" "}
          <a
            href="https://whipshots.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            promotional website
          </a>
          , a website for a popular company's{" "}
          <a
            href="https://delonghitruebrew.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            new product launch
          </a>
          , and a{" "}
          <a
            href="https://thewoo.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            corporate website
          </a>
          . I take pride in my ability to collaborate closely with clients to
          deliver custom solutions that meet their unique needs.
        </p>
        <p>
          In addition to my professional work, I love to challenge myself with
          personal projects, which you can check out on my{" "}
          <a
            href="https://github.com/loq24"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github account
          </a>
          . Whether it's experimenting with cutting-edge technologies or
          building innovative applications, I'm always exploring new ways to
          enhance my skills and stay ahead of the curve.
        </p>
        <p>
          If you're looking for a skilled and collaborative web developer to
          bring your vision to life, I'd love to hear from you. Feel free to{" "}
          <a href="mailto:lougie.quisel@gmail.com">get in touch with me</a> to
          discuss your project in more detail.
        </p>
      </div>
    </>
  );
};

export default Home;
