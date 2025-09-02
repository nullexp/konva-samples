

let container = document.getElementById("konva-holder")

let stage = new Konva.Stage({
    container: container,
    width: container.offsetWidth,
    height: container.offsetHeight,
})

let layer = new Konva.Layer()
stage.add(layer)

 
const ellipse = new Konva.Ellipse({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radiusX: 100,
    radiusY: 50,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
    draggable:true
  });

layer.add(ellipse)