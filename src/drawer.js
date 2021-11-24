import Two from "two.js";
import { getRandomRGB } from "./helpers.js";

export function generateMultipleRandomSplash(configsList) {
  configsList.forEach((config) => {
    generateRandomSplash(config);
  });
}

export function generateRandomSplash(
  config,
  elem = document.getElementById("drawing")
) {
  var params = {
    width: 450,
    height: 450,
    type: Two.Types["svg"],
    fullscreen: false,
  };
  let two = new Two(params).appendTo(document.getElementById("drawing"));

  let points = getPoints(config.points, params);

  var linearGradient = two.makeLinearGradient(
    two.width / 2,
    -two.height / 2,
    two.width / 2,
    two.height / 2,
    new Two.Stop(0, config.color[0]),
    /* new Two.Stop(1, colors[1]), */
    new Two.Stop(1, config.color[1])
  );

  var path = config.curved
    ? two.makeCurve(points, false)
    : two.makePath(points, false);
  path.translation.set(two.width / 2, two.height / 2);
  path.fill = linearGradient;
  /* path.fill = "white"; */
  /* path.noFill(); */
  /* path.noStroke(); */
  path.stroke = config.color[2];
  path.linewidth = 4;

  var text = new Two.Text("SPLASH", two.width / 2, two.height / 2, "normal");
  text.rotation = -0.5;
  text.family = "CurugWeb";
  text.size = 60;

  var group = two.makeGroup(path, text);

  two.update();
}

function getPoints(numPoints = 32, params) {
  let points = [];
  var type = "svg";
  var two = new Two(params);

  var blob = two.makeCircle(
    two.width / 2,
    two.height / 2,
    two.height / 3,
    numPoints
  );
  /* blob.fill = "white"; */
  blob.noFill();
  blob.noStroke();
  // Automatically smoothe vertices to get that smooth "blobby" effect
  blob.automatic = true;
  blob.translation.set(two.width / 2, two.height / 2);

  /* squished = false; */

  for (var i = 0; i < blob.vertices.length; i++) {
    var v = blob.vertices[i];
    var pct = (i + 1) / blob.vertices.length;
    var theta = pct * Math.PI * 2;
    var radius = (Math.random() * two.height) / 3 + two.height / 6;
    var x = radius * Math.cos(theta);
    var y = radius * Math.sin(theta);
    v.set(
      (two.height / 3) * Math.cos(theta),
      (two.height / 3) * Math.sin(theta)
    );
    v.destination = new Two.Vector(x, y);
    points.push(v.destination);
    v.step = Math.sqrt(Math.random()) + 2;
  }
  return points;
}

export function downloadImage(
  svgEl = document.getElementById("drawing").children[0],
  name = "file.svg"
) {
  svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var svgData = svgEl.outerHTML;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], {
    type: "image/svg+xml;charset=utf-8",
  });
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = name;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
