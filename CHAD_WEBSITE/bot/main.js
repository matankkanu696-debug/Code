const eye = document.querySelector(".eye");

document.addEventListener("mousemove", (event) => {
    const eye = document.querySelector(".eye");

document.addEventListener("mousemove", (event) => {
    // 1. Get the eye's center coordinates
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + (rect.width / 2);
    const centerY = rect.top + (rect.height / 2);

    // 2. Calculate the distance (offset) from the eye's center to the mouse
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    // 3. Pass those pixel offsets to your CSS variables
    document.documentElement.style.setProperty('--x', `${deltaX}%`);
    document.documentElement.style.setProperty('--y', `${deltaY}%`);
});
})