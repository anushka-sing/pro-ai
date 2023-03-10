status ="";
video="";
input ="";
function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createVideo();
    video.size(600,600);
    video.hide();
}
function start(){
  objectDetector= ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="status : Object Detected";
   input = document.getElementById("object_name").value ;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1);
}
function draw(){
    image(video,30,30,600,600);
}