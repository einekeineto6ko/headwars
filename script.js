let game = {
    player: null,
    enemy: null,
    projectiles: [],

    canvas: null,
    context: null,

    startGame: function() {
        this.canvas = document.getElementById("gameCanvas");
        this.context = this.canvas.getContext("2d");

        this.player = new Player(this, "assets/player/images/head.jpg",
                                 this.canvas.width / 2 - 40, this.canvas.height - 100);
        this.enemy = new Enemy(this, "assets/enemies/emil-ivanov/images/head.jpg",
                               this.canvas.width / 2 - 40, 0);

        this.interval = setInterval(this.updateCanvas, 20);
    },

    updateCanvas: function() {
        game.clearCanvas();
        game.drawCanvas();
    },

    drawCanvas: function() {
        this.player.action();
        this.player.draw();

        this.enemy.action();
        this.enemy.draw();

        this.projectiles.forEach((projectile) => {
            projectile.action();
            projectile.draw();
        })
    },

    removeProjectile: function(projectile) {
        var index = this.projectiles.indexOf(projectile);
        if (index > -1) {
            this.projectiles.splice(index, 1);
        }
    },

    clearCanvas: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stopGame: function() {
        clearInterval(this.interval);
    }
}
