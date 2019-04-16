class Game {

    constructor(players) {
        this.board = new Board();
        this.players = this.createPlayers(players);
        this.ready = false;
    }

    get activePlayer() {
        const active = this.players.find(player => player.active);
        return active;
    }

    createPlayers(number) {
        const users = [];
        for (let i = 0; i < number; i++) {
            users.push(new Player(`Player ${1 + i}`, 1 + i, `hsl(${60 * i}, 90%, 60%)`, i === 0));
        }
        return users;
    }

    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer
            .activeToken
            .drawHTMLToken();
        this.ready = true;

    }

    handleKeydown(event) {
        if (this.ready) {
            if (event.key === 'ArrowRight') {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            }
            else if (event.key === 'ArrowLeft') {
                this.activePlayer.activeToken.moveLeft();
            }
            else if (event.key === "ArrowDown") {
                this.playToken();
            }
        }
    }

    playToken() {
        const activeToken = this.activePlayer.activeToken;
        const spaces = this.board.spaces[activeToken.columnLocation];
        let spaceTarget = null;

        for (let i = 0; i < spaces.length; i++) {
            if (spaces[i].token === null) {
                spaceTarget = spaces[i];
            }
        }

        if (spaceTarget !== null) {
            const theGame = this;
            this.ready = false;

            activeToken.drop(spaceTarget, function () {
                theGame.updateGameState(activeToken, spaceTarget);
            });
        }

        return spaceTarget;
    }

    checkForWin(space) {
        let win = false;
        win = this.iterate(space, 'nextVertical') ||
            this.iterate(space, 'nextHorizontal') ||
            this.iterate(space, 'nextDiagonalLeft') ||
            this.iterate(space, 'nextDiagonalRight');            
        return win;
    }

    iterate(target, param) {
        let num = 0;
        for (let i = 0; i < 7; i++) {
            const next = this.board[param](target);
            if (next && next.token && target.token.owner === next.token.owner) {
                num += 1;
                target = next;
            }
        }
        if (num === 4) {
            return true;
        }
        return false;
    }


    switchPlayers() {
        const players = this.players;
        for (let i = 0; i < players.length; i++) {
            if (players[i].active) {
                players[i].active = false;
                if (i < players.length - 1) {
                    players[i + 1].active = true;
                }
                else {
                    players[0].active = true;
                }

                return;
            }
        }
    }

    gameOver(message) {
        const gameOver = document.getElementById('game-over');
        gameOver.textContent = message;
        gameOver.style.display = 'block';
    }

    updateGameState(token, target) {
        target.mark(token);
        if (this.checkForWin(target)) {
            this.gameOver(`${target.owner.name} Won`);
            return;
        }
        this.switchPlayers();

        if (this.activePlayer.checkTokens()) {
            this.activePlayer
                .activeToken
                .drawHTMLToken();
            this.ready = true;
        }
        else {
            this.gameOver('Game Over');
        }
    }
}