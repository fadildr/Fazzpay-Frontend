import React from "react";
import Layout from "layout";
import Image from "next/image";
export default function Transfer() {
  return (
    <Layout title="Transfer">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Search Receiver </p>
              <div class="input-group  mt-2">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text input-group-text-search"
                    id="basic-addon1"
                  >
                    <i className="bi-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control input-group-search "
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
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
                  <p className="activity-history">transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
