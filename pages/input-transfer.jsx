import React from "react";
import Layout from "layout";
import Image from "next/image";
export default function Transfer() {
  return (
    <Layout title="Input Transfer">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Transfer Money </p>
            </div>
            <div className="history-transfer d-flex mb-2 ">
              <div className="left--section__history d-flex   gap-3">
                <Image
                  src="/user-img.png"
                  width={50}
                  height={50}
                  layout=""
                  alt="background"
                  // className="me-auto"
                />
                <div className="name-activity">
                  <p className="username-history">JOHN DUE</p>
                  <p className="activity-history">012323423</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
