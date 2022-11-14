"use strict";
require("should");

const request = require("supertest");
const app = require("../");

describe("GET /", () => {
  it("should say 200 ok", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .then((response) => {
        response.body.should.eql({
          ok: true
        });
      });
  });
});
