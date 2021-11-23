/* import { getNewCypherKey } from "./cypher"; */
import { generateRandomSplash } from "./drawer";

/* getNewCypherKey()
  .then((key) => {
    console.log(key);
  })
  .catch((err) => console.log(err)); */

export function _init_() {
  console.log("INIT FUNCTION CALLED");
  generateRandomSplash(document.body);
}
