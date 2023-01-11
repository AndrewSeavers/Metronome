// metronome
console.log("Setting up metronome");
const btnDecreaseBPM = document.getElementByID("btnDecreaseBPM");
const btnIncreaseBPM = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");
var bpm = 60;

bpmInput.onchange = function (e) {
    bpm = parseInt(bpmInput.value);
    if (isNaN(bpm)) {
        bpm = 50;
    }
    console.log(bpm);
}

btnDecreaseBPM.onclick = function (e) {
    console.log("Decrease BPM");
    bpm -= 5;
}


console.log("Setting up metronome");
