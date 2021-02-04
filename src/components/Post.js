import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Post() {
  const id = useSelector((state) => state.getPostId.id);

  const idChk = id !== undefined ? id : localStorage.getItem("postId");

  const [postData, setPostData] = useState([]);
  const [comments, setCommentsData] = useState([]);

  const getPost = async (idChk) => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idChk}`)
      .then(function (response) {
        setPostData(response.data);
      });
  };
  const getComments = async (idChk) => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idChk}/comments`)
      .then(function (response) {
        setCommentsData(response.data);
      });
  };

  useEffect(() => {
    getPost(idChk);
    getComments(idChk);
  }, [idChk]);

  return (
    <div className="content">
      <div className="container center flex-column">
        <div className="card" style={{ width: "100%", marginBottom: "10%" }}>
          <div className="card-body">
            <h5 className="card-title">{postData.title}</h5>
            <p className="card-text">{postData.body}</p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom: "5%",
            backgroundColor: "lightgrey",
          }}
        >
          <div className="card-body">
            <p className="card-text">Author: </p>
          </div>
        </div>
        <div className="comments">
          <h2>Comments</h2>
          {comments.map((item, i) => (
            <div key={i} className="card">
              <div className="card-header">{item.name}</div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>{item.body}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
