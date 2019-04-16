class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    createSpaces() {
        const boardSpaces = [];
        
        for (let i = 0; i < this.columns; i++) {
            const column = [];

            for(let j = 0; j < this.rows; j++) {
                column.push(new Space(i, j));
            }

            boardSpaces.push(column);
        }
        return boardSpaces;
    }

    drawHTMLBoard() {
        for (let i = 0; i < this.spaces.length; i++) {
            for(let j = 0; j < this.spaces[i].length; j++) {
                this.spaces[i][j].drawSVGSpace();
            }
        }
    }

    nextVertical(space) {
        const column = this.spaces[space.x];
        if (column) {
            return column[space.y + 1];
        }
        return column;
    }

    nextHorizontal(space) {
        const column = this.spaces[space.x - 1];
        if (column) {
            return column[space.y];
        }
        return column;
    }

    nextDiagonalLeft(space) {
        const column = this.spaces[space.x - 1];
        if (column) {
            return column[space.y + 1];
        }
        return column;
    }
    
    nextDiagonalRight(space) {
        const column = this.spaces[space.x + 1];
        if (column) {
            return column[space.y + 1];
        }
        return column;
    }
}