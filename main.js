function preload (){

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
}
function draw(){

}
function take_snapshot(){
save("MyFirstImage.png"); 
}

function preload (){

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on ('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);

}
function take_snapshot(){
save("MyFirstImage.png"); 
}
function modelLoaded(){
    console.log("Posenet is loaded");

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose X = "+results[0].pose.nose.x);
        console.log("nose Y = "+results[0].pose.nose.y);
    }
}
