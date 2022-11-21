"use strict";
const express = require("express");
const app = express();

const blogPosts = [
  {id: "1", title: "First blogpost hello", text: "mumbo jumbo"},
  {id: "2", title: "Second blogpost hello", text: "hey baberiba"}
];

app.get("/", (req, res) => {
  res.status(200).json({
    ok: true
  });
});

app.get("/posts", (req, res) => {
  res.status(200).json({
    blogPosts,
  });
});

app.get("/:id", (req, res) => {
  const blogPostIdParam = req.params.id;
  const blogPost = blogPosts.find((b) => b.id === blogPostIdParam);
  if (blogPost) {
    res.status(200).json({
      blogPost,
    });
  } else {
    res.status(404).json({
      Error: true,
      Message: "Couldn't find blog post with Id 99"
    });
  }
});

module.exports = app;
