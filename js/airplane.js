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
/*var enemyXPosition = [200, 300, 400, 500, 150, 100, 250, 350, 450, 550, 230, 490, 370, 435, 270];
var enemyYPosition = [0, -50, 20, 70, -20, 80, 30, 40, -40, -10, 30, 60, 80, 28, 56];*/
var enemyXPosition = [];
var enemyYPosition = [];
var planeX = 0;
var planeY = 0;
var ticksSurvived = 0;
var mostTicksSurvived = 0;
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
            if (Math.random() < 1 / 20) {
                enemyXPosition.push(Math.random() * 800);
                enemyYPosition.push(0);
            }
            currentNumber = 0;
            var planeW = 40;
            var planeH = 40;
            var enemyW = game.enemyImage.width;
            var enemyH = game.enemyImage.height;
            for (currentNumber = 0; currentNumber < enemyXPosition.length; currentNumber++) {
                enemyYPosition[currentNumber] = enemyYPosition[currentNumber] + 1; //plus y,lam cho may bay chuyen dong tang dan theo y
                if (enemyYPosition[currentNumber] == gameCanvas.height)
                    enemyYPosition[currentNumber] = 0;
                game.gameCanvas.getContext("2d").drawImage(game.enemyImage, enemyXPosition[currentNumber], enemyYPosition[currentNumber]);
                game.gameCanvas.getContext("2d").fillText("Score: " + ticksSurvived, 10, 20);
                if ((((planeX < enemyXPosition[currentNumber]) && (enemyXPosition[currentNumber] < planeX + planeW)) || ((planeX < enemyXPosition[currentNumber] + enemyW) && (enemyXPosition[currentNumber] + enemyW < planeX + planeW))) &&
                    (((planeY < enemyYPosition[currentNumber]) && (enemyYPosition[currentNumber] < planeY + planeH)) || ((planeY < enemyYPosition[currentNumber] + enemyH) && (enemyYPosition[currentNumber] + enemyH < planeY + planeH)))
                ) {
                    alert("Bi tan cong roi! Thoi gian song: " + ticksSurvived + " frames");
                    if (ticksSurvived > mostTicksSurvived) {
                        mostTicksSurvived = ticksSurvived;
                        alert("Ky luc moi duoc lap: " + mostTicksSurvived + " frames");
                    }
                    game.startNewGame();
                }
                ticksSurvived = ticksSurvived + 1;
            }
        }, 1000 / 60);;
    },
    startNewGame: function() {
        enemyXPosition = [];
        enemyYPosition = [];
        ticksSurvived = 0;
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