var User = require("../models/User");

async function addUser(userInfo, res) {
  try {
    var user = new User(userInfo);
    const result = await user.save();
    res.json(result);
  } 
  catch (error) {
    res.status(500).send("Error : User not valid");
  }
}

module.exports = {
  addUser,
};
