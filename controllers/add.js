const db = require("../db");

const add = async (req, res, next) => {
    try {
    const { name, email, number, state } = req.body;
    const result = await db.execute(
      "INSERT INTO senators (name, phoneNumber, email, state) VALUES (?, ?, ?, ?)",
      [name, number, email, state]
    );

    return res.status(200).json({
      msg: true,
      result,
    });
  } catch (error) {
      console.log(error)
    return res.json({
      message: false,
    });
  }
};

module.exports = add;
