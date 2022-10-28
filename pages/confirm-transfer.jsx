import React from "react";
import Layout from "layout";
import Image from "next/image";
// import axios from "utils/axios";
// import { useEffect, useState } from "react";
export default function Transfer() {
  // const [data, setdata] = useState();
  // useEffect(() => {
  //   getDataById();
  // }, []);
  // const getDataById = () => {
  //   const result = axios.get(
  //     "/user/profile/8526295e-dd8e-4286-9662-5c13c1287d6c"
  //   );
  //   setdata(result.data.data);
  // };
  // console.log(data);
  return (
    <Layout title="Input Transfer">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Transfer Money </p>
            </div>
            <div
              className="history-transfer d-flex mb-2 "
              style={{
                boxShadow: "5px 0 10px #ededed, -5px 0 10px #ededed",
                borderRadius: "10px",
              }}
            >
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
                  <p className="username-history">
                    {/* {data.firstName} {data.lastName} */}
                  </p>
                  <p className="activity-history">{/* {data.noTelp} */}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary "
              style={{ float: "right" }}
            >
              Continue
            </button>

            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Launch demo modal
            </button>

            <div
              className="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
