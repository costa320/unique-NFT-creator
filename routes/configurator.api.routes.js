var express = require("express");
const path = require("path");
var router = express.Router();
var cors = require("cors");
/* modules */
var Configurator = require("../modules/axios/configurator.axios.js");

var corsOptions = {
  origin: "http://localhost:3008",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

/* GESTIONE ROUTING REACT E VARI REFRESH RICHIESTI DAL BROWSER */
router.get(
  "/getObjConfigurationByNum/:numElements",
  cors(corsOptions),
  function (req, res, next) {
    let { numElements } = req.params;

    if (numElements) {
      Configurator.getAllObjConfigs(numElements)
        .then((result) => {
          /* console.log(result); */
          res.status(200).send(result);
        })
        .catch((err) => {
          console.log("ERROR:", err);
          res.status(500).send(err);
        });
    } else {
      res.status(500).send("Url is required");
    }
  }
);

module.exports = router;
