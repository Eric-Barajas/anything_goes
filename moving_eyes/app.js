const eyes = document.querySelectorAll(".eye");
const anchor = document.getElementById("anchor");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

document.addEventListener("mousemove", (e) => {
    // console.log(e)
    // prints out a lot of info only need whats below this line
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    // console.log(angleDeg);

    eyes.forEach((eye) => {
        eye.style.transform = `rotate(${180 + angleDeg}deg)`;
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    })
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx); // range (-PI, PI)
    const deg = rad * 180 / Math.PI; // radians to degrees, range (-180, 180)
    return deg;
}