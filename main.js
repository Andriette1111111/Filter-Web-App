var noseX=0;
 var noseY=0;

function draw(){
image(video, 0, 0, 700,450);
image(mustache, noseX-48, noseY+10, 100,35);
image(glasses, noseX-100, noseY-80, 200,100);
}

function preload(){
    mustache= loadImage('https://i.postimg.cc/rsRHxLk7/Mustache.png');
    glasses= loadImage('https://i.postimg.cc/nrPGKdx5/Black-glasses.png');
}


function setup(){
    canvas= createCanvas(700,450);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(700,450)
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

 function modelLoaded(){
    console.log("PoseNet has been initialized");
 }

 function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);
    }

 }


function take_snapshot(){
    save('my_image.png');
}