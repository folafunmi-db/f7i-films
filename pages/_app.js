import GlobalStyles from "./../components/GlobalStyles";
import Head from "next/head";
import { Provider } from "next-auth/client";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Film App" />
        <meta
          property="og:description"
          content="A film app using MovieDB API"
        />
        <meta property="og:locale" content="en_US" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@200;300;400;500;600;700&family=Montserrat+Alternates:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider session={pageProps.session}>
        <GlobalStyles />
        <Component {...pageProps} />

        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      </Provider>
    </>
  );
};

export default App;
