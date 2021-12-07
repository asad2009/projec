var pridiction1="";
var predection2="";
Webcam.set({ 
    width: 350,
    height:350,
    image_format:'png',
    png_quality: 90

});
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML='<img id="display" src="'+data_uri+'">';
    });
}
var classifier=ml5.imageClassifier('',modelLoaded);
function modelLoaded(){
    console.log();
}
function speak(){
    var synth=window.speechSynthesis;
    speakData1="the first predection is "+pridiction1;
    speakData2="the second prediction is "+pridiction2;
    var utterthis=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utterthis);