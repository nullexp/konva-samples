

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
  radiusX: 220,
  radiusY: 150,
  stroke: 'black',
  strokeWidth: 4,
  draggable: true

});



const imageObj = new Image();
imageObj.src = 'https://konvajs.org/assets/yoda.jpg';
let yoda = null
imageObj.onload = function () {

  //  yoda = new Konva.Image({
  //   width: 100,
  //   height: 100,
  //   x: stage.width() / 2,
  //   y: stage.height() / 2,
  //   image: imageObj,
  //   draggable:true
  // })
  console.log(imageObj.width,imageObj.height)
  // layer.add(yoda)
  ellipse.fillPatternImage(imageObj)
  ellipse.fillPatternRepeat('repeat');
  ellipse.fillPatternOffsetX(100)
  ellipse.fillPatternOffsetY(100)
  ellipse.fillPatternScale({
    x: 1,
    y: 1
  });


}



layer.add(ellipse)

