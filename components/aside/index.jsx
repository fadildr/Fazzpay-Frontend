import React from "react";
import Link from "next/link";
export default function Aside() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex aside">
          <ul className="list-aside">
            <li>
              <i className="bi-microsoft text-primary"></i>
              <Link href="/">dasboard</Link>
            </li>
            <li>
              <i className="bi-arrow-up"></i>
              <Link href="/">Transfer</Link>
            </li>
            <li>
              <i className="bi-plus-lg"></i>
              <Link href="/">Top up</Link>
            </li>
            <li>
              <i className="bi-person"></i>
              <Link href="/">Profile</Link>
            </li>
            <li className="aside-logout">
              <i className="bi-box-arrow-right"></i>
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
