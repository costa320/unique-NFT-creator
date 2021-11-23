import Chance, { integer } from "chance";
/* import { getNewCypherKey_Sync } from "./cypher.mjs"; */
let _chance_session = null;

export function getCurrentChanceSession() {
  return _chance_session;
}

export function createNewChanceSession(UUID_key = "") {
  _chance_session = new Chance(UUID_key);
}

export function getRandomInt(max) {
  return chance.integer({ min: 0, max: max });
}

export function getRandomRGB() {
  return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(
    255
  )})`;
}
