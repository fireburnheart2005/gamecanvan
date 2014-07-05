var canvas, context;

  // Initialization sequence.
  function init () {
    // Find the canvas element.
    canvas = document.getElementById('imageView');


    // Get the 2D canvas context.
    context = canvas.getContext('2d');


    // Attach the mousemove event handler.
    canvas.addEventListener('mousemove', ev_mousemove, false); // ev_mousemove-funktion bekommt das event gemeldet
  }

  // The mousemove event handler.
  var started = false;
  function ev_mousemove (ev) {
    var x, y;
    // Get the mouse position relative to the canvas element.
    if (_.isEmpty(ev.webkitMovementX)) { // Firefox
      x = ev.layerX - this.offsetLeft;
      y = ev.layerY - this.offsetTop;

    } else if (ev.offsetX || ev.offsetX == 0) { // Opera,chrome
      x = ev.offsetX;
      y = ev.offsetY;
    }
    // The event handler works like a drawing pencil which tracks the mouse
    // movements. We start drawing a path made up of lines.
    if (!started) {
      context.beginPath();
      context.moveTo(x, y);
      started = true;
    } else {
      context.lineTo(x, y);
      context.stroke();
    }
  }

  init();