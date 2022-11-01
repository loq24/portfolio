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
            <h3>Whipshots</h3>
            <p>
              The website for the newly launched Starco product that is
              currently being promoted by{" "}
              <a
                href="https://twitter.com/iamcardib/status/1466044762092453891"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cardi B
              </a>
              . Built with <b>NextJS</b>, <b>TypeScript</b> and <b>SASS</b>.
              This is probably the most popular website I developed ever since.
            </p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>SASS</span>
              <span>AWS</span>
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
            <h3>ABB Proposal Builder</h3>
            <p>
              This app lets you create a proposal letter within minutes. With
              drag & drop proposal sections that are easy to modify. This works
              like google docs but focused more on proposal letter building.
              This app is now owned by American Business Bank.
            </p>
            <div className={styles.tools}>
              <span>ReactJS</span>
              <span>GrapesJS</span>
              <span>TypeScript</span>
              <span>SASS</span>
            </div>
            <a
              href="https://lougie24.tinytake.com/msc/NzUxMDg3NV8yMDQ0NTI3Nw"
              rel="noopener noreferrer"
              target="_blank"
            >
              WATCH DEMO
            </a>
          </div>

          <div className={styles.projectRow}>
            <h3>The WOO</h3>
            <p>
              Built with NextJS, TypeScript and SASS using Apollo Client in the
              frontend and implementing Incremental Static Regeneration building
              feature of NextJS. This is our company's website.
            </p>

            <p>
              The backend is built with a Headless WP using a WPGraphQL plugin.
              I'm in charge of the whole project from frontend to backend
              development. The site's assets are hosted in AWS S3 with
              CloudFront CDN.
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
            <h3>WOO Holiday Site</h3>
            <p>My company's holiday website with a little touch of parallax.</p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>SASS</span>
            </div>
            <a
              href="https://wishingtree.thewoo.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>

          <div className={styles.projectRow}>
            <h3>Next.js Sanity E-commerce Starter Kit</h3>
            <p>
              A Next.js E-commerce app with Sanity.io. This is my personal
              project that is built with the TailwindCSS framework & SASS CSS
              extension. This is an E-commerce starter kit that has a Stripe API
              payment gateway.
            </p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>TailwindCSS</span>
              <span>Sanity.io</span>
              <span>Stripe API</span>
              <span>SASS</span>
            </div>
            <a
              href="https://nextjs-sanity-ecommerce-loq24.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
          <div className={styles.projectRow}>
            <h3>React WooCommerce</h3>
            <p>
              Using the same layout with NextJS Sanity E-commerce app. This
              version doesn't have the Stripe API installed. It is also powered
              by GraphQL and Wordpress as a headless CMS in the backend.
            </p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>TailwindCSS</span>
              <span>GraphQL</span>
              <span>Headless WP</span>
            </div>
            <a
              href="https://react-woocommerce.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
          <div className={styles.projectRow}>
            <h3>React E-commerce</h3>
            <p>
              My first E-commerce website that is built with <b>NextJS</b>{" "}
              framework and <b>AntD</b> design system. The backend is a{" "}
              <b>Headless WP</b> with <b>WooCommerce</b> plugin.
            </p>
            <div className={styles.tools}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>LESS</span>
              <span>React Redux</span>
              <span>Headless WP</span>
            </div>
            <a
              href="https://react-ecommerce-alpha.vercel.app/"
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
            href="https://wp-react-ts.lougiequisel.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            VISIT WEBSITE
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
              My first website for a bank. This is a Wordpress website using
              Elementor that is converted into a static website using the Simply
              Static plugin.
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
              also one of the developers who worked on its redesign.
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
