const $canvas = document.getElementById('airpods-pro');
const context = $canvas.getContext('2d');

$canvas.width = 1440;
$canvas.height = 820;

const frameCount = 64;
const images = [];
for (let i = 0; i <= frameCount; i++) {
    const imagePath = `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/`;
    const imageName = `${i.toString().padStart(4, '0')}.png`;
    const img = new Image();
    img.src = `${imagePath}/${imageName}`;
    images.push(img);
}

const airpods = { frame: 0 };
const promises = images.map((image) => {
    return new Promise((resolve) => image.onload = resolve);

});

const renderImage = () => {
    context.clearRect(0, 0, $canvas.width, $canvas.height);
    context.drawImage(images[airpods.frame], 0, 0);
}

Promise 
.all(promises)
.then(() => {
    renderImage();
    gsap.to(airpods, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
            scrub: 0.5,
        },
        onUpdate: renderImage,
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento div
    var miDiv = document.getElementById("fixed");

    // Obtener la posición original del div
    var divOriginalTop = miDiv.offsetTop;

    // Función para manejar el evento de scroll
    function handleScroll() {
      // Obtener la posición actual del scroll
      var scrollPos = window.scrollY;

      // Comprobar si el scroll está por encima de cierto umbral
      if (scrollPos > divOriginalTop - 50) {
        // Si es así, agregar la clase 'fixed' al div
        miDiv.classList.add("casa");
      } else {
        // De lo contrario, quitar la clase 'fixed'
        miDiv.classList.remove("casa");
      }
    }

    // Asociar la función handleScroll al evento de scroll
    window.addEventListener("scroll", handleScroll);
  });
