function preload(){

}
function setup(){
    canvas=createCanvas(450,400);
    canvas.center()
    video=createCapture(VIDEO)
    video.size(370,400);
    video.hide()
    getTint="";
}

function draw(){
    image(video,0,0,450,400);
    getTint=document.getElementById("color_tint").value;
    tint(getTint)
    
}

function take_snapshot(){
    save("snapshot_1.jpeg")
}

