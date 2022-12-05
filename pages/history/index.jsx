import React, { useState } from "react";
import Layout from "layout";
import { useRouter } from "next/router";
import axiosServer from "utils/axiosServer";
import Image from "next/image";
import Cookies from "next-cookies"; // digunakan untuk kebutuhan mengambil data untuk server side
import qs from "query-string";
export default function Transfer(props) {
  const router = useRouter();
  const [form, setForm] = useState("");

  const useNavigateSearch = (data) => {
    let query = { ...props.params, ...data, ...form };

    if (query.page === 1) {
      delete query.page;
    }

    query = qs.stringify(query);
    console.log(query);
    router.push(`/history?${query}`);
  };
  const handleOnChange = (e) => {
    setForm(e.target.value);
    useNavigateSearch({ filter: form });
  };
  const handlePrevPage = () => {
    useNavigateSearch({ page: props?.params?.page - 1 });
  };
  const handleNextPage = () => {
    useNavigateSearch({ page: props?.params?.page + 1 });
  };
  const handleCreateTransfer = (id) => {
    console.log(id);
    router.push(`/transfer/${id}`);
  };
  // const handleFilter = () => {
  //   useNavigateSearch({ filter: props?.params?.filter });
  //   alert("as");
  // };
  return (
    <Layout title="History">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3 d-flex">
              <p className="my-auto">History </p>
              <select
                class="form-select text-center"
                style={{ width: "100px" }}
                onChange={handleOnChange}
              >
                <option selected>Filter</option>
                <option value="week">WEEK</option>
                <option value="month">MONTH</option>
                <option value="year">YEAR</option>
              </select>
            </div>

            {props.listUser.length > 0 ? (
              props.listUser.map((item) => (
                <div className="history-transfer d-flex mb-4" key={item}>
                  <div className="left--section__history d-flex   gap-3">
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
          <div className="d-flex gap-2 justify-content-center w-100 my-5">
            <button
              className="btn btn-primary"
              onClick={handlePrevPage}
              disabled={props?.params?.page === 1 ? true : false}
            >
              &lt;
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNextPage}
              disabled={
                props.listUser.length <= 5 && props.listUser.length === 0
                  ? true
                  : false
              }
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let params = context.query;
  console.log(params);
  // console.log(params.search);
  params.page = params.page ? +params.page : 1;
  if (!params.filter) {
    params.filter = "week";
  }
  // if (params.search) {
  //   params.page = 1;
  // } else if (!params.search) {
  //   params.search = "";
  // }

  const dataCookies = Cookies(context);
  const result = await axiosServer.get(
    // `/user?page=${params.page}&limit=5&search=${params.search}&sort=firstName ASC`,
    `transaction/history?page=${params.page}&limit=5&filter=${params.filter}`,
    {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    }
  );

  return {
    props: {
      listUser: result.data.status === 200 ? result.data.data : [],
      pagination: result.data.status === 200 ? result.data.pagination : {},
      params: params,
    }, // will be passed to the page component as props
  };
}
