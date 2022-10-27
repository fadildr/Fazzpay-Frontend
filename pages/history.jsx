import React from "react";
import Layout from "layout";
import Image from "next/image";
import axios from "utils/axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export default function History() {
  const [data, setData] = useState();
  useEffect(() => {
    getDataHistory();
  }, []);
  const id = Cookies.get("userId");
  console.log(id);
  const getDataHistory = async () => {
    try {
      const result = await axios.get(
        `/transaction/history?page=1&limit=10&filter=WEEK`
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
            <div className="history-transfer d-flex mb-2">
              <div className="left--section__history d-flex  bg-primary  gap-3">
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
              <div className="nominal my-auto">
                <p>+Rp50.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
