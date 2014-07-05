/*var img = new Image();
img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}
img.src = "http://dl.dropbox.com/u/139992952/coffee.png";*/
var enemyY = 0;

var game = {
    setUpGame: function() {
        this.gameCanvas = document.getElementById("gameCanvas");
        this.planeImage = new Image();
        this.enemyImage = new Image();

        this.planeImage.src = "img/planes.png";
        this.enemyImage.src = "img/enemyPlane.png";
        this.gameCanvas.getContext("2d").clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height); //Xoa het trong canvas
        this.gameCanvas.getContext("2d").drawImage(this.planeImage, Math.random() * 200, Math.random() * 350, 40, 40);
        this.gameCanvas.getContext("2d").drawImage(this.enemyImage, 200, 150);
        this.gameCanvas.addEventListener("mousemove", this.redrawPlane);
        this.redrawPlaneEnemy();
    },
    ev_mousemove: function(ev, t) {
        var x, y;
        // Get the mouse position relative to the canvas element.
        if (_.isEmpty(ev.webkitMovementX)) { // Firefox
            x = ev.layerX - t.offsetLeft;
            y = ev.layerY - t.offsetTop;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera,chrome
            x = ev.offsetX;
            y = ev.offsetY;
        }
        return {
            'x': x,
            'y': y
        };
    },
    redrawPlane: function(mouseEvent) {
        mouseEvent.preventDefault();
        var self = this;
        result = game.ev_mousemove(mouseEvent, self); //get position mouse
        var x = result.x;
        var y = result.y;
        game.gameCanvas.getContext("2d").clearRect(0, 0, game.gameCanvas.width, game.gameCanvas.height); //Xoa het trong canvas
        game.gameCanvas.getContext("2d").drawImage(game.planeImage, x, y, 40, 40);
        game.gameCanvas.getContext("2d").drawImage(game.enemyImage, 200, enemyY);
    },
    redrawPlaneEnemy: function() {
        setTimeout(function() {
            window.requestAnimationFrame(game.redrawPlaneEnemy);
            enemyY = enemyY + 1;
            if (enemyY == gameCanvas.height)
                enemyY = 0;
        }, 1000 / 60);;
    },
    init: function() {
        this.setUpGame();
    }
};