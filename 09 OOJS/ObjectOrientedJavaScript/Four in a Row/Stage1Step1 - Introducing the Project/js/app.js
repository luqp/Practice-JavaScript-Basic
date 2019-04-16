const button = document.getElementById('begin-game');
const game = new Game(2);

button.addEventListener('click', () => {
    game.startGame();
    button.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
    document.addEventListener('keyup', (e) => {
        game.handleKeydown(e);
    });
});

