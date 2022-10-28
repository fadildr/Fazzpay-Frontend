import React from "react";
import Layout from "layout";
import Image from "next/image";
import axios from "utils/axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export default function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataHistory();
  }, []);

  const id = Cookies.get("userId");
  console.log(id);
  const getDataHistory = async () => {
    try {
      const result = await axios.get(
        "/transaction/history?page=1&limit=10&filter=WEEK"
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <Layout title="History">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history d-flex  pt-2  mb-3">
              <p className="my-auto">Transaction History </p>
              {/* <p>{JSON.stringify(data)}</p> */}
              <select
                class="form-select text-center"
                style={{ width: "100px" }}
                aria-label="Default select example "
              >
                <option selected>Filter</option>
                <option value="1">WEEK</option>
                <option value="2">MONTH</option>
                <option value="3">YEAR</option>
              </select>
            </div>
            {data.map((item) => (
              <div className="history-transfer d-flex mb-2" key={item}>
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
                      {item.firstName} {item.lastName}
                    </p>
                    <p className="activity-history">{item.type}</p>
                  </div>
                </div>
                <div className="nominal my-auto">
                  <p>{item.amount}</p>
                </div>
              </div>
            ))}{" "}
            {/* {data.length >= 0 ? (
              data.map((item) => {
                <div className="history-transfer d-flex mb-2" key={item}>
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
                        {item.firstName} {item.lastName}
                      </p>
                      <p className="activity-history">{item.type}</p>
                    </div>
                  </div>
                  <div className="nominal my-auto">
                    <p>{item.amount}</p>
                  </div>
                </div>;
              })
            ) : (
              <h1>Data Not Found !</h1>
            )} */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
