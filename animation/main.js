/** Animation example
*
* Edit by Sói Nhi dựa trên code của Nguyen Tai Hai (lấy ở bài viết http://vietgamedev.net/blog/171/html5-animating-sprites-c%C3%A1ch-t%E1%BA%A1o-%E1%BA%A3nh-%C4%91%E1%BB%99ng-tr%C3%AAn-game-canvas/)
*  (http://vietgamedev.net/soinhi/)                 
* Code được viết lại 1 cách ngắn gọi nhất cách dùng Sprite Sheet :D
*
**/

$(document).ready(function(){
					
	var canvas 	= $("#canvas")[0];
	var ctx		= canvas.getContext("2d");
	var w		= $("#canvas").width();
	var h		= $("#canvas").height();

	var sprW = 60;
	var sprH = 60;
	var currentID = 0;
	
	var spriteSheet = [
		{"x": 0, "y": 0, "w": sprW, "h":sprH},{"x": sprW, "y": 0, "w": sprW, "h":sprH},{"x": 2*sprW, "y": 0, "w": sprW, "h":sprH},{"x": 3*sprW, "y": 0, "w": sprW, "h":sprH},
		{"x": 0, "y": sprH, "w": sprW, "h":sprH}, {"x": sprW, "y": sprH, "w": sprW, "h":sprH}, {"x": 2*sprW, "y": sprH, "w": sprW, "h":sprH}, {"x": 3*sprW, "y": sprH, "w": sprW, "h":sprH},
		{"x": 0, "y": 2*sprH, "w": sprW, "h":sprH}, {"x": sprW, "y": 2*sprH, "w": sprW, "h":sprH}, {"x": 2*sprW, "y": 2*sprH, "w": sprW, "h":sprH}, {"x": 3*sprW, "y": 2*sprH, "w": sprW, "h":sprH},
		{"x": 0, "y": 3*sprH, "w": sprW, "h":sprH}, {"x": sprW, "y": 3*sprH, "w": sprW, "h":sprH}, {"x": 2*sprW, "y": 3*sprH, "w": sprW, "h":sprH}, {"x": 3*sprW, "y": 3*sprH, "w": sprW, "h":sprH},
		];
	
	var img;
	
	init();
	
	function init()
	{
		img = new Image();
		img.src = "sprite.png";
		
		if(typeof game_loop != "undefined")
			clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	function paint()
	{
		if (currentID < spriteSheet.length - 1 )
			currentID ++;
		else
			currentID = 0;
		
		ctx.clearRect(0,0, w, h);
		ctx.drawImage(img, spriteSheet[currentID].x, spriteSheet[currentID].y, spriteSheet[currentID].w, spriteSheet[currentID].h, 0, 0, sprW, sprH);	
	}
})