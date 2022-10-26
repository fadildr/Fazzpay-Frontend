import React from "react";
import Header from "components/header";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>FazzPay App || {props.title}</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Aside /> */}
      <main>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
}
