const pianoKeys =document.querySelectorAll(".piano_keys .key")
const volumeSlider=document.querySelector(".volume input")
const keyCheck=document.querySelector(".keys_checkbox input")

let allKeysAudio =[],
audio= new Audio("Audios/a.wav")

const playTune =(key)=>{
    audio.src=`Audios/${key}.wav`
    audio.play()
    // console.log(allKeysAudio);
    

    const clickedKey= document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach(key =>{
    allKeysAudio.push(key.dataset.key)
    key.addEventListener("click",()=> playTune(key.dataset.key));
    // console.log(key.dataset.key);
        
});

const pressedKey=(e)=>{
    if(allKeysAudio.includes(e.key))playTune(e.key);
    // console.log(e);
}

const handleVolume=(e)=>{
    audio.volume=e.target.value
}

const showhideKeys=()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

keyCheck.addEventListener("click",showhideKeys)
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey);
