import React, { useState } from "react";
import Layout from "layout";
import Link from "next/link";
import axios from "utils/axios";
import Cookies from "js-cookie";
// import Image from "next/image";
import { useSelector } from "react-redux";
export default function Profile() {
  const user = useSelector((state) => state.user);
  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  // console.log(user);
  const handleChangeImage = (e) => {
    const { name, files } = e.target;

    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }

    // console.log(e.target.files);
  };
  const id = Cookies.get("userId");
  const handleUpdateImage = async () => {
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    try {
      console.log(form);
      console.log(id);
      const result = await axios.patch(`user/image/${id}`, formData);
      alert(result.data.msg);
    } catch (error) {}
  };
  return (
    <Layout title="Profile">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history d-flex  pt-2  mb-3">
              <p className="my-auto">Profile</p>
            </div>{" "}
            <div style={{ marginLeft: "350px" }}>
              {/* <Image
                src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${user.data.image}`}
                width={90}
                height={90}
                // className="me-auto"
                style={{ position: "absolute" }}
              /> */}
              {image && (
                <img
                  src={image}
                  alt="view image"
                  className="preview-img rounded-circle"
                />
              )}
            </div>
            <div className="title-profile text-center">
              <p>
                {user.data.firstName} {user.data.lastName}
              </p>
              <p>{user.data.noTelp}</p>
              <input
                type="file"
                className="input-img-profile"
                name="image"
                onChange={handleChangeImage}
              />
              <button className="btn" onClick={handleUpdateImage}>
                save
              </button>
            </div>
            <div className="text-center ">
              {/* <div className="w-100"> */}
              <Link href="/profile/personal-information">
                <button className=" btn btn-profile  d-flex mb-2">
                  <p> Personal Information</p>
                  <i className="bi-arrow-right"></i>
                </button>
              </Link>
              <Link href="/profile/change-password">
                <button className=" btn btn-profile  d-flex mb-2 ">
                  <p> Change Password</p>
                  <i className="bi-arrow-right"></i>
                </button>
              </Link>
              <Link href="/profile/change-pin">
                <button className=" btn btn-profile  d-flex mb-2 ">
                  <p> Change Pin</p>
                  <i className="bi-arrow-right"></i>
                </button>
              </Link>
              <Link href="/profile/change-phone-number">
                <button className=" btn btn-profile  d-flex mb-2 ">
                  <p> Change Phone Number</p>
                  <i className="bi-arrow-right"></i>
                </button>
              </Link>
              <Link href="/profile/change-profile" className="mb-2">
                <button className=" btn btn-profile  d-flex mb- ">
                  <p> Change Profile</p>
                  {/* <i className="bi-arrow-right"></i> */}
                </button>
              </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
