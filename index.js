import { getNewCypherKey } from "./src/cypherHelpers.js";

getNewCypherKey()
  .then((key) => {
    console.log(key);
  })
  .catch((err) => console.log(err));
