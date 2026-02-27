function playSound(soundId) {
    const audio = document.getElementById(soundId);
    
    if (audio) {
        // Reset audio to start so it can be played rapidly
        audio.currentTime = 0;
        audio.play();
        
        // Optional: Add a console log for debugging
        console.log(`Playing: ${soundId}`);
    } else {
        console.error(`Audio file for ${soundId} not found.`);
    }
}
