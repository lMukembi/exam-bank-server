const express = require("express");
const router = express.Router();

const { addExam, getExams } = require("../controllers/exams");

router.route("/:id/addexam").post(addExam);
router.route("/:id/all-exams").get(getExams);

module.exports = router;
