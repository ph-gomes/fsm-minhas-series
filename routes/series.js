const Router = require("express").Router();

const Serie = require("../models/serie");
const seriesController = require("../controllers/series");

const models = {
  Serie
};

Router.get("/", seriesController.index.bind(null, models));

Router.get("/nova", seriesController.novaForm);
Router.post("/nova", seriesController.novaProcess.bind(null, models));

module.exports = Router;
