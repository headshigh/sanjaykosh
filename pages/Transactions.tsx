import React from "react";
import axios, { AxiosResponse } from "axios";
import Singletransaction from "../components/Singletransactions";
import Navbar from "../components/Navbar";
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
        __v: number;
      }
    ];
  };
}
interface dataa {
  jwt: string;
}
interface returntype {
  msg: {
    _id: string;
    nameofitem: string;
    transactiontype: string;
    totalprice: string;
    remarks: string;
    transactionby: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}
interface objects {
  _id: string;
  nameofitem: string;
  transactiontype: string;
  totalprice: string;
  remarks: string;
  transactionby: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export default function Transactions(props: prop) {
  let tomap: [objects] = props.myprops.msg;
  const mapped = tomap.map((element) => {
    // <Singletransaction
    //   nameofitem={element.nameofitem}
    //   transactionby={element.transactionby}
    //   _id={element._id}
    // />;

    return <Singletransaction key={element._id} {...element} />;
  });
  console.log(mapped);

  // console.log(mapped);
  return (
    <div style={{ backgroundColor: "#141B1F" }} className="pb-6 min-h-screen  ">
      <Navbar />
      {<div className="pt-20 px-3 md:px-64">{mapped}</div>}
    </div>
  );
}
// const dataa: dataa = {
//   jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1bWFuIiwicGFzc3dvcmQiOiJzdW1hbiIsImlhdCI6MTY3MTI3MjYwOH0.wemrDmYIKLe7K_kNuXojdB1vCfyswPwTjCmWw3opQWc",
// };
export async function getServerSideProps() {
  console.log("this was executed on the server");
  // const data = fetch("http://localhost:5000/api/transactions", {
  //   method: "GET",
  //   body: JSON.stringify(dataa),
  //   headers: {
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  // }).then((result) => result.json());
  const data = await fetch("http://localhost:5000/api/transactions");
  let myprops = await data.json();
  return {
    props: { myprops },
  };
}
