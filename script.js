function mode() {

    let body = document.body;
    body.classList.toggle('dark-mode');

}

document.addEventListener("DOMContentLoaded", () => {

    let ball = document.getElementById('ball');

    let speed = 2.5;
    let position = 0;
    let isDown = true;

    function movementBall() {
        if(isDown === true) {
            position += speed;

            // Reaches the bottom of the page
            if(position >= window.innerHeight - 50) {
                isDown = false;
            }
        } else if (isDown === false) {
            position -= speed;

            if(position <= 0) {
                isDown = true;
            }
        }
    }

    ball.style.top = '${position}px';

    requestAnimationFrame(movementBall);

    movementBall();
});
