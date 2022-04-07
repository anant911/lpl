img="";
status="";

function preload()
{
img=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(600,400);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status= Detecting objects";
} 

function draw()
{
image(img, 0,0, 600,400);
fill("#31e0c0");
text("Dog",250,70);
text("CAT",350,100)
stroke("#0e3318");
noFill();
rect(100,60,400,300);
rect(270,80,300,300)



}

function modelLoaded()
{
console.log("modelLoaded");
satus=true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);

    }
    console.log(results);
}