import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

function Login() {
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const [sucess, setSucess] = useState();
  const router = useRouter();
  const handleChange = (e: any) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(router);
  console.log(input);
  console.log(input.username);
  function hasError() {
    if (input.username == "" || input.password == "") {
      return true;
    } else {
      return false;
    }
  }
  console.log(hasError());
  //   function move() {
  //     const btn = document.getElementById("btn2");
  //     if (hasError()) {
  //       btn.style.left == "0px"
  //         ? (btn.style.left = "100px")
  //         : (btn.style.left = "0px");
  //       btn.disabled = true;
  //     } else {
  //       btn.style.left = "0px";
  //       btn.disabled = false;
  //     }
  //   }

  const login = async (e: any) => {
    try {
      e.preventDefault();
      const user = await axios.post("http://localhost:5000/api/login", {
        username: input.username,
        password: input.password,
      });
      console.log(user);
      //   setSucess(true);
      //   setError(undefined);
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("user", JSON.stringify(user.data.user));
      // console.log(user.data.user);
      //   location.reload();
    } catch (err: any) {
      console.log(err);
      // setError(err.response.data.msg);
    }
  };
  //   console.log(error);
  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundColor: "#141B1F" }}
        className="register__wrapper relative  flex justify-center h-screen pt-16 "
      >
        <div className="signin__wrapper py-5 w-full px-5 md:w-1/3   ">
          <form className=" ">
            <h1 className="text-3xl mb-3">LOGIN</h1>
            <p className="mb-1 text-lg font-normal ">
              {" "}
              Please Login to continue.
            </p>
            {error && (
              <p
                style={{ color: "	#FF0000" }}
                className="mb-1 text-lg font-normal "
              >
                {error + " !!"}
              </p>
            )}
            {sucess && (
              <p className="mb-1 text-lg font-normal ">Login Sucess</p>
            )}
            <form>
              <div className="flex justify-center flex-col">
                <h1 style={{ color: "black" }} className="mb-1 text-base">
                  Username
                </h1>
                <input
                  onChange={handleChange}
                  style={{ backgroundColor: "#f3e8ff" }}
                  name="username"
                  placeholder="nischal7200"
                  className="border-gray-600 border px-2 py-2 "
                  type="text"
                  value={input.username}
                />
              </div>

              <div className="flex justify-center flex-col mt-2">
                <h1 style={{ color: "white" }} className="mb-1 text-base">
                  Password
                </h1>
                <input
                  onChange={handleChange}
                  style={{ backgroundColor: "#f3e8ff" }}
                  name="password"
                  placeholder="1234#*@"
                  className="border-gray-600 border px-2 py-2 "
                  type="text"
                />
              </div>

              <button
                // onMouseEnter={move}
                onClick={login}
                id="btn2"
                style={{ backgroundColor: "#60BB46" }}
                className="btn2 max-w-fit  rounded-3xl text-white px-3 py-1 ease-in	duration-150		relative mt-5"
                type="submit"
              >
                Login
              </button>
            </form>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

export default Login;
