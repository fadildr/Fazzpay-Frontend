import React, { useState } from "react";

import Image from "next/image";
import AuthCode from "react-auth-code-input";

export default function Login() {
  const [result, setResult] = useState("");

  const handleOnChange = () => {
    setResult();
  };
  console.log(result);
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-7 " style={{ background: "#6379F4" }}>
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
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </p>
            <p className="desc-auth text-secondary">
              Transfering money is eassier than ever, you can access FazzPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <input
              className="input-field text-secondary"
              type="text"
              placeholder="Enter Your First Name"
            />
            <input
              className="input-field"
              type="text"
              placeholder="Enter Your First Name"
            />
            <input
              className="input-field"
              type="text"
              placeholder="Enter Your First Name"
            />
            <input
              className="input-field"
              type="password"
              placeholder="Enter Your First Name"
            />
            <button type="button" className="btn w-100 btn-auth mt-4 mb-4">
              Sign in
            </button>
            <p className="footer-auth">
              Already have an account? Let’s <a href="#">Login</a>{" "}
            </p>

            <div className="bg-primary text-center">
              <AuthCode
                length={6}
                containerClassName="container-otp"
                inputClassName="otp"
                onChange={handleOnChange}
                allowedCharacters="numeric"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
