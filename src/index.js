/* import { getNewCypherKey } from "./cypher"; */
import { generateRandomSplash, downloadImage } from "./drawer.mjs";

/* getNewCypherKey()
  .then((key) => {
    console.log(key);
  })
  .catch((err) => console.log(err)); */

export function _init_() {
  console.log("INIT FUNCTION CALLED");
  generateRandomSplash();
}
export function _downloadImage_() {
  downloadImage();
}
