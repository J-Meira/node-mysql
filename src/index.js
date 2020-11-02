const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const server = require("./config/server");
const connection = require("./config/connection");
const Tables = require("./config/tables");

connection.connect((erro) =>{
  if(erro){
    console.log(erro);
  }
  else{
    console.log("conneceted!");

    Tables.init(connection);
    const app = server();

    app.listen(port, () => console.log(`running port ${port}`));
  }
})
