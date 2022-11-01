import React, { useEffect, useState } from "react";
import Layout from "layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { getDataUserById } from "stores/action/user";
// import moment from "moment";
export default function Transfer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.transfer.form);

  const data = useSelector((state) => state.transfer.data);
  const user = useSelector((state) => state.user.data);
  const isSucces = true;
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const id = Cookies.get("userId");
  console.log(id);
  const handleHome = async () => {
    await dispatch(getDataUserById(id));
    router.push("/home");
  };
  return (
    <Layout title="Input Transfer">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            {isSucces === true ? (
              <div>
                <div style={{ marginLeft: "350px" }}>
                  <Image
                    src="/success.png"
                    width={70}
                    height={70}
                    layout=""
                    alt="background"
                  />
                </div>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "22px",

                    textAlign: "center",

                    color: "#4D4B57",
                  }}
                >
                  Transfer Succes
                </p>
              </div>
            ) : (
              <div>
                <div style={{ marginLeft: "350px" }}>
                  <Image
                    src="/failed.png"
                    width={70}
                    height={70}
                    layout=""
                    alt="background"
                  />
                </div>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "22px",

                    textAlign: "center",

                    color: "#4D4B57",
                  }}
                >
                  Transfer Failed
                </p>
              </div>
            )}

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Amount</p>
              <p className="value-confirm">Rp.{form.amount}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Balance left</p>
              <p className="value-confirm">Rp.{user.balance - form.amount}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Date & Time</p>
              <p className="value-confirm">{date}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Notes</p>
              <p className="value-confirm">{form.notes}</p>
            </div>
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Transfer To </p>
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
            <button
              type="button"
              className="btn btn-primary "
              style={{ float: "right" }}
              onClick={handleHome}
            >
              Back To Home
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
