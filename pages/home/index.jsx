import React from "react";
import Layout from "layout";
import { useSelector } from "react-redux";
import Image from "next/image";

import axios from "utils/axios";
import Cookies from "js-cookie";
import { Bar } from "react-chartjs-2";
import { useRouter } from "next/router";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [income, setIncome] = useState([]);
  const [dataHistory, setDataHistory] = useState([]);
  const [dataDashboard, setDataDashboard] = useState({});
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "# on Income",
        fill: false,
        backgroundColor: "#1EC15F",
        borderColor: "#1EC15F",
        data:
          Object.keys(dataDashboard).length !== 0
            ? dataDashboard.listIncome.map((item) => item.total)
            : [],
        backgroundColor: "#4c64ec",
        barThickness: 12,
        borderRadius: 12,
      },
      {
        label: "# of Expense",
        fill: false,
        backgroundColor: "#FF5B37",
        borderColor: "#FF5B37",
        data:
          Object.keys(dataDashboard).length !== 0
            ? dataDashboard.listIncome.map((item) => item.total)
            : [],
        backgroundColor: "#9da6b5",
        barThickness: 12,
        borderRadius: 12,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const user = useSelector((state) => state.user);
  useEffect(() => {
    getDashboard();
    getHistory();
  }, []);
  const id = Cookies.get("userId");
  console.log(id);
  const getDashboard = async () => {
    try {
      const result = await axios.get(`dashboard/${id}`);
      setDataDashboard(result.data.data);
      setIncome(result.data.data.listIncome);
    } catch (error) {}
  };
  const getHistory = async () => {
    try {
      const result = await axios.get(
        "transaction/history?page=1&limit=5&filter=week"
      );
      setDataHistory(result.data.data);
    } catch (error) {}
  };
  console.log(user.data);
  return (
    <Layout title="Home">
      <body>
        <div className="header-home  d-flex px-2 mb-3">
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
                <button
                  type="button"
                  className="btn btn-activity mb-3 mt-3"
                  onClick={() => {
                    router.push("/transfer");
                  }}
                >
                  <i className="bi-arrow-up">Transfer</i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-activity"
                  onClick={() => {
                    router.push("/topup");
                  }}
                >
                  <i className="bi-plus-lg">Top Up</i>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-6">
            <Bar options={options} data={data} />
            {/* <Line data={data} options={options} /> */}
          </div>
          <div className="col-6">
            <p
              style={{ textAlign: "right", color: "red", cursor: "pointer" }}
              onClick={() => {
                router.push("/history");
              }}
            >
              See All
            </p>
            {dataHistory.length > 0 ? (
              dataHistory.map((item) => (
                <div className="history-transfer d-flex mb-4 " key={item}>
                  <div className="left--section__history d-flex">
                    <Image
                      src={
                        item.image
                          ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${item.image}`
                          : `https://ui-avatars.com/api/?name=${item.firstName}&background=random&size=50`
                      }
                      width={50}
                      height={50}
                      layout=""
                      alt="background"
                      className="rounded-circle"
                    />
                    <div className="name-activity">
                      <p className="username-history">
                        {item.firstName} {item.lastName}
                      </p>
                      <p
                        className="activity-history"
                        style={
                          item.type === "topup" || item.type === "accept"
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {item.type}
                      </p>
                    </div>
                  </div>
                  <div className="nominal my-auto">
                    <p
                      style={
                        item.type === "topup" || item.type === "accept"
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      Rp. {item.amount}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center">
                you don't have any history <i class="bi bi-emoji-frown"></i>{" "}
              </h1>
            )}
          </div>
        </div>
      </body>
    </Layout>
  );
}
