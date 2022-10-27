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

            <div className=" text-center">
              <AuthCode
                length={6}
                containerClassName="container-otp"
                inputClassName="otp"
                onChange={handleOnChange}
                allowedCharacters="numeric"
              />
            </div>
            <button type="button" className="btn w-100 btn-auth mt-4 mb-4">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
