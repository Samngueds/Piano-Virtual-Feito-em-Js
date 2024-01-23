const pianokeys = document.querySelectorAll(".piano-keys .key");
const Volumeslider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check")

let  mapedkeys = []

let  audio = new Audio("tunes/a.wav")

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`)
    clickedkey.classList.add("active")
    setTimeout(()=> {
        clickedkey.classList.remove("active");
    }, 150)
};

pianokeys.forEach((key)=>{
    key.addEventListener("click",() => playTune (key.dataset.key));
    mapedkeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if(mapedkeys.includes(e.key)) {
        playTune(e.key);
    }
});


const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showhidekeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"))
}

Volumeslider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showhidekeys)