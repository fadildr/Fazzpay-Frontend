import React, { useState } from "react";
import Layout from "layout";
import Link from "next/link";
import axios from "utils/axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDataUserById } from "stores/action/user";
export default function Profile() {
  const dispatch = useDispatch();
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
      dispatch(getDataUserById(id));
      alert(result.data.msg);
      setImage("");
    } catch (error) {
      alert(error.response.data.msg);
      setImage("");
      // alert(error.response);
    }
  };
  const handleDeleteImage = async () => {
    try {
      const result = await axios.delete(`user/image/${id}`);
      console.log(result);
      alert(result.data.msg);
      dispatch(getDataUserById(id));
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
              {image ? (
                image && (
                  <img
                    src={image}
                    alt="view image"
                    className="preview-img rounded-circle"
                  />
                )
              ) : (
                <Image
                  src={
                    user.data.image
                      ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${user.data.image}`
                      : `https://ui-avatars.com/api/?name=${user.data.firstName}&background=random&size=50`
                  }
                  width={90}
                  height={90}
                  className="rounded-circle"
                  style={{ position: "absolute" }}
                />
              )}

              {/* <input /> */}
            </div>
            <div className="title-profile text-center">
              {image ? (
                <button
                  className="btn btn-primary"
                  onClick={handleUpdateImage}
                  // style={{ visibility: "hidden" }}
                >
                  save
                </button>
              ) : (
                <>
                  <input
                    className="input-img-profile bg-primary"
                    name="image"
                    onChange={handleChangeImage}
                    id="files"
                    style={{ visibility: "hidden" }}
                    type="file"
                  />
                  <div style={{ marginTop: "-70px" }}>
                    <label
                      for="files"
                      className="btn"
                      // style={{ marginRight: "100px" }}
                    >
                      <i className="bi-pencil" style={{ color: "blue" }}></i>
                    </label>
                    <i
                      className="bi-trash "
                      style={{ color: "red" }}
                      onClick={handleDeleteImage}
                    ></i>
                  </div>
                </>
              )}

              <p>
                {user.data.firstName} {user.data.lastName}
              </p>
              <p>{user.data.noTelp}</p>
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
              <Link href="/profile/check-pin">
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
