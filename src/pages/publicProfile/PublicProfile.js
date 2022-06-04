import React, { useState, useEffect } from "react";
import serverUrl from "../../config";
import axios from "axios";
import { Box, Divider } from "@mui/material";
import Post from "../../sharedComponents/post/Post";
import UserHeader from "../../sharedComponents/user/UserHeader";
import SubmitPostForm from "./SubmitPostForm";
import { v4 as uuid } from "uuid";
import "./publicprofile.css";

export default function PublicProfile({
  userId = 1,
  sortBy = "date",
  sortDir = "asc",
  pageSize = 10,
  pageNo = 0,
}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${serverUrl}/api/users/${userId}/posts?sortBy=${sortBy}&sortDir=${sortDir}&pageSize=${pageSize}&pageNo=${pageNo}`
      )
      .then((resp) => {
        if (resp.data.totalElements > 0) {
          setPosts(resp.data.content);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <Box id="public-profile">
      <Box id="public-profile-inner">
        <UserHeader />
        <SubmitPostForm posts={posts} userId={userId} setPosts={setPosts} />
        {/* <Divider margin="normal"/> */}
        {posts.map((post) => {
          return (
            <Post
              key={uuid()}
              imageSrc={post.imageSrc}
              textContent={post.textContent}
              date={post.date}
            />
          );
        })}
      </Box>
    </Box>
  );
}
