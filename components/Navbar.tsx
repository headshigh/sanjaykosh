import axios from "axios";
import React from "react";
interface props {
  data: {
    balance: number;
  };
}

function Navbar(props: props) {
  console.log(props);
  return (
    <div>
      <div style={{ backgroundColor: "#60BB46" }} className="navbar__wrapper  ">
        <div className="flex pt-8 px-2 md:pt-28 lg:px-32 justify-between py-1">
          {" "}
          <div className="balance text-2xl lg:text-4xl">
            Balance: Nrs {props.data.balance}{" "}
          </div>
          <div className="avatar text-2xl lg:text-4xl">Login </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
