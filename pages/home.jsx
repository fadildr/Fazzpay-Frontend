import React, { useEffect, useState } from "react";

import Layout from "layout";
import axiosClient from "utils/axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const result = await axiosClient.get(
        "/user?page=1&limit=50&search=&sort=firstName ASC"
      );
      console.log(result.data);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Home">
      <div className="text-center container">
        <h1>Home Page CSR</h1>
        <p>{process.env.URL_BACKEND}</p>
        {data.map((item) => (
          <div className="card my-3" key={item.id}>
            <h1>{item.firstName}</h1>
          </div>
        ))}
      </div>
    </Layout>
  );
}
