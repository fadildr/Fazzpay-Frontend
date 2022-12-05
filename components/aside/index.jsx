import React from "react";
import Link from "next/link";
import axios from "utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getDataUserById } from "stores/action/user";

// import { useRouter } from "react-router";
export default function Aside() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const result = await axios.post("auth/logout");
    Cookies.remove("userId");
    Cookies.remove("token");
    localStorage.clear();
    alert(result.data.msg);
    router.push("/login");
  };
  const id = Cookies.get("userId");
  console.log(id);
  const handleHome = async () => {
    await dispatch(getDataUserById(id));
    router.push("/home");
  };
  return (
    <div>
      <div className="container">
        <div className="row d-flex aside">
          <ul className="list-aside">
            <li>
              <i className="bi-microsoft text-primary"></i>
              <Link href="/home" onClick={handleHome}>
                dashboard
              </Link>
            </li>
            <li>
              <i className="bi-arrow-up"></i>
              <Link href="/transfer">Transfer</Link>
            </li>
            <li>
              <i className="bi-plus-lg"></i>
              <Link href="/topup">Top up</Link>
            </li>
            <li>
              <i className="bi-person"></i>
              <Link href="/profile">Profile</Link>
            </li>
            <li className="aside-logout d-flex">
              <i className="bi-box-arrow-right"></i>
              <button type="button" className="btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
