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
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const useNavigateSearch = (data) => {
    let query = { ...props.params, ...data, ...form };
    // console.log(...data);
    console.log(props.params);
    if (query.page === 1) {
      delete query.page;
    }
    if (query.searchName === "") {
      delete query.searchName;
    }
    query = qs.stringify(query);
    console.log(query);
    router.push(`/transfer?${query}`);
  };
  const handleCreateTransfer = (id) => {
    console.log(id);
    router.push(`/transfer/${id}`);
  };
  const handlePrevPage = () => {
    useNavigateSearch({ page: props?.params?.page - 1 });
  };
  const handleNextPage = () => {
    useNavigateSearch({ page: props?.params?.page + 1 });
  };
  const handleSearch = () => {
    useNavigateSearch({ search: props?.params?.search });
  };
  return (
    <Layout title="Transfer">
      <div>
        <div className=" main-container p-auto">
          <div className="container">
            <div className="header-history   pt-2  mb-3">
              <p className="my-auto">Search Receiver </p>
              <div class="input-group  mt-2">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text input-group-text-search"
                    id="basic-addon1"
                    onClick={handleSearch}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="bi-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control input-group-search "
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="search"
                  onChange={handleOnChange}
                />
              </div>
            </div>

            {props.listUser.length > 0 ? (
              props.listUser.map((item) => (
                <div
                  className="history-transfer d-flex mb-4"
                  key={item}
                  onClick={() => handleCreateTransfer(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="left--section__history d-flex   gap-3 ">
                    <Image
                      src={
                        item.image
                          ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${item.image}`
                          : `https://ui-avatars.com/api/?name=${item.firstName}${item.lastName}&background=random&size=50`
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
                      <p className="activity-history">{item.noTelp}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center">
                User Not Found <i class="bi bi-emoji-frown"></i>
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
  // console.log(params.search);
  params.page = params.page ? +params.page : 1;

  if (params.search) {
    params.page = 1;
  } else if (!params.search) {
    params.search = "";
  }

  const dataCookies = Cookies(context);
  const result = await axiosServer.get(
    `/user?page=${params.page}&limit=5&search=${params.search}&sort=firstName ASC`,
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
