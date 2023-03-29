import React, { useEffect, useState } from "react";

import "../Style/History.css";
const History = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const myHistory = localStorage.getItem("data_history");
    if (myHistory) {
      setHistory(JSON.parse(myHistory));
    }
  }, []);
  return (
    <div>
      <h2>History</h2>
      <div>
        {history.length > 0 &&
          history.map((ele) => {
            return (
              <div>
                <p>{ele.inputData}</p>
                <p>{ele.result}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default History;
