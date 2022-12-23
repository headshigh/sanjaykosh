import React from "react";
interface prop {
  isEnabled: Boolean;
  message: String | undefined;
}
function Poput(props: prop) {
  return props.isEnabled ? (
    <div
      style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}
      className="flex justify-center  "
    >
      <div className="w-1/4  absolute bottom-20  delay-100 ease-in ">
        <div className="popup__wrapper bg-white px-2 py-1">
          <h1 style={{ color: "black" }} className="text-center">
            {props.message}
          </h1>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default Poput;
