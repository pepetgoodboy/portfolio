import Head from "next/head";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <title>My Portfolio</title>
      </Head>
      <div className="hidden sm:block">
        <AnimatedCursor
          color="128, 0, 128"
          innerSize={12}
          outerSize={24}
          zIndex={50}
        />
      </div>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
