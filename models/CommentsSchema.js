// product schema

const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timetamps: true }
);

// module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default mongoose.models.CommentsSchema ||
  mongoose.model("CommentsSchema", CommentsSchema);
