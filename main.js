function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(1350,750);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function draw()
{
    background("#00FFFF");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}