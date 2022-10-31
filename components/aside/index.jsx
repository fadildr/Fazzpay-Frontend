import React from "react";
import Link from "next/link";
import axios from "utils/axios";
// import cookies from "next-cookies";
export default function Aside() {
  const handleLogout = async () => {
    const result = await axios.post("auth/logout");
    // cookies.clear();
    alert(result.data.msg);
  };
  return (
    <div>
      <div className="container">
        <div className="row d-flex aside">
          <ul className="list-aside">
            <li>
              <i className="bi-microsoft text-primary"></i>
              <Link href="/home">dasboard</Link>
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
