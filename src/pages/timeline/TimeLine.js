import React,{useEffect, useState} from "react";
import { Box } from "@mui/material";
import Post from "../../sharedComponents/post/Post";
import axios from "axios";
import ServerUrl from "../../config";
export default function () {
  const posts = [
    {
      poster: { name: "bernard narvaez" },
      date: "5/2/2022",
      image:
        "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      textContent: "Best Place on earth",
    },
    {
        poster: { name: "bernard narvaez" },
        date: "5/21/2022",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781",
        textContent: "Delicious pizza!",
      },
      {
        poster: { name: "bernard narvaez" },
        date: "5/22/2022",
        image:
          "https://images.unsplash.com/photo-1478555718543-a87aa261dbc4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074",
        textContent: "One with nature",
      },
      {
        poster: { name: "bernard narvaez" },
        date: "5/25/2022",
        image:"https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736",
        textContent: "Working all day",
      },
    
  ];

  // useEffect(()=>{
  //   axios.get("")
  // },[])
  return (
    <Box>
      {posts.map((post) => (
        <Post
          poster={post.name}
          date={post.date}
          textContent={post.textContent}
          image={post.image}
        />
      ))}
    </Box>
  );
}
