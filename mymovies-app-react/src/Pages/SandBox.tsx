import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Components/Layout";
import Button from "../Components/Button";
import { useFetchGet } from "../Utils/Hooks/useFetchGet";

export default function SandBox() {
  const [first, setFirst] = useState("test");
  const [trigger, setTrigger] = useState(false);
  const [data] = useFetchGet

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("running");
  }, [trigger]);

  function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Layout>
      <p>Test</p>
      <Button label="BUTTON" onClick={() => setTrigger(!trigger)} />
    </Layout>
  );
}
