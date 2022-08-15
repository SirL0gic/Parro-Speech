let text = document.querySelector("#text");
let speak_button = document.querySelector("#speak-button")

let speaknow = () => {
    var speech = new SpeechSynthesisUtterance();
    speech.rate = 1;
    speech.pitch = -2;
    speech.volume = 1;
    speech.lang = "en-US";
    speech.voice = speechSynthesis.getVoices()[0];
    speech.text = text.value;
    speechSynthesis.speak(speech);

};

speak_button.onclick = function(){
    speaknow();
};