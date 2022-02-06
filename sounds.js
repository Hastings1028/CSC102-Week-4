// plays the background sound

function playbackground() {
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
}

//creats the sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
//tell it to allow sound
    this.play = function() {
        this.sound.play();
    }

}    
    
