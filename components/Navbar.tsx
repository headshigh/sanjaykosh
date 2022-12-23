import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
interface props {
  data: {
    balance: number;
  };
}
import Router, { useRouter } from "next/router";
import eyeopen from "../public/eyeopen.png";
import eyeclose from "../public/eyeclose.png";
import avatar from "../public/avatar.png";
function Navbar(props: props) {
  const router = useRouter();
  const [eyeon, seteyeon] = useState<boolean>(false);
  console.log(props);
  return (
    <div>
      <div style={{ backgroundColor: "#60BB46" }} className="navbar__wrapper  ">
        <div className="flex pt-8 px-2  lg:px-32 justify-between py-1">
          {" "}
          <div className="balance text-2xl flex items-center gap-3 lg:text-4xl">
            {eyeon ? (
              <div className="bal">
                <div>Balance:</div>
                <div>{props.data.balance}</div>
              </div>
            ) : (
              <div className="bal">
                <div>Balance:</div>
                <div>XXX.XX</div>
              </div>
            )}

            <Image
              width={36}
              onClick={() => seteyeon((prev) => !prev)}
              src={eyeon ? eyeopen : eyeclose}
              alt="eye"
            />
          </div>
          <div className="flex gap-3 flex items-center md:gap-5">
            <Link className="text-xl lg:text-2xl" href="/transactions">
              Transactions
            </Link>
            <Link href={`/login?referer=${router.pathname}`}>
              <Image
                className="image"
                style={{ width: "32px", height: "32px" }}
                src={avatar}
                alt="login"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
