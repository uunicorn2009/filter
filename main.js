noseX=0;
noseY=0;
function preload (){
mustache_img=loadImage("https://i.postimg.cc/ydjv4n7F/images-1-removebg-preview-2.png");
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
image(mustache_img,noseX-15,noseY+15,30,30);

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
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose X = "+noseX);
        console.log("nose Y = "+noseY);
    }
}
