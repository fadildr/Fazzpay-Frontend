import React, { useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import axios from "utils/axios";
// import AuthCode from "react-auth-code-input";
import { useRouter } from "next/router";
export default function Login() {
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });
  const router = useRouter();
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
  const id = Cookies.get("userId");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let allPin = "";
    for (const item in pin) {
      allPin += pin[item];
    }
    const newPin = {
      pin: allPin,
    };

    try {
      const result = await axios.patch(`/user/pin/${id}`, newPin);

      alert(result.data.msg);
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-7 section--img__left">
          <div className=" m-auto" style={{ width: "500px" }}>
            <p className="title-auth " style={{ marginBottom: "-40px" }}>
              FazzPay{" "}
            </p>
            <Image
              src="/bg-auth.png"
              width={400}
              height={500}
              // layout="responsive"
              alt="background"
              style={{ marginBottom: "-30px" }}
            />
            <p className="title-auth">App that Covering Banking Needs. </p>
            <p className="desc-auth ">
              FazzPay is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in FazzPay everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
        <div className="col-5 ">
          <div className="form  my-5 mx-5 ">
            <p className="title-auth-right">
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </p>
            <p className="desc-auth text-secondary">
              Create 6 digits pin to secure all your money and your data in
              FazzPay app. Keep it secret and don’t tell anyone about your
              FazzPay account password and the PIN.
            </p>

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
      </div>
    </div>
  );
}
