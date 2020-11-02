const Atendimentos = require("./atendimentosService");
module.exports = app => {
  app.get("/atendimentos", (req, res) => {
    Atendimentos.list(res);
  });

  app.get("/atendimentos/:id", (req, res) => {
    Atendimentos.search(Number(req.params.id), res);
  });

  app.post("/atendimentos", (req, res) => {
    Atendimentos.create(req.body, res);
  })

  app.put("/atendimentos/:id", (req, res) =>{
    Atendimentos.update(Number(req.params.id), req.body, res);
  })

  app.delete("/atendimentos/:id", (req, res) =>{
    Atendimentos.delete(Number(req.params.id), res);
  })
}