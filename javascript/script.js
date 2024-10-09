function openPopup() {
    var popup = window.open('', 'popup', 'width=1000,height=800');
    if (!popup) {
        alert('Popup blocked! Please allow popups for this site.');
        return;
    }

    var popupContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>I JUST PULLED UP INNA NEW MERCEDES</title><link rel="icon" href="https://sp4cew4lk4.net/assets/Untitled-1.png" type="image/png"><link rel="shortcut icon" href="https://sp4cew4lk4.net/assets/Untitled-1.png" type="image/png"></head><body style="background: url('https://sp4cew4lk4.net/assets/1star.gif') repeat;"><br><br><br><br><br><center><h1 style="color:red; font-size:100px; font-family:'Comic Sans MS';"><blink>HOL UP I JUST PULLED UP INNA NEW MERCEDES!</blink></h1><br><br><img src="https://sp4cew4lk4.net/assets/fire.gif"></center></body></html>`;
    popup.document.open();
    popup.document.write(popupContent);
    popup.document.close();
}

let isPlaying = false;

function toggleAudio() {
    var audio = document.getElementById('background-audio');
    if(isPlaying){
        audio.pause();
        isPlaying=false;
    }
    else{
        openPopup();
            audio.play();   
        isPlaying=true;
    }
}