import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./CurrentValue.css";

function Value() {
  const [ethValue, setValue] = useState({
    name: null,
    price: null,
  });

  const endpoint = `/v1/cryptocurrency/quotes/latest`;
  const API_KEY = process.env.REACT_APP_API_KEY_CRYPTO;

  useEffect(() => {
    Axios.get(`${endpoint}`, {
      headers: {
        "X-CMC_PRO_API_KEY": REACT_APP_API_KEY_CRYPTO,
        Accept: "application / json",
      },
      params: {
        id: 1027,
        convert: "GBP",
      },
    })
      .then((response) => {
        console.log(response);
        setValue({
          name: response.data.data[1027].name,
          price: response.data.data[1027].quote.GBP.price.toFixed(2),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);

  return (
    <div className={"main"}>
      <div className={"ethValue"}>
        <h1>{ethValue.name} is currently valued at:</h1>

        <h1>£{ethValue.price}</h1>
      </div>
    </div>
  );
}

export default Value;
