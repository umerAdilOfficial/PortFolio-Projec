const Skill = require("../models/Skill");

// ADD SKILL
const addSkill = async (req, res) => {
  try {
    const skill = await Skill.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Skill Added",
      skill,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SKILLS
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({
      userId: req.params.userId,
    });

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE SKILL
const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Skill Updated",
      skill,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE SKILL
const deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Skill Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addSkill,
  getSkills,
  updateSkill,
  deleteSkill,
};
