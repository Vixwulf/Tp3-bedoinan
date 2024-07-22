let pierna = 40;
let brazos = 40;
let pasos = 0;
let fondo;
let start;
let estado = 0;


function preload() {
  // Load the images before the setup() function
  fondo = loadImage('fondo.gif');
}



function setup() {
  createCanvas(600, 600);
}
// podes mover todo el personaje a un esquina izquierda y que sea mas pequeño 
function draw() {
  if (estado === 0) {
    image(fondo, 0, 0, width, height);
  } else {
    image(fondo, 0, 0, width, height);
  }

  // Cabeza del personaje
  ellipse(200 + pasos, 150, 50, 50);

  // Brazos del personaje
  line(200 + pasos, 250, (200 - pierna)+ pasos, 200);
  line(200 + pasos, 250, (200 + pierna) + pasos, 200);

  // Piernas del personaje
  line(200 + pasos, 300, (200 - brazos) +pasos, 350 );
  line(200 + pasos, 300, (200 + brazos)+ pasos, 350 );
}
function moverPiernasYBrazos() {
  if (pierna < 50 && brazos < 50) {
    pierna += 10;
    brazos += 10;
    pasos += 25;
  } else {
    pierna = 40;
    brazos = 40;
    pasos -= 30;
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pasos -= 20;
    moverPiernasYBrazos();
  } else if (keyCode === RIGHT_ARROW) {
    pasos += 30;
    moverPiernasYBrazos();
  }
}
