const db = require("../db");

const edit = (req, res, next) => {
  try {
    const id = +req.params.id;
    const { name, email, number } = req.body;
    const result = db.execute(
      `UPDATE senators SET name =?, email =?, phoneNumber =?  WHERE senators.id =${id}`,
      [name, email, number]
    );

    return res.json({
        // result: result,
        message: true
    });
  } catch (error) {
      console.log(error)
    return res.json({
      message: false,
    });
  }
};

module.exports = edit;
