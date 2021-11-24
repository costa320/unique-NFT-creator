/* import { getNewCypherKey } from "./cypher"; */
import {
  generateMultipleRandomSplash,
  generateRandomSplash,
  downloadImage,
} from "./drawer.js";
import axios from "axios";

console.log("Front-End version: ", process.env.FE_VERSION);

export function _init_() {
  console.log("INIT FUNCTION CALLED");

  getConfigurations(3)
    .then((result) => {
      generateMultipleRandomSplash(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
export function _downloadImage_() {
  downloadImage();
}

function getConfigurations(numConfigurations = 1) {
  return new Promise((res, rej) => {
    let config = {
      method: "get",
      url: `${process.env.API_URL}/api/getObjConfigurationByNum/${numConfigurations}`,
      headers: {
        accept: "application/json",
      },
    };
    axios(config)
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
