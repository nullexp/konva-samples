
const stage = new Konva.Stage({
    container: 'konva-holder',
    width: 500,
    height: 500
})

const layer = new Konva.Layer({
    draggable: true,

})
stage.add(layer)

const arc = new Konva.Arc({
    x: 21,
    y: 21,
    innerRadius: 20,
    outerRadius: 20,
    angle: 360,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,

})

layer.add(arc)