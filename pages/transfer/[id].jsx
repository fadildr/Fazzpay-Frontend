import React from "react";
import Layout from "layout";
import Image from "next/image";
import axios from "utils/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { formTransfer } from "stores/action/transfer";
export default function Transfer() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  const router = useRouter();
  const [form, setForm] = useState({ amount: "", notes: "" });
  const [data, setdata] = useState();
  useEffect(() => {
    getDataById();
  }, []);
  const { id } = router.query;
  console.log(id);
  const getDataById = async () => {
    try {
      const userId = id;
      console.log(userId);
      const result = await axios.get(`/user/profile/${userId}`);
      // console.log(id);
      setdata(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleConfirmation = () => {
    dispatch(formTransfer(form, id));
    router.push(
      "/transfer/confirm-transfer"
      //  {
      //   state: {
      //     form,
      //     userId: id,
      //   },
      // }
    );
  };
  console.log(data);
  return (
    <Layout title="Input Transfer">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Transfer Money </p>
            </div>
            <div
              className="history-transfer d-flex mb-2 "
              style={{
                boxShadow: "5px 0 10px #ededed, -5px 0 10px #ededed",
                borderRadius: "10px",
              }}
            >
              <div className="left--section__history d-flex   gap-3">
                <Image
                  src="/user-img.png"
                  width={50}
                  height={50}
                  layout=""
                  alt="background"
                  // className="me-auto"
                />
                <div className="name-activity">
                  <p className="username-history">
                    {data.firstName} {data.lastName}
                  </p>
                  <p className="activity-history">{data.noTelp}</p>
                </div>
              </div>
            </div>
            <p className="input--transfer__desc mt-4">
              Type the amount you want to transfer and then <br /> press
              continue to the next steps.
            </p>
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
              <p className="transfer-balance mb-5 mt-3">
                Rp{user.data.balance} Available
              </p>
              <input
                type="text"
                placeholder="For buying some socks "
                className="w-50 mb-5"
                name="notes"
                onChange={handleChangeForm}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary "
              style={{ float: "right" }}
              onClick={handleConfirmation}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
