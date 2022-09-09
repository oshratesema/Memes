import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayMemes from "./DisplayMemes";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Memes() {
  let [data, setData] = useState([]);
  let [newData, setNewData] = useState({});
console.log(data);
  let fetchData = async () => {
    await axios.get("https://api.imgflip.com/get_memes").then((response) => {
      setData(response.data.data.memes);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function filterInput(inputVal) {
    let filteredData = data.filter((elem) => {
      return elem.name.toLowerCase().startsWith(inputVal);
    });

    setNewData(filteredData);
  }

  return (
    <div className="d-flex flex-column bg-dark align-items-center">
      <input
        placeholder="Search"
        className="col-5 btn bg-white my-5 text-center"
        onChange={(e) => {
          filterInput(e.target.value);
        }}
      ></input>
      <div className="d-flex flex-wrap col-12">
      {newData.length < data.length
          ? newData.map((elem) => (
              <DisplayMemes key={elem.id} mem={elem} />
            ))
          : data.map((elem) => (
              <DisplayMemes key={elem.id} mem={elem} />
            ))}
      </div>
    </div>
  );
}

