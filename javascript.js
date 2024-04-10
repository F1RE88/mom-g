        // Get the button element
        const fullscreenBtn = document.getElementById('fullscreen-btn');

        // Add a click event listener to toggle fullscreen
        fullscreenBtn.addEventListener('click', () => {
            if (document.fullscreenElement) {
                // If already in fullscreen, exit fullscreen
                document.exitFullscreen();
            } else {
                // Otherwise, enter fullscreen
                document.documentElement.requestFullscreen();
            }
        });