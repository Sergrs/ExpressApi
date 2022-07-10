const pool = require("../../db");
const queries = require('./queries');

const getSports = (req, res) => {
  pool.query(queries.getSports, (error, results) => {
    if(error) throw error;
    res.status(200).json(results.rows);
  })
};

module.exports = {
  getSports,
};
