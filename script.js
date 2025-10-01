// JavaScript zum Abspielen des Sounds und Vergrößern des Bildes
        document.getElementById('imageButton').addEventListener('click', function() {
            var audio = document.getElementById('audioElement');
            audio.play();
            
            // Bild vergrößern
            this.classList.add('clicked');

            // Optional: Klasse nach einer kurzen Zeit wieder entfernen, um den Effekt rückgängig zu machen
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);  // 300 Millisekunden
        });
