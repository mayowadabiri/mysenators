const db = require("../db");

const getAll = async (req, res, next) => {
    console.log("reached")
  try {
    const result = await db.execute("SELECT * FROM senators");
    // console.log(result[0]);
    return res.status(200).json({
      result: result[0],
      message: "Fetched Successfully",
    });
  } catch (error) {
    res.json({
      success: false,
    });
    console.log(error);
  }
};

module.exports = getAll;
