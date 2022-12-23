import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Update from "../components/Update";
import Transactions from "./transactions";
import Poput from "../components/Poput";
import axios from "axios";
interface props {
  data: {
    balance: number;
  };
}

export default function Home(props: props) {
  console.log(props);
  return (
    <div className="">
      <Navbar data={props.data} />
      <div>
        <Update />
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  console.log("executed on server");
  const data = await fetch(
    "https://uninterested-coveralls-tick.cyclic.app/api/balance"
  );
  let myprops = await data.json();
  console.log("data" + JSON.parse(JSON.stringify(data)));
  return {
    props: { data: JSON.parse(JSON.stringify(myprops)) },
  };
}
