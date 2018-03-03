class Enemy extends GameImage {
    constructor(game) {
        const type = randomBetween(0, 4)
        const name = `enemy${type}`
        super(game, name)

        this.init()
    }

    init() {
        this.speed = randomBetween(1, 3)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
        this.cooldown = 0
        this.bullets = []
    }

    fire() {
        if(this.cooldown === 0) {
            this.cooldown = 120
            const b = Bullet.new(this.game)

            const x = this.x + this.w / 2
            const y = this.y
            b.x = x
            b.y = y
            b.speed = -5

            this.scene.addElement(b)
            // this.bullets.push(b)
            this.scene.enemyBullets.push(b)
        }
    }
    update() {
        this.y += this.speed

        if(this.y > 600) {
            this.init()
        }
        if(this.cooldown > 0) {
            this.cooldown --
        }

        this.fire()
    }
}
