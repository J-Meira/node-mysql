const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "node_user",
  password: "node_pass",
  database: "node_db"
});


module.exports = connection;