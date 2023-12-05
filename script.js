const image = document.getElementById('bouncingImage');
const speedSlider = document.getElementById('speedSlider');

const animationProps = {
    x: 1,
    y: 1,
    rotation: 0.1,
};

// Center the image initially
const initialX = (window.innerWidth - image.clientWidth) / 2;
const initialY = (window.innerHeight - image.clientHeight) / 2;

const imageState = {
    xPosition: initialX,
    yPosition: initialY,
    rotation: 0,
};

function updateAnimation() {
    const speed = parseFloat(speedSlider.value);

    imageState.xPosition += animationProps.x * speed;
    imageState.yPosition += animationProps.y * speed;
    imageState.rotation += animationProps.rotation * speed;

    image.style.transform = `translate(${imageState.xPosition}px, ${imageState.yPosition}px) rotate(${imageState.rotation}deg)`;

    const imageRect = image.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (imageRect.left <= 0 || imageRect.right >= screenWidth) {
        animationProps.x *= -1;
    }

    if (imageRect.top <= 0 || imageRect.bottom >= screenHeight) {
        animationProps.y *= -1;
    }

    requestAnimationFrame(updateAnimation);
}

requestAnimationFrame(updateAnimation);
