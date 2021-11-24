var express = require("express");
const path = require("path");
var router = express.Router();
const axios = require("axios");
const https = require("https");
var fs = require("fs");
/* MODULES */
var Configurator = require("../functions/configurator.logic.js");

exports.getAllObjConfigs = (numElements = 0) => {
  return new Promise((result, reject) => {
    let arrPromises = [];
    for (let i = 0; i < numElements; i++) {
      arrPromises.push(Configurator.getRandomObject());
    }
    Promise.all(arrPromises)
      .then((values) => {
        result(values);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
