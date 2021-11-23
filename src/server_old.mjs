import { getNewCypherKey } from "./cypher.mjs";
import Chance from "chance";
/* import { generateRandomSplash } from "./drawer.mjs"; */

getNewCypherKey()
  .then((key) => {
    var chance1 = new Chance(12345);

    console.log(chance1.random());

    console.log(key);
  })
  .catch((err) => console.log(err));

/* export function _init_() {
  console.log("INIT FUNCTION CALLED");
  generateRandomSplash(document.body);
}
 */
