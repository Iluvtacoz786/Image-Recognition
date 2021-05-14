Webcam.set({
    height:300,
    width:300,
    image_format:"png",
    png_quality:90
})
Webcam.attach("#camera");
function capture(){
    Webcam.snap(function(data_URI){
        document.getElementById("snapshot").innerHTML="<img src='"+data_URI+"' id='captured_image'>";
    })
}
console.log(ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SYklLe9bL/model.json", modelLoaded)
function modelLoaded(){
    console.log("Model is working");
}
function identify(){
    captured_image=document.getElementById("captured_image");
    classifier.classify(captured_image, gotResult);
}
function gotResult(error, result){
if(error){
    console.log(error)
}
else{
    console.log(result)
    var object=result[0].label;
    var accuracy=result[0].confidence;
    document.getElementById("object name").innerHTML=object;
    document.getElementById("accuracy").innerHTML=accuracy;

}
}
