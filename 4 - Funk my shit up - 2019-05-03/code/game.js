window.onload = function() {


    const funk1 = new Audio('assets/Funk1-loop.mp3');
    funk1.addEventListener('timeupdate', function () {
        if (this.currentTime > this.duration - .185) {
            this.currentTime = 0
            this.play()
        }
    }, false);

    const funk2 = new Audio('assets/Funk2-loop.mp3');
    funk2.addEventListener('timeupdate', function () {
        if (this.currentTime > this.duration - .22) {
            this.currentTime = 0
            this.play()
        }
    }, false);

    const snare = new Audio('assets/Snare.mp3');
    snare.addEventListener("ended", () => body.classList.remove('snare'));
    const crash = new Audio('assets/KickAndCrash.mp3');
    crash.addEventListener("ended", () => body.classList.remove('crash'));
    const body = document.body;

    const playSnare = () => {
        snare.currentTime = 0;
        body.classList.remove('crash');
        body.classList.add('snare');
        snare.play();
    }

    const playCrash = () => {
        crash.currentTime = 0;
        body.classList.remove('snare');
        body.classList.add('crash');
        crash.play();
    }

    document.addEventListener('keydown', (e) => {
        switch (e.code) {
            case "Space":
                playSnare();
                break;
            case "Enter":
                playCrash();
                break;
        }
    });

    window.play1 = () => {
        funk1.play().catch(e => {
            console.log(e);
        });
    }

    window.play2 = () => {
        funk2.play().catch(e => {
            console.log(e);
        });
    }

    window.stop = () => {
        funk1.pause();
        funk2.pause();
    }
}