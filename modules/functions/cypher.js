import { scrypt, scryptSync, randomUUID, randomInt } from "crypto";

export function getNewCypherKey() {
  return new Promise((res, rej) => {
    let password_UUID = randomUUID();
    let salt_UUID = randomUUID();
    let derivedKey_length = 1500; /* randomInt(1000, 2000); */

    scrypt(
      password_UUID,
      salt_UUID,
      derivedKey_length,
      { N: 1024 },
      (err, derivedKey) => {
        // Using a custom N parameter. Must be a power of two.
        if (err) rej(err);
        res(derivedKey.toString("hex"));
        /* console.log(derivedKey.toString("hex")); */ // '3745e48...aa39b34'
      }
    );
  });
}

export function getNewCypherKey_Sync() {
  let password_UUID = randomUUID();
  let salt_UUID = randomUUID();
  let derivedKey_length = 1500; /* randomInt(1000, 2000); */

  return scryptSync(password_UUID, salt_UUID, derivedKey_length, { N: 1024 });
}
