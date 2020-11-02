class Tables{
  init(connection){
    console.log("call tables");
    this.connection = connection;

    this.createAtendimentos();
  }

  createAtendimentos(){
    const sql = "CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, status varchar(20) NOT NULL, date datetime NOT NULL, createAt datetime NOT NULL, observations text, PRIMARY KEY(ID))";

    this.connection.query(sql, erro => {
      if(erro){
        console.log(erro);
      }
      else{
        console.log("table created");
      }
    })
  }

}
module.exports = new Tables;