import React from "react";
import Layout from "layout";
import { useSelector } from "react-redux";
export default function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Layout title="Home">
      <body>
        <div className="header-home  d-flex px-2">
          <div className="nominal my-auto mt-2" style={{ marginLeft: "10px" }}>
            <p className="balance">Balance</p>
            <p className="jumlah">Rp. {user.data.balance}</p>
            <p className="balance" style={{ fontSize: "16px" }}>
              {user.data.noTelp}
            </p>
          </div>
          <div className="activity   ">
            <ul>
              <li>
                <button type="button" className="btn btn-activity mb-3 mt-3">
                  <i className="bi-arrow-up">Transfer</i>
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-activity">
                  <i className="bi-plus-lg">Top Up</i>
                </button>
              </li>
            </ul>
          </div>
        </div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, quam! Molestias nostrum reiciendis iste ut? Dolor
        laudantium sit delectus in at, ipsum impedit repellat. Et atque officia
        a illo rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
        alias aperiam similique ipsam exercitationem assumenda esse itaque? Quas
        voluptatem quibusdam ducimus dicta, aliquid minima doloribus animi nobis
        omnis voluptate fugit!
      </body>
    </Layout>
  );
}
