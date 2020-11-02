const moment = require("moment");
const connection = require("../config/connection");

class Atendimentos {
  create(atendimento, res) {
    const createAt = moment().format("YYYY-MM-DD HH:MM:SS");
    const date = moment(atendimento.date, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");

    const validate = [
      {
        name: "client",
        isvalid: atendimento.client.length > 4,
        message: "name de more 4"
      },
      {
        name: "date",
        isvalid: moment(date).isSameOrAfter(createAt),
        message: "date de some or after date now"
      }
    ];

    const erros = validate.filter(item => !item.isvalid);

    if (erros&& erros.length>0) {
      res.status(400).json(erros);
    }
    else {
      const sql = "INSERT INTO atendimentos SET ?";

      connection.query(sql, { ...atendimento, createAt, date }, (erro, result) => {
        if (erro) {
          res.status(400).json(erro);
        }
        else {
          res.status(201).json(result)
        }
      })
    }
  }

  list(res){
    const sql = "SELECT * FROM atendimentos";

    connection.query(sql, (erro, resul) =>{
      if(erro){
        res.status(400).json(erro);
      }
      else{
        res.status(200).json(resul);
      }
    })
  }

  search(id, res){
    const sql = `SELECT * FROM atendimentos WHERE id = ${id}`;

    connection.query(sql, (erro, resul) =>{
      if(erro){
        res.status(400).json(erro);
      }
      else{
        res.status(200).json(resul[0]);
      }
    })
  }

  update(id, valores, res){
    if(valores.date){
      valores.date = moment(valores.date, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");
    }
    const sql = `UPDATE atendimentos SET ? WHERE id = ?`;

    connection.query(sql, [valores, id], (erro, resul) =>{
      if(erro){
        res.status(400).json(erro);
      }
      else{
        res.status(200).json(resul);
      }
    })
  }

  delete(id, res){
    const sql = `DELETE FROM atendimentos WHERE id =  ${id}`;

    connection.query(sql, (erro, resul) =>{
      if(erro){
        res.status(400).json(erro);
      }
      else{
        res.status(200).json(resul);
      }
    })
  }
}

module.exports = new Atendimentos;