import React, { useState } from "react";
import Layout from "layout";
import axios from "utils/axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
export default function ChangePassword() {
  const user = useSelector((state) => state.user);
  const [form, setForm] = useState({
    firstName: user.data.firstName,
    lastName: user.data.lastName,
    // email: user.data.email,
  });
  console.log(user.data);
  //   const router = useRouter();
  //   console.log(router);
  const id = Cookies.get("userId");
  console.log(id);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleUpdateProfile = async () => {
    console.log(form);
    const result = await axios.patch(`user/profile/${id}`, form);
    alert(result.data.msg);
  };
  //   console.log(profile);
  return (
    <Layout title="Change Profile">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Change Profile </p>
            </div>
            <p className="input--transfer__desc mt-4">
              You must enter your current password and then <br /> type your new
              password twice.
            </p>

            <div className="text-center">
              <input
                type="text"
                className="form-pass"
                placeholder="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChangeForm}
              />
              <input
                type="text"
                className="form-pass"
                placeholder="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChangeForm}
              />
              {/* <input
                type="text"
                className="form-pass"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChangeForm}
              /> */}
              <button
                type="button"
                className="btn w-50 mb-4 btn-change-password"
                onClick={handleUpdateProfile}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
