import React, { useState } from "react";
import Layout from "layout";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { topup } from "stores/action/topup";
// import { getDataUserById } from "stores/action/user";
export default function Topup() {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.topup);
  console.log(data);
  const [form, setForm] = useState({ amount: "" });
  const id = Cookies.get("userId");
  console.log(id);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleTopup = async () => {
    try {
      await dispatch(topup(form));
      alert(data.message);
      // dispatch(getDataUserById(id));
      router.push(data.data.redirectUrl);
    } catch (error) {}
  };
  //   console.log(data);
  return (
    <Layout title="Topup">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history d-flex  pt-2  mb-3">
              <p className="my-auto">Top Up</p>
              {/* <p>{JSON.stringify(data)}</p> */}
            </div>{" "}
            <div className="text-center">
              <input
                type="number"
                className="text-center w-50 mb-5"
                min="0.01"
                step="0.01"
                max="2500"
                name="amount"
                // value="00.00"
                onChange={handleChangeForm}
                style={{
                  height: "100px",
                  fontSize: "40px",
                  color: " #6379F4;",
                }}
              />
            </div>
            <button
              type="button"
              onClick={handleTopup}
              className="btn btn-topup "
              style={{ marginLeft: "700px" }}
            >
              topup
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
