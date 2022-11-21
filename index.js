"use strict";
const express = require("express");
const app = express();

const blogPosts = [{id: 1, title: "First blogpost hello"}];

app.get("/", (req, res) => {
  res.status(200).json({
    ok: true
  });
});

app.get("/:id", (req, res) => {
  const blogPostIdParam = req.params.id;
  const blogPost = blogPosts.find((b) => b.id.toString() === blogPostIdParam);
  res.status(200).json({
    blogPost: !!blogPost
  });
});

module.exports = app;
