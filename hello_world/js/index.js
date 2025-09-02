

const log = console.log;


const stage = new Konva.Stage({
    height: window.innerHeight,
    width:window.innerWidth,
    container: "konva-holder",
});

 
const layer = new Konva.Layer();
stage.add(layer);


const rect= new Konva.Rect({
    x:50,
    y:50,
    fill:"blue",
    height:100,
    width:200,  
    stroke:"orange",
    strokeWidth:8,
    cornerRadius:8,
    opacity:0.3,
    draggable:true,

});

layer.add(rect);

const circle= new Konva.Circle({
    x:100,
    y:100,
    radius:50,
    fill:"green",
    stroke:"red",
    strokeWidth:4,
    opacity:0.5,
    draggable:true,

});

layer.add(circle);



const triangle= new Konva.Line({
    x:200,
    y:200,
    stroke:"black",
    strokeWidth:16,
    points:[0,0,150,0,75,-90],
    draggable:true,
   lineCap:"round",
   lineJoin:"round",
   closed:true,
   fill:"red",
});


 

triangle.on("click",function(){
    log("Triangle clicked");
    triangle.fill("yellow");
});

 
layer.add(triangle);
