

const player = {
    bg: new Audio('/audio/bg.mp3'),
    move: undefined,
    rotation: undefined,
    score: undefined,
    fail: undefined,
}

player.bg.volume = 0.1
player.bg.loop = true

const audioContext = {
    playBackgroundMusic: () => {
        // player.bg.play();
    },

    pauseBackgroundMusic: () => {
        // player.bg.pause();
    },

    playMoveMusic: () => {
        if (!player.move) {
            player.move = new Audio('/audio/move.mp3');
            player.move.volume = 1.0;
            player.move.loop = false;
        }
        if(player.move.isPlaying) {
            player.move.pause();
        }
        
        player.move.currentTime = 0;
        player.move.load();
        player.move.play();
    },

    playRotationMusic: () => {
        if (!player.rotation) {
            player.rotation = new Audio('/audio/rotation.mp3');
            player.rotation.volume = 1;
            player.rotation.loop = false;
        }

        if(player.rotation.isPlaying) {
            player.rotation.pause();
        }

        player.rotation.currentTime = 0;
        player.rotation.load();
        player.rotation.play();
    },

    playScoreMusic: () => {
        if (!player.score) {
            player.score = new Audio('/audio/score.mp3');
            player.score.volume = 1;
            player.score.loop = false;
        }

        if(player.score.isPlaying) {
            player.score.pause();
        }

        player.score.currentTime = 0;
        player.score.load();
        player.score.play();
    },

    playFailMusic: () => {
        if (!player.fail) {
            player.fail = new Audio('/audio/fail.mp3');
            player.fail.volume = 1.0;
            player.fail.loop = false;
        }

        if(player.fail.isPlaying) {
            player.fail.pause();
        }

        player.fail.currentTime = 0;
        player.fail.load();
        player.fail.play();
    },
}

export default audioContext;