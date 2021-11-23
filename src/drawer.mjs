import Two from "two.js";
import { getRandomRGB } from "./helpers.js";

const key_Example =
  "124c65cc424162ab4970f44b800e7061f542ef830e09f5ffdacc7756a8f120a2661bfb94e1193ecaeb21084d516328d889b153c5d245e027cc51b796912610be7825831bb4eeb84f6c3d7f1f4f42420b8e08ab1f0cbedb32ca1253df83d7247da347f82b17f39d880a67e8bc0d8dd0fa61bcea71448e85ac3caddcfb30bfb20d988d536b3432eb0ba6248f1afdb7b62a80483abe2490b4460b676a2d65ff304de6ded665826f02efd75e8841837d064e6e034505f79f6799e65498259edf6338be491d9931bb804e73c4639fb4086068c3c6dade235fe0967233b14d329f04923f9bb1f0b0abe8303e8afb58ab8386f90e159bfd5438908b584242eaab0eb2f2544eed52a096d36d99618be5cc8ee35d7c4bc6a9ec05dce51c4116aa289196aa17f7086fd1f2d13f904bfa152179a13e506812ca76e5e7ad3fef2123e33f59f24d974ba3d7f5b63214569b062c8fbfaead79073fc65e491bd0005ce22af0fdff1c454deac21915dbb116e1d9b1ae45f631148511dfd286fe1954061b127fafcd66935ca2bfc159388bb14387861a9f2abee69c63af2bd893ce20e66de870703a74189e70d7beca4809a8ddd5c77550b7fd0655a0f76d9a2bf5082ecaca288294b423a1d2920ac4aa3a444f96a480dfca5dda6487a6f493716b6b37c04018297c852fc0dafbd46ab38d3704ff349ffa0903ae0252a77ff5b5daf35448fe9af6a9bc7ab365dd92a7384f5ac7214da2748161523952abd0ab1289f1c56194d82992b568c1348946be397e24f6f79d9ca536e97b6eea10b5cda802eee3d8ac68c2395076e46f65ad3622a7d5e20cd20ccdea77513477d40d8f329dcce425e3c66a740047a46e46502e3cbea725476a1601bbd9f7c0c20c629913e49f3e9625c18c962b205073d331a0ebce5b00b7e2ab092d4b2686dd5a635d735897df2435dde73fa1c659b0489f0a9f731d4602823ff69babc0bc1ba2cf1e686dc291781ad3b346f38fd47d34f775de3da265ce57b970caed56ae536cb1e3e8fee09a800444e4d70fb8a182ffd064e236268b994b9d32f24847a7eeec66d0cc927636625f73fc7700ab14a19d798ae54ae0297c0af43d4cc1b4e22d627fe7e7328f6e74e5eb569528c1d5af0538172474db781bfb24702eb01eeeb7890f3ec9200323ed1d180a659df40b178190e96524ca0c9d92bd0023ecfb9861233a349b41c3f15b06c194bb42da503fdfa087c7c5a91d162bc42842a563c28532c548632cb6b44427f268e87766041d92fd29001e57bc9ccf75099906a400c937b155ea7e06b257aad93e36294a3333b72dcedc65deebb686cfbde7f454a72685031bcf0f9d3f0c4f019f29885de477945603d6b80e2476904d7e8b8323d252f278a3dea012897e28c25e548e89ea1c59fb7e1b4dcd3fc481d443f0d5e74fb1";

export function generateRandomSplash(
  elem = document.getElementById("drawing")
) {
  var params = {
    width: 9000,
    height: 9000,
    type: Two.Types["svg"],
    fullscreen: true,
  };
  let two = new Two(params).appendTo(elem);

  let points = getPoints(128, params);

  var linearGradient = two.makeLinearGradient(
    two.width / 2,
    -two.height / 2,
    two.width / 2,
    two.height / 2,
    new Two.Stop(0, getRandomRGB()),
    /* new Two.Stop(1, colors[1]), */
    new Two.Stop(1, getRandomRGB())
  );

  var circle = two.makePath(points, false);
  circle.translation.set(two.width / 2, two.height / 2);
  circle.fill = linearGradient;
  /* circle.fill = "white"; */
  /* circle.noFill(); */
  /* circle.noStroke(); */
  circle.stroke = getRandomRGB();
  circle.linewidth = 4;

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
