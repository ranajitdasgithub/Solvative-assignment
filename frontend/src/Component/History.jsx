import React, { useEffect, useState } from "react";

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
      <div>History</div>
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
