let container = document.getElementById("konva-holder");

let stage = new Konva.Stage({
  container: container,
  width: container.offsetWidth,
  height: container.offsetHeight,
});

let layer = new Konva.Layer();
stage.add(layer);

var currentLine = null;
var isDrawing = false
function createLine(x, y) {
  console.log('creating line at ',x,y)
  let line = new Konva.Line({
    points: [x, y,x,y],
    stroke: 'red',
    strokeWidth: 4,
    lineCap: 'round',
    lineJoin: 'round',
    closed: false,
    draggable: false
  })
  currentLine = line;
  layer.add(line);

}

function intersects(points) {
  // helper function to check orientation
  function orientation(p, q, r) {
    const val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
    if (val === 0) return 0; // colinear
    return (val > 0 ? 1 : 2); // clockwise or counterclockwise
  }

  // helper function to check if two segments intersect
  function doIntersect(p1, q1, p2, q2) {
    const o1 = orientation(p1, q1, p2);
    const o2 = orientation(p1, q1, q2);
    const o3 = orientation(p2, q2, p1);
    const o4 = orientation(p2, q2, q1);

    if (o1 !== o2 && o3 !== o4) return true; // general case

    // handle special colinear cases
    function onSegment(p, q, r) {
      return (
        q[0] <= Math.max(p[0], r[0]) &&
        q[0] >= Math.min(p[0], r[0]) &&
        q[1] <= Math.max(p[1], r[1]) &&
        q[1] >= Math.min(p[1], r[1])
      );
    }

    if (o1 === 0 && onSegment(p1, p2, q1)) return true;
    if (o2 === 0 && onSegment(p1, q2, q1)) return true;
    if (o3 === 0 && onSegment(p2, p1, q2)) return true;
    if (o4 === 0 && onSegment(p2, q1, q2)) return true;

    return false;
  }

  // convert points array [x1,y1, x2,y2, x3,y3,...] into segments
  const segments = [];
  for (let i = 0; i < points.length; i += 4) {
    segments.push([
      [points[i], points[i + 1]],
      [points[i + 2], points[i + 3]]
    ]);
  }

  // check each pair of segments
  for (let i = 0; i < segments.length; i++) {
    for (let j = i + 1; j < segments.length; j++) {
      if (doIntersect(segments[i][0], segments[i][1], segments[j][0], segments[j][1])) {
        return true;
      }
    }
  }

  return false;
}


// on user click
stage.on("click", function (e) {
  console.log("click",e);
  let pos = stage.getPointerPosition();
  isDrawing = true
  if (currentLine == null) {
    console.log('creating line')
    createLine(pos.x, pos.y);
    isDrawing=true
  } else {
    var points = currentLine.points();
    console.log(points);
    points.push(pos.x, pos.y);


    if (points.length > 6 && intersects(points)) {
      console.log("intersects");
      currentLine.closed(true);
      currentLine = null;
      isDrawing = false;
    }
  }
});

stage.on("mousemove", function (e) {
  
  if (isDrawing) {

    let pos = stage.getPointerPosition();
    // change last points of currentLine to pos
    var points = currentLine.points();
    points[points.length - 2] = pos.x;
    points[points.length - 1] = pos.y;
    currentLine.points(points);
    console.log(points)
  }
});

// const blob = new Konva.Line({
//   points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
//   fill: '#00D2FF',
//   stroke: 'black',
//   strokeWidth: 5,
//   closed: false,
//   tension: 0.3,
// });

