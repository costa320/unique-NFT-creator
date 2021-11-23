import { getNewCypherKey } from "./cypher.mjs";
import { generateRandomSplash } from "./drawer.mjs";

getNewCypherKey()
  .then((key) => {
    console.log(key);
  })
  .catch((err) => console.log(err));

/* export function _init_() {
  console.log("INIT FUNCTION CALLED");
  generateRandomSplash(document.body);
}
 */
