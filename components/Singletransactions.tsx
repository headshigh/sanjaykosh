import React from "react";
import delet from "../public/delete.png";
import Image from "next/image";
import axios from "axios";

interface proptype {
  _id: string;
  key: string;
  nameofitem: string;
  transactiontype: string;
  transactiontime: string;
  totalprice: string;
  remarks: string;
  transactionby: string;
  createdAt: string;
  updatedAt: string;
  balanceafter: number;
  __v: number;
}

function sigletransaction({
  nameofitem,
  transactiontime,
  createdAt,
  updatedAt,
  totalprice,
  transactiontype,
  transactionby,
  balanceafter,
  _id,
}: proptype) {
  const [transactionid, setid] = React.useState<string>(_id);
  const hanldedelete = async () => {
    const res = await axios.delete(
      `https://https://uninterested-coveralls-tick.cyclic.app/api/transactions?id=${transactionid}`
    );
  };
  return (
    <div className="">
      <div className="signle__wrapper  mb-6 px-5 rounded-lg py-1  md:px-12 ease-out  md:mx-auto  ">
        {" "}
        <div className="flex flex-col">
          <div className="top flex justify-between gap-2">
            <div className="flex flex-col">
              <h1 className="text-2xl leading-7 ">
                Fund{" "}
                {transactiontype == "withdrawl" ? (
                  <div className="inline decoration-red-700 underline">
                    withdrawn
                  </div>
                ) : (
                  <div className="decoration-green-700 underline inline">
                    {" "}
                    deposited
                  </div>
                )}{" "}
                by{" "}
                {transactionby?.slice(0, 1).toLocaleUpperCase() +
                  transactionby?.slice(1)}{" "}
              </h1>

              <h1>{transactiontime.slice(3, -12)}</h1>
            </div>
            <div className="flex gap-4">
              <h1 className="text-xl">{totalprice}</h1>
              <Image
                src={delet}
                alt=""
                className="h-9"
                width={32}
                height={24}
                onClick={hanldedelete}
              />
            </div>
          </div>
          <div className="middle">
            <h1 className="text-lg pt-2">{nameofitem}</h1>
          </div>
          <div className="bottom pt-2 text-lg">Balance:{balanceafter}</div>
        </div>
      </div>
    </div>
  );
}

export default sigletransaction;
