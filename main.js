function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(600 , 300)
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet' , modelLoaded );
}

function modelLoaded() {
console.log("MODEL IS LOADED!!!");
}

function draw() {
image(video , 0 , 0 , 300 , 300);
classifier.classify(video , gotResult);
}

var prev_result = "";

function gotResult(error , results) {
if (error) {
  console.error(error);
}
else{
console.log(results);
if ((results[0].confidence > 0.5) && (prev_result != results[0].label)) {

 
document.getElementById("resultObjectName").innerHTML = results[0].label;
document.getElementById("resultObjectAccuracy").innerHTML = Math.round(results[0].confidence * 100) + "%" ;

}
}



}



