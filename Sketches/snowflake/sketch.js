
let points = [];

function setup() {
  // the size of the canvas, sets the length and height
  createCanvas(480, 480);
  points = generateSnowflake(24, height/2);
}

function draw() {
  // sets the background color
  background(50);
  fill(255);
  noStroke();
  drawPoints(points, width/2, height/2);
}

function drawPoints(points, x, y) {
  beginShape();
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    vertex(x + point.x, y + point.y);
  }
  endShape(CLOSE);
}

function generateSnowflake(numSegments, radius) {
  const segmentPoints = pointsForSegment(numSegments, radius);
  return snowflakeFromSegment(numSegments, segmentPoints);
}

// creates the points for the segment, "numSegments" sets the number of segments, "radius" sets the maximum radius of the snowflake
function pointsForSegment(numSegments, radius) {
  // generates a random number of segments between 4 and 10
  const numPointsInSeg = int(random(4, 10));
  // an array that holds all of the points for the segment
  const segmentPoints = [];
  
  // calculates the angle for the segment
  const segmentAngle = PI/numSegments;
    // Generate random points in half of the segment
  // These are stored in polar coordinates
  for (let i = 0; i < numPointsInSeg; i++) {
    const a = random(segmentAngle);
    const r = random(radius);

    segmentPoints.push(createVector(a, r));
  }
  
  for (let i = numPointsInSeg - 1; i >= 0; i--) {
    const point = segmentPoints[i];
    segmentPoints.push(createVector(-point.x, point.y));
  }
  return segmentPoints;
}
// Takes the points that make up one segment
// and returns a list of points that make up an
// entire snowflake (in cartesian coordinates!)
function snowflakeFromSegment(numSegments, segmentPoints) {
    const points = [];
    for(let i = 0; i < numSegments; i ++) {
      const ang = i * TWO_PI/numSegments;
      
      for(let j = 0; j < segmentPoints.length; j ++) {
        const point = segmentPoints[j];   
        const x = cos(point.x + ang) * point.y;
        const y = sin(point.x + ang) * point.y;
        
        points.push(createVector(x, y));
      }
    }
    
    return points;
  }

function mouseReleased() {
  points = generateSnowflake(6, height/2);
}