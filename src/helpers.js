import Chance, { integer } from "chance";

/* import { getNewCypherKey_Sync } from "./cypher.mjs"; */
let _chance_session = null;

export function getCurrentChanceSession() {
  return _chance_session;
}

export function createNewChanceSession(
  UUID_key = "f7d9e4052552d91c7ff4d22e3c44e9b07fc431e12e412ba362"
) {
  _chance_session = new Chance(UUID_key);
  return _chance_session;
}

export function getRandomInt(max) {
  /*   return Math.floor(Math.random() * (max - 0 + 1)) + 0; */
  return _chance_session.integer({ min: 0, max: max });
}

export function getRandomRGB() {
  return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(
    255
  )})`;
}

/* export function divideString(str, n) {
  let str_size = str.length;
  let part_size = Math.ceil(str_size / n, 10);

  let arrParts = [];
  let tempString = "";

  for (let i = 0; i < str_size; i++) {
    if (i % part_size == 0 && tempString) {
      arrParts.push(tempString);
    } else {
      tempString += str[i];
    }
  }
  return arrParts;
}
 */