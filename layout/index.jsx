import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Aside from "components/aside";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <div className="d-flex"> */}
      <div className="container mb-3 ">
        <div className="row">
          <div className="col-3 ">
            <Aside />
          </div>
          <div className="col-9">
            <main>{props.children}</main>
          </div>
        </div>
      </div>

      {/* </div> */}
      <Footer />
    </>
  );
}
