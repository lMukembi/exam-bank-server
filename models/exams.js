const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      required: true,
    },

    unit: {
      type: String,
      required: true,
    },

    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
