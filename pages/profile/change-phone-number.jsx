import React, { useState } from "react";
import Layout from "layout";
import axios from "utils/axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getDataUserById } from "stores/action/user";
export default function ChangePassword() {
  const dispatch = useDispatch();
  const [form, setForm] = useState();

  const id = Cookies.get("userId");
  console.log(id);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleUpdatePhone = async () => {
    const result = await axios.patch(`user/profile/${id}`, form);
    dispatch(getDataUserById(id));
    alert(result.data.msg);
  };
  //   console.log(profile);
  return (
    <Layout title="Change Phone Number">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Change Phone Number </p>
            </div>
            <p className="input--transfer__desc mt-4">
              You must enter your current password and then <br /> type your new
              password twice.
            </p>

            <div className="text-center">
              <input
                type="number"
                className="form-pass"
                placeholder="08xxx"
                name="noTelp"
                onChange={handleChangeForm}
              />

              <button
                type="button"
                className="btn w-50 mb-4 btn-change-password"
                onClick={handleUpdatePhone}
              >
                Change Phone Number
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
