const tower = document.querySelector('.tower');
const scene = document.querySelector('.viewport');

function animate() {
  const t = performance.now() / 1000;
  const bob = Math.sin(t * 1.8) * 3;
  const glow = 0.8 + Math.sin(t * 2.5) * 0.15;

  if (tower) {
    tower.style.transform = `translate(-50%, calc(-50% + ${bob}px))`;
  }

  if (scene) {
    scene.style.filter = `drop-shadow(0 0 ${16 + glow * 12}px rgba(146, 196, 222, 0.08))`;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
