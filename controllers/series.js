const index = ({ Serie }, req, res) => {
  Serie.find({}, (err, docs) => {
    res.render("series/index", { series: docs });
  });
};
const novaProcess = ({ Serie }, req, res) => {
  console.log(req.body);
  const serie = new Serie(req.body);
  serie.save(_ => {
    res.redirect("/series");
  });
};

const novaForm = (req, res) => {
  res.render("series/nova");
};

module.exports = {
  index,
  novaProcess,
  novaForm
};
