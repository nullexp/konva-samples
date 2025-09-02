

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
    rotation:90
  });

  const circle= new Konva.Circle({
    x:ellipse.x(),
    y: ellipse.y()-ellipse.radiusY()-ellipse.radiusX()-1,
    radius:ellipse.radiusY(),
    strokeWidth:4,
    stroke:"black",
    fill:"yellow"
  })

  const leftEye= new Konva.Circle({
    x:circle.x()-circle.radius()/2,
    y:circle.y()-circle.radius()/3  ,
    radius:circle.radius()/4,
    strokeWidth:4,
    stroke:"black",
    fill:"red"
  })
  const rightEye= new Konva.Circle({
    x:circle.x()+circle.radius()/2,
    y:circle.y()-circle.radius()/3  ,
    radius:circle.radius()/4,
    strokeWidth:4,
    stroke:"black",
    fill:"red"
  })

  const mouth= new Konva.Line({
    points:[circle.x()-circle.radius()/2,circle.y()+circle.radius()/2,circle.x()+circle.radius()/2,circle.y()+circle.radius()/2],
    strokeWidth:4,
    stroke:"black",
    fill:"red"
  })


let group = new Konva.Group({
    draggable:true
})

group.add(ellipse)
group.add(circle)
group.add(leftEye)
group.add(rightEye)
group.add(mouth)

layer.add(group)
