"use strict";
require("should");

const request = require("supertest");
const app = require("../");

describe("GET /posts", () => {
  it("should say 200 ok", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .then((response) => {
        response.body.should.eql({
          ok: true,
        });
      });
  });
});

describe("GET /:id", () => {
  it("ID GET request should return blogpost", () => {
    return request(app)
      .get("/1")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .then((response) => {
        const post = response.body.blogPost;
        post.should.eql({
          id: "1",
          title: "First blogpost hello",
          text: "mumbo jumbo",
        });
      });
  });
});

describe("GET no existing blog post", () => {
  it("Get request with ID that doesn't exist should return error response", () => {
    return request(app)
      .get("/99")
      .expect(404)
      .expect("Content-Type", "application/json; charset=utf-8")
      .then((response) => {
        response.body.should.eql({
          Error: true,
          Message: "Couldn't find blog post with Id 99",
        });
      });
  });
});

describe("GET /posts", () => {
  it("request should return all blogposts", () => {
    return request(app)
      .get("/posts")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .then((response) => {
        response.body.blogPosts.length.should.eql(2);
      });
  });
});

describe("POST /posts", () => {
  it("request should create an entry on blogposts", () => {
    return request(app)
      .post("/posts")
      .send({ title: "New blogpost", text: "Hellooo world" })
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .then((response) => {
        response.body.id.should.eql(3);
      });
  });
});

describe("POST /posts", () => {
  it("Create blog post with anything, should return not accepted", () => {
    return request(app)
      .post("/posts")
      .expect(400)
      .expect("Content-Type", "application/json; charset=utf-8")
      .then((response) => {
        response.body.should.eql({
          Error: true,
          Message: "Bad request",
        });
      });
  });
});

