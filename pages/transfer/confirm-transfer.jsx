import React, { useEffect, useState } from "react";
import Layout from "layout";
import Image from "next/image";
import { useSelector } from "react-redux";
import axios from "utils/axios";
import { useRouter } from "next/router";
// import Cookies from "js-cookie";
// import moment from "moment";
export default function Transfer() {
  const router = useRouter();
  console.log(router);
  const data = useSelector((state) => state.transfer.data);
  const userId = useSelector((state) => state.transfer.id);
  const user = useSelector((state) => state.user.data);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [profile, setProfile] = useState();
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });

  useEffect(() => {
    getDataById();
  }, []);
  // console.log(userId);
  const getDataById = async () => {
    try {
      const result = await axios.get(`/user/profile/${userId}`);
      // console.log(id);
      setProfile(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setPin({ ...pin, [e.target.id]: e.target.value });
  };

  const inputFocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus();
      }
    }
  };
  // const id = Cookies.get("userId");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let allPin = "";
    for (const item in pin) {
      allPin += pin[item];
    }
    try {
      const result = await axios.patch(`/user/pin/${allPin}`);
      console.log(result);
      alert(result.data.msg);
      // router.push("/status-transfer");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(profile);
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
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="activity-history">{profile.noTelp}</p>
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "Nunito Sans",
                // fontStyle: normal,
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "25px",
                color: "#3A3D42",
              }}
            >
              Detail
            </p>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Amount</p>
              <p className="value-confirm">Rp.{data.amount}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Balance left</p>
              <p className="value-confirm">Rp.{user.balance - data.amount}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Date & Time</p>
              <p className="value-confirm">{date}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Notes</p>
              <p className="value-confirm">{data.notes}</p>
            </div>

            <button
              className="btn btn-primary "
              type="button"
              style={{ float: "right" }}
              data-bs-toggle="modal"
              data-bs-target="#transfer"
            >
              Continue
            </button>
            <div
              className="modal fade"
              id="transfer"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div>
                      <h5 className="modal-title" id="exampleModalLabel">
                        Enter PIN to Transfer
                      </h5>
                    </div>

                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="container">
                    <p className="text-muted container">
                      Enter your 6 digits PIN for confirmation to continue
                      transferring money.
                    </p>
                    <div className="modal-body">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex gap-2 justify-content-center">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item}>
                              <input
                                type="text"
                                maxLength="1"
                                autoComplete="off"
                                className="form-control text-center"
                                style={{ width: "40px" }}
                                tabIndex={item}
                                id={`pin${item}`}
                                value={pin[`pin${item}`]}
                                onChange={handleChange}
                                onKeyUp={inputFocus}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="d-grid my-4">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
