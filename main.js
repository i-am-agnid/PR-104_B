Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality = 90
})
Camera = document.getElementById('Cam_div')
Webcam.attach(Camera)

function Capture_shot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='result_capture' src=' " + data_url + "'>"
    })
}

console.log(ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Zs13XpFTm/model.json',modelloaded)
function modelloaded(){
    console.log("ml5 has loaded successfully")
}