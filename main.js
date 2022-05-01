const cursor = document.querySelector('.cursor');
const images = document.querySelectorAll('.imgs__img');

const easeFactor = 0.15;
let position = { x: 0, y: 0 };
let delta = { x: 0, y: 0 };

const setPostion = function (e) {
  position.x = e.clientX;
  position.y = e.clientY;

  delta.x += (position.x - delta.x) * easeFactor;
  delta.y += (position.y - delta.y) * easeFactor;

  cursor.style.top = delta.y - cursor.offsetHeight / 2 + 'px';
  cursor.style.left = delta.x - cursor.offsetWidth / 2 + 'px';

  images[2].style.transform = `translate3d(${position.x * -0.02}px, ${position.y * -0.02}px, 0)`;
  images[3].style.transform = `translate3d(${position.x * -0.03}px, ${position.y * -0.03}px, 0)`;
  images[4].style.transform = `translate3d(${position.x * -0.04}px, ${position.y * -0.04}px, 0)`;
  images[5].style.transform = `translate3d(${position.x * -0.05}px, ${position.y * -0.05}px, 0)`;
  images[6].style.transform = `translate3d(${position.x * -0.02}px, ${position.y * -0.02}px, 0)`;
  images[7].style.transform = `translate3d(${position.x * -0.01}px, ${position.y * -0.01}px, 0)`;
  images[8].style.transform = `translate3d(${position.x * -0.01}px, ${position.y * -0.01}px, 0)`;
};

window.addEventListener('mousemove', setPostion);
