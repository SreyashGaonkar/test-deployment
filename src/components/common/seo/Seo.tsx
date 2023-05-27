import React, { ReactNode } from "react";
import Head from "next/head";

interface Props {
    title?: string;
    meta_title?: string;
    description?: string;
    meta_image_url?: string;
    app_url?: string;
    children? : ReactNode;
}

const Seo = ({
    title = "Turf Town",
    meta_title = "", 
    description = "",
    meta_image_url = "",
    app_url = "",
    children
}: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
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
      <meta charSet="UTF-8" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="white" />
      <meta name="title" content={meta_title} key="title" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1"
      />
      <meta name="description" content={description} />
      <meta property="og:title" content={meta_title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemProp="image" content={meta_image_url} />
      <meta property="og:image:secure_url" content={meta_image_url} />
      <meta property="og:image" content={meta_image_url} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="800" />
      <meta property="og:url" content="demo.turftown.in" />
      <meta property="al:ios:app_store_id" content="427510738871044" />
      <meta property="al:ios:url" content={app_url} />
      <meta property="al:ios:app_name" content="turftown" />
      <meta property="al:android:package" content="com.turftown" />
      <meta property="al:android:url" content={app_url} />
      <meta property="al:android:app_name" content="turftown" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="demo.turftown.in" />
      <meta property="twitter:title" content={meta_title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={meta_image_url} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content="demo.turftown.in" />
      <meta property="og:site_name" content="Turf Town" />
      <meta name="twitter:image:alt" content="game" />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="800" />
      <meta property="og:locale" content="en_US" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '769522967852533');
            fbq('track', 'PageView');
        `,
        }}
      ></script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=769522967852533&ev=PageView&noscript=1"
        />
      </noscript>
      {children}
    </Head>
  );
};

export default Seo;
