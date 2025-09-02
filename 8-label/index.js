let container = document.getElementById("konva-holder");

let stage = new Konva.Stage({
  container: container,
  width: container.offsetWidth,
  height: container.offsetHeight,
});

let layer = new Konva.Layer();
stage.add(layer);

let tooltip = new Konva.Label({
  x: 100,
  y: 100,
  draggable: true,
  dragBoundFunc: function (pos) {
    const stageW = stage.width();
    const stageH = stage.height();
  
    // Use the label's real bounding box (you can ignore shadow if you want)
    // const box = this.getClientRect({ skipShadow: true }); // if your Konva version supports it
    const box = this.getClientRect();
  
    // How far the bbox's top-left is from the node's position
    const dx = box.x - this.x();
    const dy = box.y - this.y();
  
    // Where the bbox would be if we accepted `pos`
    const nextBoxX = pos.x + dx;
    const nextBoxY = pos.y + dy;
  
    // Clamp the bbox into the stage
    const clampedBoxX = Math.max(0, Math.min(nextBoxX, stageW - box.width));
    const clampedBoxY = Math.max(0, Math.min(nextBoxY, stageH - box.height));
  
    // Convert back to node position
    return {
      x: clampedBoxX - dx,
      y: clampedBoxY - dy,
    };
  }
  
});

tooltip.add(
  new Konva.Tag({
    fill: "black",
    pointerDirection: "down",
    pointerWidth: 10,
    pointerHeight: 10,
    lineJoin: "round",
  })
);

tooltip.add(
  new Konva.Text({
    text: "Tooltip pointing down",
    fontFamily: "Calibri",
    fontSize: 18,
    padding: 5,
    fill: "white",
  })
);

tooltip.on("dragend", function (e) {
  console.log(e.target.x(), e.target.y());
});

layer.add(tooltip);
