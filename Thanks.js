

function goToMain() {
    location.replace("MainPage.html");
}

function Thanks() {
    mySound = new sound("Thanks.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}
