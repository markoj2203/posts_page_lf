import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Content() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [authorName, setAuthorName] = useState([]);

  const dispatch = useDispatch();

  const getData = async () => {
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      )
      .then(function (response) {
        setData(response.data);
      });
  };
  const getAuthorName = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(function (response) {
        setAuthorName(response.data);
      });
  };

  const onClickAction = (id) => {
    localStorage.setItem("postId", id);

    dispatch({ type: "POST_ID", id: id });
  };
  useEffect(() => {
    getData();
    getAuthorName();
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="input-group" style={{ marginBottom: "10%" }}>
            <span className="input-group-text">Search</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <select type="text" aria-label="Last name" className="form-control">
              <option>Filter by Author Name</option>
              {authorName.map((item, i) => (
                <option key={i}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div className="col-4">
              <div key={i} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                  <Link
                    to="/post"
                    className="card-link"
                    onClick={() => onClickAction(item.id)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
