class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    get unusedTokens() {
        const unused = this.tokens.filter(token => !token.dropped);
        return unused;
    }

    get activeToken() {
        return this.unusedTokens[0];
    }

    createTokens(amount) {
        const newTokens = []
        for (let i = 0; i < amount; i++) {
            newTokens.push(new Token(this, i));
        }
        return newTokens;
    }

    checkTokens() {
        return this.unusedTokens.length === 0 ? false : true;
    }
}