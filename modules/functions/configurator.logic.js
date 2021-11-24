var { randomUUID } = require("crypto");
var Chance = require("chance");
/* models */

exports.getRandomObject = (response, url) => {
  return new Promise((res, rej) => {
    try {
      /* new object */
      let NO = {
        color_uuid: randomUUID(),
        points_uuid: randomUUID(),
        curved_uuid: randomUUID(),
      };

      NO.color = NO.color_uuid
        .split("-")
        .map((uuidKey) => getRandomRGB(uuidKey));

      /* 128 magic number max points */
      NO.points = getRandomInt(NO.points_uuid, 128);

      NO.curved = getRandomPick(NO.curved_uuid, [true, false]);

      res(NO);
    } catch (err) {
      rej(["ERROR:getRandomObject", err]);
    }
  });
};

function getRandomInt(uuid = "", max = 0) {
  return new Chance(uuid).integer({ min: 0, max: max });
}

function getMultipleRandomPick(uuid = "", listOfPicks = ["a"], numPicks = 1) {
  return new Chance(uuid).pickset(listOfPicks, numPicks);
}

function getRandomPick(uuid = "", listOfPicks = ["a"]) {
  return new Chance(uuid).pickone(listOfPicks);
}

function getRandomRGB(uuidKey = "") {
  return new Chance(uuidKey).color({ format: "rgb" });
}
