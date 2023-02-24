import React, { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Singletransaction from "../components/Singletransactions";
import Link from "next/link";
import Navbar from "../components/Navbar";
import arrow from "../public/arrow.png";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import cookie from "js-cookie";
import Right from "../public/right.png";
import Left from "../public/left.png";
<<<<<<< HEAD:pages/Transactions.tsx
=======

import InfiniteScroll from "react-infinite-scroll-component";

>>>>>>> 46ecb221bf3a5a124e3e126b4a667c47d0684a45:pages/transactions.tsx
interface prop {
  myprops: {
    msg: [
      {
        _id: string;
        nameofitem: string;
        transactiontype: string;
        totalprice: string;
        remarks: string;
        transactionby: string;
        createdAt: string;
        updatedAt: string;
        balanceafter: number;
        __v: number;
      }
    ];
    balance: number;
  };
}
interface dataa {
  jwt: string;
}

interface objects {
  _id: string;
  nameofitem: string;
  transactiontype: string;
  totalprice: string;
  remarks: string;
  transactionby: string;
  createdAt: string;
  transactiontime: string;
  balanceafter: number;
  updatedAt: string;
  __v: number;
}
export default function transactions(props: prop) {
  const router = useRouter();
  console.log(props);
  const [active, setActive] = React.useState<string>("All");
  const [page, setpage] = React.useState<number>(1);
  let tomap: [objects] = props.myprops.msg;
  const totalpages = props.myprops.count / 20;
  const mapped = tomap.map((element) => {
    // <Singletransaction
    //   nameofitem={element.nameofitem}
    //   transactionby={element.transactionby}
    //   _id={element._id}
    // />;

    return <Singletransaction key={element._id} {...element} />;
  });
  console.log(mapped);
  useEffect(() => {
    console.log(router);
    if (!cookie.get("token") || !cookie.get("user")) {
      router.push("/login?referer=transactions");
    }
  });
  // console.log(mapped);
  return (
    <div
      style={{ backgroundColor: "#141B1F" }}
      className="pb-6 min-h-screen   "
    >
      <Navbar data={props.myprops} />

      <div className="flex scrollbar  md:overflow-hidden gap-4 lg:px-32 mt-6 px-2 mt-3">
        <Link href="">
          <div
            style={
              active == "All"
                ? { backgroundColor: "white", color: "black" }
                : {}
            }
            onClick={() => {
              setActive("All");
              setpage(1);
            }}
            className="signle__wrapper  capsule__wrapper px-3 py-1 flex items-center text-xl lg:text-2xl rounded-md"
          >
            All
          </div>
        </Link>
        <Link href="?transactionby=bikram">
          <div
            style={
              active == "Bikram"
                ? { backgroundColor: "white", color: "black" }
                : {}
            }
            onClick={() => {
              setActive("Bikram");
              setpage(1);
            }}
            className="signle__wrapper  capsule__wrapper px-3 py-1 flex items-center text-xl lg:text-2xl rounded-md"
          >
            Bikram
          </div>
        </Link>
        <Link href="?transactionby=himal">
          <div
            style={
              active == "Himal"
                ? { backgroundColor: "white", color: "black" }
                : {}
            }
            onClick={() => {
              setActive("Himal");
              setpage(1);
            }}
            className="signle__wrapper  capsule__wrapper px-3 py-1 flex items-center text-xl lg:text-2xl rounded-md"
          >
            Himal
          </div>
        </Link>
        <Link href="?transactionby=nischal">
          <div
            style={
              active == "Nischal"
                ? { backgroundColor: "white", color: "black" }
                : {}
            }
            onClick={() => {
              setActive("Nischal");
              setpage(1);
            }}
            className="signle__wrapper  capsule__wrapper px-3 py-1 flex items-center text-xl lg:text-2xl rounded-md"
          >
            Nischal
          </div>
        </Link>
        <Link href="?transactionby=sarun">
          <div
            style={
              active == "Sarun"
                ? { backgroundColor: "white", color: "black" }
                : {}
            }
            onClick={() => {
              setActive("Sarun");
              setpage(1);
            }}
            className="signle__wrapper  capsule__wrapper px-3 py-1 flex items-center text-xl lg:text-2xl rounded-md"
          >
            Sarun
          </div>
        </Link>
        <Link href="?transactionby=suman">
          <div
            style={
              active == "Suman"
                ? { backgroundColor: "white", color: "black" }
                : {}
            }
            onClick={() => {
              setActive("Suman");
              setpage(1);
            }}
            className="signle__wrapper  capsule__wrapper px-3 py-1 flex items-center text-xl lg:text-2xl rounded-md"
          >
            Suman
          </div>
        </Link>
      </div>
      <Image
        onClick={() => router.push("/")}
        style={{ width: "52px" }}
        className="mt-3 mr-2"
        src={arrow}
        alt="arrow"
      />
      {console.log(page)}
      {
        <div className="mt-10 px-3 md:px-64">
          {mapped}
          <div className="pagination w-1/4 ml-auto flex gap-8">
            {page !== 1 && (
              <Image
                src={Left}
                width={24}
                alt="left"
                onClick={() => {
                  setpage((prev) => page - 1);
                  if (router.query.transactionby) {
                    router.push(
                      `?transactionby=${router.query.transactionby}&page=${
                        page - 1
                      }`
                    );
                  } else {
                    router.push(`?page=${page - 1}`);
                  }
                }}
              />
            )}
            {page < totalpages && (
              <Image
                src={Right}
                width={24}
                alt="right"
                onClick={() => {
                  setpage((prev) => page + 1);
                  if (router.query.transactionby) {
                    router.push(
                      `?transactionby=${router.query.transactionby}&page=${
                        page + 1
                      }`
                    );
                  } else {
                    router.push(`?page=${page + 1}`);
                  }
                }}
              />
            )}
          </div>
        </div>
      }
    </div>
  );
}
// const dataa: dataa = {
//   jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1bWFuIiwicGFzc3dvcmQiOiJzdW1hbiIsImlhdCI6MTY3MTI3MjYwOH0.wemrDmYIKLe7K_kNuXojdB1vCfyswPwTjCmWw3opQWc",
// };
export async function getServerSideProps(context) {
  console.log("this was executed on the server");

  const name = context.query.transactionby;
  console.log("name", name);
  const page = context.query.page;
  // const data = fetch("https://uninterested-coveralls-tick.cyclic.app/api/transactions", {
  //   method: "GET",
  //   body: JSON.stringify(dataa),
  //   headers: {
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  // }).then((result) => result.json());

  const data = await fetch(
    name
      ? `https://uninterested-coveralls-tick.cyclic.app/api/transactions?transactionby=${name}&page=${page}`
      : `https://uninterested-coveralls-tick.cyclic.app/api/transactions?page=${page}`
  );
  let myprops = await data.json();
  return {
    props: { myprops },
  };
}
