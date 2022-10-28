import React from "react";
import Layout from "layout";
import Image from "next/image";
import { useRouter } from "next/router";
// import React, { useState } from "react";
import axios from "utils/axios";
// import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export default function Transfer() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataUser();
  }, []);

  // const id = Cookies.get("userId");
  // console.log(id);
  const getDataUser = async () => {
    try {
      const result = await axios.get(
        "/user?page=1&limit=7&search=&sort=firstName ASC"
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateTransfer = (id) => {
    console.log(id);
    router.push(`/input-transfer/${id}`);
  };
  console.log(data);
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

            {data.length > 0 ? (
              data.map((item) => (
                <div className="history-transfer d-flex mb-2 " key={item}>
                  <div
                    className="left--section__history d-flex   gap-3"
                    onClick={() => handleCreateTransfer(item.id)}
                  >
                    <Image
                      src="/user-img.png"
                      width={50}
                      height={50}
                      layout=""
                      alt="background"
                      // className="me-auto"
                    />
                    <div className="name-activity">
                      <p className="username-history">{item.firstName}</p>
                      <p className="activity-history">{item.noTelp}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center">
                you don't have any history <i class="bi bi-emoji-frown"></i>{" "}
              </h1>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
