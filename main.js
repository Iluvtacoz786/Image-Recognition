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