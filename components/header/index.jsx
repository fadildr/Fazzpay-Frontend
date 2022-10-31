import React from "react";
import Image from "next/image";

import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.user);
  console.log(user);
  // console.log(data);
  // const isLogin = true;
  return (
    // <div></div>
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
                user.data.image
                  ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${user.data.image}`
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
                {user.data.firstName} {user.data.lastName}
              </p>
              <p className="telp-header">{user.data.noTelp}</p>
            </div>
            <i className="bi-bell mt-2"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
