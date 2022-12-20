import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Update from "../components/Update";
import Transactions from "./Transactions";
import Poput from "../components/Poput";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div>
        <Update />
      </div>
    </div>
  );
}
