import React from "react";
interface proptype {
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

function sigletransaction({
  nameofitem,
  createdAt,
  updatedAt,
  remarks,
  totalprice,
  transactiontype,
  transactionby,
}: proptype) {
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

              <h1>{createdAt}</h1>
            </div>
            <h1 className="text-xl">{totalprice}</h1>
          </div>
          <div className="middle">
            <h1 className="text-lg pt-2">{nameofitem}</h1>
          </div>
          <div className="bottom pt-2 text-lg">Balance</div>
        </div>
      </div>
    </div>
  );
}

export default sigletransaction;
