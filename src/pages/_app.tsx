import type { AppProps } from "next/app";
import PageLayout from "components/PageLayout/PageLayout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../styles/main.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
export default MyApp;
