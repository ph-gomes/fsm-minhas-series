const Router = require("express").Router();

const Serie = require("../models/serie");
const seriesController = require("../controllers/series");

const models = {
  Serie
};

Router.get("/", seriesController.index.bind(null, models));

Router.get("/nova", seriesController.novaForm);
Router.post("/nova", seriesController.novaProcess.bind(null, models));

Router.get("/excluir/:id", seriesController.excluir.bind(null, models));

Router.get("/editar/:id", seriesController.editarForm.bind(null, models));
Router.post("/editar/:id", seriesController.editarProcess.bind(null, models));

Router.get("/info/:id", seriesController.info.bind(null, models));
Router.post("/info/:id", seriesController.addComentario.bind(null, models));

module.exports = Router;
