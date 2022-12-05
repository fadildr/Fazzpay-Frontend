import React, { useEffect, useState } from "react";
import Layout from "layout";
import Image from "next/image";
import { useSelector } from "react-redux";
import axios from "utils/axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getDataUserById } from "stores/action/user";
export default function Transfer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const data = useSelector((state) => state.transfer.data);
  const form = useSelector((state) => state.transfer.form);
  const receiverId = useSelector((state) => state.transfer.id);

  const user = useSelector((state) => state.user.data);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });

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
  const newForm = {
    ...form,
    receiverId,
  };
  const id = Cookies.get("userId");
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let allPin = "";
    for (const item in pin) {
      allPin += pin[item];
    }

    try {
      const result = await axios.get(`/user/pin/${allPin}`);
      console.log(result);
      // alert(result.data.msg);
      if (result.status === 200) {
        const newResult = await axios.post("/transaction/transfer", newForm);
        console.log(newResult);
        alert(newResult.data.msg);
        router.push("/transfer/status-transfer");
      }
      await dispatch(getDataUserById(id));
      setShow(false);
      // router.push("/status-transfer");
    } catch (error) {
      alert(error.response?.data.msg);
      // setShow(false);
      // router.push(`/transfer/${receiverId}`);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                  src={
                    data?.image
                      ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${data?.image}`
                      : `https://ui-avatars.com/api/?name=${data?.firstName}&background=random&size=50`
                  }
                  width={50}
                  height={50}
                  layout=""
                  alt="background"
                  style={{ borderRadius: "20px" }}
                  // className="me-auto"
                />
                <div className="name-activity">
                  <p className="username-history">
                    {data?.firstName} {data?.lastName}
                  </p>
                  <p className="activity-history">{data?.noTelp}</p>
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

            {/* <button
              className="btn btn-primary "
              type="button"
              style={{ float: "right" }}
              // data-bs-toggle="modal"
              // data-bs-target="#transfer"
              onClick={handleShow}
            >
              Continue
            </button> */}
            <Button
              variant="primary"
              style={{ float: "right" }}
              onClick={handleShow}
              className="btn btn-primary "
            >
              Continue
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Enter PIN to Transfer</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
              </Modal.Body>
            </Modal>
            {/* <div
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
