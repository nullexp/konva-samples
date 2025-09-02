let container = document.getElementById("konva-holder");

let stage = new Konva.Stage({
  container: container,
  width: container.offsetWidth,
  height: container.offsetHeight,
});

let layer = new Konva.Layer();
stage.add(layer);

let line = new Konva.Line({
  points: [5, 70, 140, 23, 250, 60, 300, 20],
  stroke: 'red',
  strokeWidth: 15,
  lineCap: 'round',
  lineJoin: 'round'
})
 
layer.add(line);
