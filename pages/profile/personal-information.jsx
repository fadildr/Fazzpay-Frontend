import React from "react";
import Layout from "layout";
import Image from "next/image";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";

export default function PersonalInformation() {
  const router = useRouter();
  console.log(router);

  const user = useSelector((state) => state.user.data);
  //   console.log(user.email);
  // const id = Cookies.get("userId");

  //   console.log(profile);
  return (
    <Layout title="Personal Information">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Personal Information </p>
            </div>
            <p className="input--transfer__desc mt-4">
              We got your personal information from the sign <br /> up proccess.
              If you want to make changes on <br /> your information, contact
              our support.
            </p>
            <div className="confirm-transfer">
              <p className="title-confirm mb-2">First Name</p>
              <p className="value-confirm">{user.firstName}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Last Name</p>
              <p className="value-confirm">{user.lastName}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Email</p>
              <p className="value-confirm">{user.email}</p>
            </div>

            <div className="confirm-transfer">
              <p className="title-confirm mb-2">Phone Number</p>
              <p className="value-confirm">{user.noTelp}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
