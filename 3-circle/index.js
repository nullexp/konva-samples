

let container = document.getElementById("konva-holder")

let stage = new Konva.Stage({
    container: container,
    width: container.offsetWidth,
    height: container.offsetHeight,
})

let layer = new Konva.Layer()
stage.add(layer)

let isDragging = false
function createCircle(x, y) {

    let circle = new Konva.Circle({
        x: x,
        y: y,
        radius: 1,
        fill: "red",
        stroke: "black",
        strokeWidth: 1,
        draggable: true
    })

    layer.add(circle)

    setInterval(function () {
        if (circle.radius() <= 25) {
            circle.radius(circle.radius() + 1)
        }
    }, 10)


    setInterval(function () {
        // simulate gravity
        let currentY = circle.y()
        if (currentY < stage.height() - 26) {
            circle.y(currentY + 1 + (Math.random() * 10))
        } else {
            circle.y(stage.height() - 26)
        }
    }, 10)

    circle.on("dragstart", function () {
        isDragging = true
    })

    circle.on("dragend", function () {
        console.log("dragend")
        isDragging = false
    })
}


document.addEventListener("mouseup", function (e) {
    console.log(e.clientX, e.clientY)
    if (isDragging) return
    createCircle(e.clientX-20, e.clientY);
})

