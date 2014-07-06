/*var img = new Image();
img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}
img.src = "http://dl.dropbox.com/u/139992952/coffee.png";*/
/*$( '#gameCanvas' ).on( "mousemove", function( event ) {
  console.log( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});*/
var enemyXPosition = [200, 300, 400, 500, 150, 100, 250, 350, 450, 550, 230, 490, 370, 435, 270];
var enemyYPosition = [0, -50, 20, 70, -20, 80, 30, 40, -40, -10, 30, 60, 80, 28, 56];
var planeX = 0;
var planeY = 0;
var game = {
    setUpGame: function(e, t) {
        //event = event || window.event;
        this.gameCanvas = document.getElementById("gameCanvas");
        this.planeImage = new Image();
        this.enemyImage = new Image();
        enemyY = 0;
        this.planeImage.src = "img/planes.png";
        this.enemyImage.src = "img/enemyPlane.png";
        this.gameCanvas.getContext("2d").clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height); //Xoa het trong canvas
        //var posX = $(t).offset().left,
        //    posY = $(t).offset().top;
        var posX = $(t).position().left,
            posY = $(t).position().top;
        this.gameCanvas.getContext("2d").drawImage(this.planeImage, e.pageX - posX, e.pageY - posY, 40, 40);
        // this.gameCanvas.getContext("2d").drawImage(this.enemyImage, 200, 150);
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
        planeX = result.x;
        planeY = result.y;
    },
    redrawPlaneEnemy: function() {
        setTimeout(function() {
            window.requestAnimationFrame(game.redrawPlaneEnemy);
            game.gameCanvas.getContext("2d").clearRect(0, 0, game.gameCanvas.width, game.gameCanvas.height); //Xoa het trong canvas
            if (planeX > 0 && planeY > 0)
                game.gameCanvas.getContext("2d").drawImage(game.planeImage, planeX, planeY, 40, 40);
            if (enemyY == gameCanvas.height) {
                enemyY = 0;
            }
            for (currentNumber = 0; currentNumber < enemyXPosition.length; currentNumber++) {
                enemyYPosition[currentNumber] = enemyYPosition[currentNumber] + 1; //plus x
                if (enemyYPosition[currentNumber] == gameCanvas.height)
                    enemyYPosition[currentNumber] = 0;
                game.gameCanvas.getContext("2d").drawImage(game.enemyImage, enemyXPosition[currentNumber], enemyYPosition[currentNumber]);
            }

        }, 1000 / 60);;
    },
    init: function() {
        this.setUpGame();
    }
};
$(function() {
    $('#gameCanvas').on('click', function(e) {
        game.setUpGame(e, this);
    })
})