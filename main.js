noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(750,500);
    canvas.position(600,120);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("lightgreen");
    textSize(difference);
    fill("blue");
    text("Manan",noseX,noseY);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        console.log("NoseX = " + noseX + ",NoseY = " + noseY);
        difference = floor(leftWristX - rightWristX);
    }
}
