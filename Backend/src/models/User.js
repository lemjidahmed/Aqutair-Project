var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,

      required: [true, "User email required"],
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    confirmMail: { type: Boolean, default: false },
    confirmPass: { type: Boolean, default: false },
  },
  { collection: "userCollection" }
);

module.exports = mongoose.model("User", userSchema);
