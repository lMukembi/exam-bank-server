const Exams = require("../models/exams");

exports.addExam = async (req, res) => {
  const { code, unit, file, id } = req.body;

  try {
    const newExam = await Exams.create({
      code,
      unit,
      file,
      userID: id,
    });

    await newExam.save();

    return res.status(200).json({ success: true, data: newExam });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong!" });
  }
};

exports.getExams = async (req, res) => {
  const { id } = req.params;

  try {
    const exams = await Exams.find({ userID: id }).sort({ createdAt: -1 });

    return res.status(200).json(exams);
  } catch (error) {
    res.status(404).json({ message: "No exams!" });
  }
};
