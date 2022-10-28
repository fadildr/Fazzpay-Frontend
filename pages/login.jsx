import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "utils/axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { getDataUserById } from "stores/action/user";
export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const [result, setResult] = useState("");

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      console.log(form);
      const result = await axios.post("/auth/login", form);
      Cookies.set("token", result.data.data.token);
      Cookies.set("userId", result.data.data.id);
      if (!result.data.data.pin) {
        alert("You don't have a pin, please add a pin");
        router.push("/create-pin");
      } else {
        await dispatch(getDataUserById(result.data.data.id));
        alert(result.data.msg);
        //   proses kondisi pengecekan pin jika ada akan diarahkan ke home jika tidak ada akan diarahkan ke create pin
        router.push("/home");
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div
          className="col-7 section--img__left"
          // style={{ background: "#6379F4" }}
        >
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
              placeholder="Enter Your Email"
              name="email"
              onChange={handleOnChange}
            />
            <input
              onChange={handleOnChange}
              className="input-field"
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />

            <button
              type="button"
              className="btn w-100 btn-auth mt-4 mb-4"
              onClick={handleLogin}
            >
              Sign in
            </button>
            <p className="footer-auth">
              Dont have an account? Let’s <a href="#">Signup</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
