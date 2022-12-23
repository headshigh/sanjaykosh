import React from "react";
import { useState } from "react";
import cookie from "js-cookie";

import "./Update.module.css";
interface type1 {
  item: String;
  price: Number;
  remarks: String;
}
import Poput from "./Poput";
import axios from "axios";
import { Router } from "express";
import { useRouter } from "next/router";
function Update() {
  const [input, setInput] = React.useState<type1>();
  const [item, setitem] = React.useState<string>();
  const [total, settotal] = React.useState<number>();
  const [remarks, setremarks] = React.useState<string>();
  const [amount, setamount] = React.useState<number>();
  const [err, seterr] = useState<string>();
  const [sucess, setsucess] = useState<string>();
  const data = {
    nameofitem: item,
    totalprice: total,
    transactionby: "sarun",
    transactiontype: "withdrawl",
    jwt: cookie.get("token"),
  };
  const data2 = {
    totalprice: amount,
    transactionby: "sarun",
    transactiontype: "deposit",
    jwt: cookie.get("token"),
  };
  if (sucess) {
    setTimeout(() => {
      setsucess(undefined);
    }, 3000);
  }
  const router = useRouter();

  const handlesubmitwithdrawl = async () => {
    try {
      if (!cookie.get("token") || !cookie.get("user")) {
        router.push("/login?referer=/");
      } else {
        if (!item || !total) {
          setsucess("Fill all feilds ");
        } else {
          const response = await axios.post(
            "https://uninterested-coveralls-tick.cyclic.app/api/transactions",
            data
          );
          // const res = await fetch(
          //   "https://uninterested-coveralls-tick.cyclic.app/api/transactions",
          //   {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //       // 'Content-Type': 'application/x-www-form-urlencoded',
          //     },

          //     body: JSON.stringify(data),
          //   }
          // ).then((result) => {
          //   result.json();
          setsucess("Transaction Sucessful");
          location.reload();
          // });
          console.log(response);
        }
      }
    } catch (error) {
      console.log(error);
      setsucess("process failed!!");
    }
  };
  const handlesubmitdeposit = async () => {
    try {
      if (!cookie.get("user") || !cookie.get("token")) {
        router.push("/login?referer=/");
      } else {
        if (!amount) {
          setsucess("Please fill Amount ");
        } else {
          const response = await axios.post(
            "https://uninterested-coveralls-tick.cyclic.app/api/transactions",
            data2
          );
          //   const response = await fetch(
          //     "https://uninterested-coveralls-tick.cyclic.app/api/transactions",
          //     {
          //       method: "POST",
          //       headers: {
          //         "Content-Type": "application/json",
          //       },
          //       body: JSON.stringify(data2),
          //     }
          //   ).then((result) => {
          //     result.json();
          setsucess("sucessfull");
          location.reload();
          //   });
          console.log(response);
        }
      }
    } catch (error) {
      console.log(error);
      setsucess("process failed!!");
      // seterr(error);
    }
  };

  function handleitem(e: React.FormEvent<HTMLInputElement>) {
    setitem(e.currentTarget.value);
  }
  function handletotal(e: React.FormEvent<HTMLInputElement>) {
    settotal(Number(e.currentTarget.value));
  }
  function handleremarks(e: React.FormEvent<HTMLInputElement>) {
    setremarks(e.currentTarget.value);
  }
  console.log("item:", item, " total: ", total, remarks, "amount", amount);
  console.log("err" + err + "sucess " + sucess);
  return (
    <div
      style={{ backgroundColor: "#141B1F" }}
      className=" h-screen pt-5
    "
    >
      <Poput isEnabled={sucess ? true : false} message={sucess} />
      <div className="update__wrapper lg:px-64  ">
        <div className="input__wrapper flex mt-20 w-full px-5  sm:w-2/3 mx-auto flex-col">
          <div className="withdrawl flex flex-col ">
            <h1 className="text-center text-3xl  mb-5">Withdraw Fund</h1>
            <div
              style={{ backgroundColor: "#D9D9D9" }}
              className="px-3 py-2 lg:px-6 rounded-lg  lg:py-8  "
            >
              <div className="flex flex-col item-center w-full md:w-2/3 mx-auto">
                <div className="mb-2 w-full ">
                  <h1 style={{ color: "black" }} className="label md:text-xl">
                    {" "}
                    Name of Item
                  </h1>
                  <input
                    onChange={handleitem}
                    name="nameofitem"
                    type="text"
                    className="bg-white w-full h-8  rounded-lg "
                  />
                </div>
                <div className="mb-2 ">
                  <h1 className="label md:text-xl" style={{ color: "black" }}>
                    Total Price
                  </h1>
                  <input
                    onChange={handletotal}
                    name="totalprice"
                    type="number"
                    className="w-full rounded-lg h-8  "
                  />
                </div>
                <button
                  type="submit"
                  className="btn px-4 py-1 w-1/4 min-w-max max-w-min rounded-3xl flex items-center mt-2 justify-center "
                  style={{ backgroundColor: "#60BB46" }}
                  onClick={handlesubmitwithdrawl}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
          <div className="withdrawl mt-10 flex flex-col ">
            <h1 className="text-center text-3xl  mb-5">Deposit Fund</h1>
            <div
              style={{ backgroundColor: "#D9D9D9" }}
              className="px-3 py-2 lg:px-6 rounded-lg  lg:py-8  "
            >
              <div className="flex flex-col item-center w-full md:w-2/3 mx-auto">
                <div className="mb-2 w-full ">
                  <h1 style={{ color: "black" }} className="label md:text-xl">
                    {" "}
                    Amount
                  </h1>
                  <input
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setamount(Number(e.currentTarget.value))
                    }
                    type="text"
                    className="bg-white w-full h-8  rounded-lg "
                  />
                </div>

                <div
                  className="btn px-4 py-1 w-1/4 min-w-max max-w-min rounded-3xl flex items-center mt-2 justify-center "
                  style={{ backgroundColor: "#60BB46" }}
                  onClick={handlesubmitdeposit}
                >
                  Deposit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
