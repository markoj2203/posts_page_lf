import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Content() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20")
      .then(function (response) {
        setData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          {data.map((item, i) => (
            <div className="col-4">
              <div key={i} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                  <a href="#" className="card-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
