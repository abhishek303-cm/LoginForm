const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let angle = 0;
let particles = [];

function Particle(angle, radius, color) {
  this.angle = angle;
  this.radius = radius;
  this.x = centerX + radius * Math.cos(angle);
  this.y = centerY + radius * Math.sin(angle);
  this.color = color;
}

function getColor(radius) {
  if (radius < 50) return "red";
  if (radius < 100) return "orange";
  if (radius < 200) return "yellow";
  return "white";
}

// Create spiral particles
for (let i = 0; i < 1000; i++) {
  let a = i * 0.1;
  let r = 1.5 * a;
  particles.push(new Particle(a, r, getColor(r)));
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.angle += 0.002;
    p.x = centerX + p.radius * Math.cos(p.angle);
    p.y = centerY + p.radius * Math.sin(p.angle);

    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
