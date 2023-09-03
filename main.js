import './app/scss/style.scss';

console.log('working');

const blob = document.getElementById('blob');

document.body.onpointermove = (event) => {
  const { pageX, pageY } = event;

  blob.animate(
    { left: `${pageX}px`, top: `${pageY}px` },
    { duration: 2500, fill: 'forwards' }
  );
};

document.getElementById('projects').onmousemove = (e) => {
  for (const card of document.getElementsByClassName('card')) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }
};
