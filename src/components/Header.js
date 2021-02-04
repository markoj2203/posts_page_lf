import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {
  const [postsCount, setPostsCount] = useState(0);

  const countPosts = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPostsCount(response.data.length);
      });
  };

  useEffect(() => {
    countPosts();
  }, []);

  return (
    <div className="header">
      <h2>Posts:{postsCount}</h2>
    </div>
  );
}
