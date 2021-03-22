const db = require("../db");

const deleted = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = db.execute(`DELETE FROM senators WHERE senators.id = ${id}`);
    return res.json({
      msg: true,
      result,
    });
  } catch (error) {
      console.log(error)
    return res.json({
      msg: false,
    });
  }
};

module.exports = deleted;
