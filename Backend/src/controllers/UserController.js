const express = require("express");
const router = express.Router();
const userService = require("../services/UserService");

async function add(req, res) {
  var userInfo = req.body;
  const result = await userService.addUser(userInfo, res);
  return result;
}

module.exports = {
    add,
};
