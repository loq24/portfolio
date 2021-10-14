import Head from "next/head";
import styles from "styles/RecentProjects.module.scss";

const RecentProjects = () => {
  return (
    <>
      <Head>
        <title>
          Lougie Quisel | ReactJS / NextJS Developer | Recent Projects
        </title>
        <meta
          name="description"
          content="The best ReactJS / NextJS Developer"
        />
      </Head>
      <div className={styles.projectWrapper}>
        <h1>Recent Projects</h1>
        <div>
          <h2>ReactJS / NextJS</h2>
          <div className={styles.projectRow}>
            <h3>Undivided</h3>
            <p>
              Built with <b>NextJS</b>, <b>TypeScript</b> and <b>SASS</b> using{" "}
              <b>Apollo Client</b> in the frontend. It is also using the{" "}
              <b>Incremental Static Regeneration</b> building feature of NextJS.
            </p>
            <p>
              The backend is built with <b>Strapi</b> which is a NodeJS Headless
              CMS. It is also using <b>GraphQL</b> in the backend and a{" "}
              <b>PostgreSQL</b> database. I&apos;m in charge of the whole
              project from frontend to backend development.
            </p>
            <p>
              The site&apos;s backend assets are hosted in <b>AWS S3</b> with{" "}
              <b>CloudFront CDN</b>.
            </p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>SASS</span>
              <span>Apollo Client</span>
              <span>Strapi</span>
              <span>GraphQL</span>
              <span>PostgreSQL</span>
              <span>S3</span>
              <span>CloudFront</span>
            </div>
            <a
              href="https://undivided.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
          <div className={styles.projectRow}>
            <h3>Whipshots</h3>
            <p>
              A website for the upcoming product by Starco Brands that is being
              endorsed by Cardi B herself. This site is built with NextJS,
              Typescript and SASS.
            </p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>SASS</span>
            </div>
            <a
              href="https://www.whipshots.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
          <div className={styles.projectRow}>
            <h3>The WOO</h3>
            <p>
              This is our company&apos;s website that is built with{" "}
              <b>NextJS</b>, <b>TypeScript</b> and <b>SASS</b> using{" "}
              <b>Apollo Client</b> in the frontend. It is also using the{" "}
              <b>Incremental Static Regeneration</b> building feature of NextJS.
            </p>

            <p>
              The backend is built with a <b>Headless WP</b> using a{" "}
              <b>WPGraphQL</b> plugin. I&apos;m in charge of the whole project
              from frontend to backend development.
            </p>
            <p>
              The site&apos;s backend assets are hosted in <b>AWS S3</b> with{" "}
              <b>CloudFront CDN</b>.
            </p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>SASS</span>
              <span>Apollo Client</span>
              <span>GraphQL</span>
              <span>Headless WP</span>
              <span>S3</span>
              <span>CloudFront</span>
            </div>
            <a
              href="https://thewoo.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
          <div className={styles.projectRow}>
            <h3>React eCommerce</h3>
            <p>
              This is my personal open source project. A simple eCommerce
              website that is built with <b>NextJS</b> framework and <b>AntD</b>{" "}
              design system. The backend is a <b>Headless WP</b> with{" "}
              <b>WooCommerce</b> plugin.
            </p>
            <p>
              I&apos;m currently working on upgrading this project to use
              WPGraphQL and NextJS&apos;s Incremental Static Regeneration.
            </p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>LESS</span>
              <span>React Redux</span>
              <span>Headless WP</span>
            </div>
            <a
              href="https://github.com/loq24/react-ecommerce"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>

        <div className={styles.projectRow}>
          <h3>WP React Typescript</h3>
          <p>
            My other personal project that helped me learn Typescript and made
            me realize how awesome it is for your project. After this project, I
            started to use Typescript in all of my next ReactJS, React Native{" "}
            {`&`} NextJS projects.{" "}
          </p>
          <p>
            This also taught me how to implement testing. I learned how to use
            JEST and Enzyme and it also made me realize how important testing
            is.
          </p>
          <div className={styles.tools}>
            <span>React.js</span>
            <span>WP REST API</span>
            <span>React Redux</span>
            <span>Typescript</span>
            <span>Jest</span>
            <span>Enzyme</span>
          </div>
          <a
            href="https://github.com/loq24/wp-react-typescript"
            rel="noopener noreferrer"
            target="_blank"
          >
            VISIT GIT
          </a>
        </div>

        <div>
          <h2>React Native</h2>
          <div className={styles.projectRow}>
            <h3>Hungry Duma</h3>
            <p>
              This is my first ever React Native project that was published to
              the Google Play Store. I am using Headless WP for my backend. This
              project really helped me master React Native. It also taught me
              how to manage react-navigation properly as well.
            </p>
            <div className={styles.tools}>
              <span>React Native</span>
              <span>React Native Maps</span>
              <span>React Redux</span>
              <span>WP REST API</span>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.randomdumagueterestaurant"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT PLAY STORE
            </a>
          </div>
          <div className={styles.projectRow}>
            <h3>Freelancer Kiosk App</h3>
            <p>
              This is a simple app that records the Time In and Time Out of the
              company&apos;s interns. The submitted data is saved into the
              backend and can be exported easily.
            </p>
            <div className={styles.tools}>
              <span>React Native</span>
              <span>React Redux</span>
              <span>WP REST API</span>
              <span>Typescript</span>
            </div>
            <a
              href="https://screencast-o-matic.com/watch/cYnX6pwOHt"
              rel="noopener noreferrer"
              target="_blank"
            >
              WATCH IT IN ACTION
            </a>
          </div>
          <div className={styles.projectRow}>
            <h3>Shedynasty Podcast App</h3>
            <p>
              A podcast app for the{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://shedynasty.com/"
              >
                Shedynasty.com
              </a>{" "}
              website. This is one of the biggest apps that I developed. I
              learned a lot about handling huge data with the REST API and it
              also enhanced my Typescript knowledge as well.
            </p>
            <div className={styles.tools}>
              <span>React Native</span>
              <span>React Redux</span>
              <span>WP REST API</span>
              <span>Typescript</span>
            </div>
            <a
              href="https://screencast-o-matic.com/watch/cYnXIYwORV"
              rel="noopener noreferrer"
              target="_blank"
            >
              WATCH IT IN ACTION
            </a>
          </div>
        </div>

        <div>
          <h2>Wordpress</h2>
          <div className={styles.projectRow}>
            <h3>American Business Bank</h3>
            <p>
              This is a Wordpress website that is converted into a static
              website using Simply Static plugin.
            </p>
            <div className={styles.tools}>
              <span>Wordpress</span>
              <span>Simply Static</span>
              <span>Elementor</span>
            </div>
            <a
              href="https://americanbb.bank/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
          <div className={styles.projectRow}>
            <h3>WNA</h3>
            <p>
              Probably, the biggest website that I developed so far. This is a
              pure Wordpress website with a lot of customizations. I built
              plugins for several features of this website. I also created a
              report that is made with ReactJS for this website.
            </p>
            <div className={styles.tools}>
              <span>Wordpress</span>
              <span>Custom Plugins</span>
              <span>Mailchimp</span>
              <span>Admin Reporting</span>
              <span>ReactJS</span>
            </div>
            <a
              href="https://whatnowatlanta.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>
        <div>
          <h2>CodeIgniter</h2>
          <div className={styles.projectRow}>
            <h3>Onlinejobs.PH</h3>
            <p>
              Built with CodeIgniter framework. Most of the time, I&apos;m
              assigned to building Admin reports and site optimizations. I was
              also one of the developers who worked on it&apos;s redesign.
            </p>
            <div className={styles.tools}>
              <span>PHP</span>
              <span>Database Management</span>
              <span>Data Reporting</span>
            </div>
            <a
              href="https://www.onlinejobs.ph/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
