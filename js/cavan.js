function getWindowHeight() // viewport, not document
{
    var windowHeight = 0;
    if (typeof(window.innerHeight) == 'number')
    {
        // DOM compliant, IE9+
        windowHeight = window.innerHeight;
    }
    else
    {
        // IE6-8 workaround, Note: document can be smaller than window
        var ieStrict = document.documentElement.clientHeight; // w/out DTD gives 0
        var ieQuirks = document.body.clientHeight; // w/DTD gives document height
        windowHeight = (ieStrict > 0) ? ieStrict : ieQuirks;
    }
    return windowHeight;
}
 
function getWindowWidth() // viewport, not document
{
    var windowWidth = 0;
    if (typeof(window.innerWidth) == 'number')
    {
        // DOM compliant, IE9+
        windowWidth = window.innerWidth;
    }
    else
    {
        // IE6-8 workaround, Note: document can be smaller than window
        var ieStrict = document.documentElement.clientWidth; // w/out DTD gives 0
        var ieQuirks = document.body.clientWidth; // w/DTD gives document width
        windowWidth = (ieStrict > 0) ? ieStrict : ieQuirks;
    }
    return windowWidth;
}
 
function getScrollTop()
{
    var scrollTop;
    if(typeof(window.pageYOffset) == 'number')
    {
        // DOM compliant, IE9+
        scrollTop = window.pageYOffset;
    }
    else
    {
        // IE6-8 workaround
        if(document.body && document.body.scrollTop)
        {
            // IE quirks mode
            scrollTop = document.body.scrollTop;
        }
        else if(document.documentElement && document.documentElement.scrollTop)
        {
            // IE6+ standards compliant mode
            scrollTop = document.documentElement.scrollTop;
        }
    }
    return scrollTop;
}
 
function getScrollLeft()
{
    var scrollLeft;
    if(typeof(window.pageXOffset) == 'number')
    {
        // DOM compliant, IE9+
        scrollLeft = window.pageXOffset;
    }
    else
    {
        // IE6-8 workaround
        if(document.body && document.body.scrollLeft)
        {
            // IE quirks mode
            scrollLeft = document.body.scrollLeft;
        }
        else if(document.documentElement && document.documentElement.scrollLeft)
        {
            // IE6+ standards compliant mode
            scrollLeft = document.documentElement.scrollLeft;
        }
    }
    return scrollLeft;
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
// Text
context.font = '10pt Calibri';
context.fillStyle = 'blue';
context.fillText('1', 0,10);
context.fillText('2', canvasWidth-10,10);
context.textAlign = 'right';
context.fillText('3', canvasWidth,canvasHeight);
context.textAlign = 'left';
context.fillText('4',0,canvasHeight);
context.fillText('0',canvasWidth/2,canvasHeight/2);
//Line
// Line 1-3
context.moveTo(0,0);//start point
context.lineTo(canvasWidth,canvasHeight);//end point

//Line 4-2
context.moveTo(0,canvasHeight);//start point
context.lineTo(canvasWidth,0);//end point 


context.moveTo(0,canvasHeight/2);//start point
context.lineTo(canvasWidth,canvasHeight/2);//end point 

context.moveTo(canvasWidth/2,0);
context.lineTo(canvasWidth/2,canvasHeight);//end point 

context.moveTo(0,canvasHeight/2);
context.lineTo(canvasWidth/2,0);//end point 

context.moveTo(0,canvasHeight/2);
context.lineTo(canvasWidth/2,0);//end point 

//Line (x/2;0),(x,y/2)
context.moveTo(canvasWidth/2,0);
context.lineTo(canvasWidth,canvasHeight/2);//end point 

//Line (x/2;0),(x,y/2)
context.moveTo(canvasWidth/2,0);
context.lineTo(canvasWidth,canvasHeight/2);//end point 

//Line (x;y/2),(x/2,y)
context.moveTo(canvasWidth,canvasHeight/2);
context.lineTo(canvasWidth/2,canvasHeight);//end point 

//Line (0;y/2),(x/2,y)
context.moveTo(0,canvasHeight/2);
context.lineTo(canvasWidth/2,canvasHeight);//end point 

//Center (x/2,y/2)

context.stroke();
context.beginPath();
context.arc(canvasWidth/2,canvasHeight/2,50,0, 2*Math.PI, false);
context.stroke();