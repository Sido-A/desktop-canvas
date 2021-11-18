let x = 0;
let y = 0;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const resize_window = () => {
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
};

const reposition = (e) => {
  x = e.clientX - canvas.offsetLeft;
  y = e.clientY - canvas.offsetTop;
};

const fire_start = (event) => {
  canvas.addEventListener("mousemove", draw);
  reposition(event);
};

const stop_drawing = () => {
  canvas.removeEventListener("mousemove", draw);
};

const draw = (event) => {
  context.beginPath();
  context.moveTo(x, y);
  reposition(event);
  context.lineTo(x, y);
  context.stroke();
};

canvas.addEventListener("mousedown", fire_start);
canvas.addEventListener("mouseup", stop_drawing);
window.addEventListener("resize", resize_window);
resize_window();
