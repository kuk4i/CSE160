function main() {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawVector(v, color, ctx) {
  console.log("Drawing vector:", v.elements[0], v.elements[1]);
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function handleDrawEvent() {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var x1 = parseFloat(document.getElementById('x-coord1').value || 0);
  var y1 = parseFloat(document.getElementById('y-coord1').value || 0);
  var x2 = parseFloat(document.getElementById('x-coord2').value || 0);
  var y2 = parseFloat(document.getElementById('y-coord2').value || 0);

  var v1 = new Vector3([x1, y1, 0]);
  var v2 = new Vector3([x2, y2, 0]);

  drawVector(v1, 'red', ctx);  // Draw v1 in red
  drawVector(v2, 'blue', ctx);  // Draw v2 in blue
}

function areaTriangle(v1, v2) {
  // Calculate the cross product of v1 and v2
  let crossProduct = Vector3.cross(v1, v2);
  
  // Find the magnitude of the resulting vector
  let magnitude = crossProduct.magnitude();
  
  // Divide the magnitude by 2 to get the area of the triangle
  let area = magnitude / 2;
  
  return area;
}

function angleBetween(v1, v2) {
  // Calculate the dot product of v1 and v2
  let dotProduct = Vector3.dot(v1, v2);
  
  // Find the magnitudes of v1 and v2
  let magnitude1 = v1.magnitude();
  let magnitude2 = v2.magnitude();
  
  // Use the dot product formula to find the cosine of the angle
  let cosAngle = dotProduct / (magnitude1 * magnitude2);
  
  // Use the inverse cosine function to find the angle in radians
  let angleRadians = Math.acos(cosAngle);
  
  // Convert the angle from radians to degrees
  let angleDegrees = angleRadians * (180 / Math.PI);
  
  return angleDegrees;
}

// asg0.js

function handleDrawOperationEvent() {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var x1 = parseFloat(document.getElementById('x-coord1').value || 0);
  var y1 = parseFloat(document.getElementById('y-coord1').value || 0);
  var x2 = parseFloat(document.getElementById('x-coord2').value || 0);
  var y2 = parseFloat(document.getElementById('y-coord2').value || 0);
  var operation = document.getElementById('operation').value;

  var v1 = new Vector3([x1, y1, 0]);
  var v2 = new Vector3([x2, y2, 0]);
  var v3, v4;

  drawVector(v1, 'red', ctx);
  drawVector(v2, 'blue', ctx);

  switch (operation) {
    case "add":
      v3 = v1.add(v2);
      drawVector(v3, 'green', ctx);
      break;
    case "sub":
      v3 = v1.sub(v2);
      drawVector(v3, 'green', ctx);
      break;
    case "mul":
      var scalar = parseFloat(document.getElementById('scalar').value || 0);
      v3 = v1.mul(scalar);
      v4 = v2.mul(scalar);
      drawVector(v3, 'green', ctx);
      drawVector(v4, 'green', ctx);
      break;
    case "div":
      var scalar = parseFloat(document.getElementById('scalar').value || 1); // default to 1 to avoid division by zero
      v3 = v1.div(scalar);
      v4 = v2.div(scalar);
      drawVector(v3, 'green', ctx);
      drawVector(v4, 'green', ctx);
      break;
    case "mag":
      console.log("Magnitude of v1:", v1.magnitude());
      console.log("Magnitude of v2:", v2.magnitude());
      break;
    case "norm":
      v3 = v1.normalize();
      v4 = v2.normalize();
      drawVector(v3, 'green', ctx);
      drawVector(v4, 'green', ctx);
      break;
    case "area":
      let area = areaTriangle(v1, v2);
      console.log("Area of the triangle:", area);
    break;
    case "angle":
      let angle = angleBetween(v1, v2);
      console.log("Angle between v1 and v2:", angle, "degrees");
    break;
  }
}


window.onload = main;
