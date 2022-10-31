import React, { useState } from "react";
import Layout from "layout";
import axios from "utils/axios";
import Cookies from "js-cookie";

export default function ChangePassword() {
  const [form, setForm] = useState();
  //   const router = useRouter();
  //   console.log(router);
  const id = Cookies.get("userId");
  console.log(id);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleUpdatePassword = async () => {
    const result = await axios.patch(`user/password/${id}`, form);
    alert(result.data.msg);
  };
  //   console.log(profile);
  return (
    <Layout title="Change Password">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Change Password </p>
            </div>
            <p className="input--transfer__desc mt-4">
              You must enter your current password and then <br /> type your new
              password twice.
            </p>

            <div className="text-center">
              <input
                type="password"
                className="form-pass"
                placeholder="Current password"
                name="oldPassword"
                onChange={handleChangeForm}
              />
              <input
                type="password"
                className="form-pass"
                placeholder="New Password"
                name="newPassword"
                onChange={handleChangeForm}
              />
              <input
                name="confirmPassword"
                type="password"
                className="form-pass"
                placeholder="Repeat new password"
                onChange={handleChangeForm}
              />
              <button
                type="button"
                className="btn w-50 mb-4 btn-change-password"
                onClick={handleUpdatePassword}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
