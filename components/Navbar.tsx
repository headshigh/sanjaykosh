import React from "react";

function Navbar() {
  return (
    <div>
      <div style={{ backgroundColor: "#60BB46" }} className="navbar__wrapper  ">
        <div className="flex pt-8 px-2 md:pt-28 lg:px-64 justify-between py-1">
          {" "}
          <div className="balance text-2xl lg:text-5xl">Balance: Npr 5000 </div>
          <div className="avatar text-2xl lg:text-5xl">Login </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
