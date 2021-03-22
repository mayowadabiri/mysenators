const db = require("../db");

exports.searchByState = async (req, res, next) => {
  //   console.log("searched");
  try {
    const stateID = req.params.id;
    const result = await db.execute(
      ` SELECT * FROM senators JOIN states ON states.id = senators.state WHERE senators.state = ${stateID}`
    );

    return res.json({
      result: result[0],
      msg: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
};

exports.searchByName = async (req, res, next) => {
  try {
    const name = req.params.id;
    const result = await db.execute(
      `SELECT * FROM senators WHERE senators.name LIKE "%${name}%"`
    );
    return res.json({
      result: result[0],
      msg: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
};

// module.exports = searchByState;
