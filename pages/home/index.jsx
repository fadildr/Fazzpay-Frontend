import React from "react";
import Layout from "layout";
import { useSelector } from "react-redux";
import axios from "utils/axios";
import Cookies from "js-cookie";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [income, setIncome] = useState([]);
  const options = {
    responsive: true,
    plugins: {
      //   legend: {
      //     position: 'top' as const,
      //   },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [20, 35, 10, 5, 0, 10, 20],
        backgroundColor: "#6379F4",
      },
      {
        label: "Expense",
        data: [20, 35, 10, 5, 0, 10, 20],
        backgroundColor: "#9DA6B5",
      },
    ],
  };
  const user = useSelector((state) => state.user);
  useEffect(() => {
    getDashboard();
  }, []);
  const id = Cookies.get("userId");
  console.log(id);
  const getDashboard = async () => {
    try {
      const result = await axios.get(`dashboard/${id}`);
      console.log();
      setIncome(result.data.data.listIncome);
    } catch (error) {}
  };
  console.log(income);
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
        <div className="d-flex">
          <div className="col-6">
            <Bar options={options} data={data} />
          </div>
          <div className="col-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            incidunt corrupti unde dolores fugiat, impedit atque harum fuga ut
            consequatur veniam numquam placeat exercitationem voluptatibus odit
            suscipit eaque sit modi? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Earum velit alias odio totam hic deleniti nihil
            facere modi quasi eaque ad ratione culpa voluptatibus neque, vero
            error sunt repellat illum.
          </div>
        </div>
      </body>
    </Layout>
  );
}
