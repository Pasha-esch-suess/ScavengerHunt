        // JavaScript zum Abspielen des Sounds und Vergrößern des Bildes
        document.getElementById('imageButton').addEventListener('click', function() {
            var audio = document.getElementById('audioElement');
            audio.play();
            
            // Bild vergrößern
            this.classList.add('clicked');

               });
