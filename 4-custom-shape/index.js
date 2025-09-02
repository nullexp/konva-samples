

let container = document.getElementById("konva-holder")

let stage = new Konva.Stage({
    container: container,
    width: container.offsetWidth,
    height: container.offsetHeight,
})

let layer = new Konva.Layer()
stage.add(layer)

 
let shape = new Konva.Shape({
    x:0,
    y:0,
    stroke: "black",
    strokeWidth: 1,
    draggable: true,
    sceneFunc: function(context, shape) {
        // Wall
        context.strokeRect(75, 140, 150, 110);
        // Door
        context.fillRect(130, 190, 40, 60);
        // Roof
        context.beginPath();
        context.moveTo(50, 140);
        context.lineTo(150, 60);
        context.lineTo(250, 140);
        context.closePath();
        context.stroke();
    },
    hitFunc: function(context, shape) {
             // Wall
             context.strokeRect(75, 140, 150, 110);

             // Door
             context.fillRect(130, 190, 40, 60);

             // Roof
             context.beginPath();
             context.moveTo(50, 140);
             context.lineTo(150, 60);
             context.lineTo(250, 140);
             context.closePath();
             context.fillStrokeShape(shape);
    }
})

layer.add(shape)