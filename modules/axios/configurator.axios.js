var express = require("express");
const path = require("path");
var router = express.Router();
const axios = require("axios");
const https = require("https");
var fs = require("fs");
/* MODULES */
var configurator = require("../functions/configurator.logic");

const httpsAgent = new https.Agent({ keepAlive: true });

exports.getAllObjConfigs = (url = "") => {
  return new Promise((result, reject) => {
    result([{ UUID: "TU MADRE" }]);
  });
};
