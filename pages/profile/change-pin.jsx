import React, { useState } from "react";
import Layout from "layout";
import axios from "utils/axios";
import Cookies from "js-cookie";

export default function ChangePin() {
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });
  //   const router = useRouter();
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
      //   router.push("/login");
      if (response.data === null) {
        console.log("object");
      }
    } catch (err) {
      console.log(err);
      // console.log(AxiosError.response);
      alert(err.response.data.msg);
    }
  };
  //   console.log(profile);
  return (
    <Layout title="Change Pin">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Change Pin </p>
            </div>
            <p className="input--transfer__desc mt-4">
              Enter your current 6 digits Fazzpay PIN <br /> below to continue
              to the next steps.
            </p>

            <div className="text-center">
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
                <div className=" text-center">
                  <button
                    type="submit"
                    className="btn w-50 mb-4 btn-change-password "
                  >
                    Change Pin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
