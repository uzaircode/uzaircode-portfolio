console.log('working');

const blob = document.getElementById('blob');

document.body.onpointermove = (event) => {
  const { pageX, pageY } = event;

  blob.animate(
    { left: `${pageX}px`, top: `${pageY}px` },
    { duration: 3000, fill: 'forwards' }
  );
};
