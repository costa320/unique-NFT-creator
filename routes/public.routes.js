var express = require("express");
const path = require("path");
var router = express.Router();

/* GESTIONE ROUTING REACT E VARI REFRESH RICHIESTI DAL BROWSER */
router.get("/", function (req, res, next) {
  /* tutto quello che sta sul path /users non è di react */
  /*   res.header("Pragma", "no-cache");
  res.header("Expires", -1);
  res.header('Cache-Control', "private, no-cache, no-store, must-revalidate"); */
  res.sendFile(path.join(__dirname, "../dist/index.html"), function (err) {
    if (err) {
      console.log("INDEX.HTML NOT FOUND ERROR!");
      res.status(500).send(err);
    }
  });
});

module.exports = router;
