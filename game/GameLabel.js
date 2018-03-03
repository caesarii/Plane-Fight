class GameLabel extends GameObject {
    constructor(game) {
        super(game)
        this.game = game
        this.score = 0
        // this.text = `分数： ${this.score}`
        this.context = game.context
    }


    draw() {
        var score = this.score
        this.context.fillStyle = 'orange'
        this.context.fillText(`分数： ${score}`, 10, 580)
    }

    update() {
        this.score = this.scene.score
    }
}
