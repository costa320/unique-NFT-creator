import { getNewCypherKey } from "./src/cypher.js";

getNewCypherKey()
  .then((key) => {
    console.log(key);
  })
  .catch((err) => console.log(err));
