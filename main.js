video="";
status1=""

function preload()
{
    video=createVideo("video.mp4");
    video.hide();
}

function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    objectdetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="status : Detecting Objects";
}

function modelLoaded()
{
    console.log("model loaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}