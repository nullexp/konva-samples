// Arrow
const container = document.getElementById("konva-holder");


const stage = new Konva.Stage({
    container: `konva-holder`,
    width: container.offsetWidth,
    height: container.offsetHeight

})

window.addEventListener("resize", () => {
    stage.width(container.offsetWidth);
    stage.height(container.offsetHeight);
});

const layer = new Konva.Layer()
stage.add(layer)

let drawing =false
let currentArrow = null


function createArrow() { 

    const pos = stage.getPointerPosition();
    const arrow = new Konva.Arrow({
        x: 0,
        y: 0,
        Points: [pos.x, pos.y, pos.x, pos.y],
        pointerWidth: 10,
        pointerHeight: 10,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 2,
        draggable: true,
        onDragEnd: (e) => {
            console.log(e.target.points());
        }
    })
    
     
    arrow.on("dragend", function (e) {
        const points = arrow.points(); // relative to the arrow's own origin
        const pos = arrow.position();  // the arrow's offset on the stage
      
        const x1 = points[0] + pos.x;
        const y1 = points[1] + pos.y;
        const x2 = points[2] + pos.x;
        const y2 = points[3] + pos.y;
      
        console.log("Start:", x1, y1, "End:", x2, y2);
      
        // update points in absolute coordinates
        arrow.points([x1, y1, x2, y2]);
      
        // reset position so future drags don't double-offset
        arrow.position({ x: 0, y: 0 });
      
        // redraw
        arrow.getLayer().batchDraw();
    });
      
    
    layer.add(arrow)   
    return arrow
}
 

stage.on("mousemove", () => {
    if (drawing && currentArrow) {
        const pos = stage.getPointerPosition();
        var points = currentArrow.points();
        currentArrow.points([points[0], points[1], pos.x, pos.y])
    }
});

stage.on("click", () => {

    if (drawing) {
        currentArrow=null
        drawing=false
    } else {
        currentArrow = createArrow()
        drawing = true
    }
     

});


