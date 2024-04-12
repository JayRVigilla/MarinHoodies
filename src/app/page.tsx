"use client"
// import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getPropertyById, getPropertyPermits } from "../lib/attom";

export default function Home() {
  const [data, setData] = useState({})
  useEffect(() => {
    const getData = async() => {
      const datum = await getPropertyById('156707266')
      console.log("pages useEffect", data)
      setData(datum)
    }
    getData()
  }, [])

  return (
    <div className={styles.home}>
      <h1>Lauren Ipsom Realty Empty</h1>
    <p>{JSON.stringify(data)}</p>
    </div>
  );
}
