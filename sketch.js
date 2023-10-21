let posx, posy, vel, diam, rad, esp, margen, piso;
let pelotaColor;
let pisoColor;



function setup() {
  createCanvas(windowWidth, windowHeight);
  posx = windowWidth / 2;
  posy = windowHeight * 0.2;
  rectMode(CENTER);
  diam = random(10, 50);
  rad = diam / 2;
  esp = 50;
  margen = 40;
  piso = windowHeight - margen - esp / 2;
  vel = 0;
  acel = 0.98;
  pelotaColor = color(100, 30, 70);
  pisoColor = color(100, 50, 0)
  // frameRate(3);



}
function draw() {
  background(255, 200, 150);

  actualizar();

  noStroke();
  fill(pelotaColor);
  circle(posx, posy, 20);
  fill(pisoColor);
  rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);


}


function actualizar() {
  vel += acel;
  posy += vel;

  if (posy >= piso - rad) {
    print('ya');
    vel *= -1;
    posy += vel;

    pelotaColor = color(random(200), random(300), random(200));
    pisoColor = color(random(200), random(100), random(150));
  }

}






