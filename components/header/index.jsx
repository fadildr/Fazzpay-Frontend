import React from "react";
import Image from "next/image";
import axios from "utils/axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
// import Link from "next/link";
export default function Header() {
  const [data, setData] = useState();
  useEffect(() => {
    getDataUser();
  }, []);
  const id = Cookies.get("userId");
  console.log(id);
  const getDataUser = async () => {
    try {
      const result = await axios.get(`/user/profile/${id}`);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  // const isLogin = true;
  return (
    <nav class="navbar mb-4">
      <div class="container-fluid">
        <div className="container d-flex">
          <a className="navbar-brand" href="/home">
            Fazzpay
          </a>
          <div
            className="header-right d-flex align-item-center "
            // style={{ marginLeft: "800px" }}
          >
            {/* (data.image) */}
            <Image
              src={
                data.image
                  ? `https://res.cloudinary.com/dxbhfz3jn/image/upload/v1663760408/${data.image}`
                  : "/user-img.png"
              }
              className="avatar"
              alt="avatar"
              // "/user-img.png"
              width={50}
              height={50}
              // layout="responsive"
              alt="background"
              // className="me-auto"
            />
            <div
              className="header-name mx-3"
              // style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              <p className="username-header">
                {data.firstName} {data.lastName}
              </p>
              <p className="telp-header">{data.noTelp}</p>
            </div>
            <i className="bi-bell mt-2"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
