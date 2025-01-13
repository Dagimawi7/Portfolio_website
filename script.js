// Accessing the canvas element and setting its context for 2D drawing
let canvas = document.getElementById("miCanvas"); // Get the canvas element by ID
let context = canvas.getContext("2d"); // Get the 2D rendering context for drawing
canvas.width = 2000; // Set the canvas width to the window's inner width
canvas.height = 2000; // Set the canvas height to the window's inner height

// Object to hold mouse coordinates
let mouseCoords = {
    x: undefined, // Initialize x-coordinate as undefined
    y: undefined, // Initialize y-coordinate as undefined
};

// Update the mouse coordinates on mouse movement across the window
window.addEventListener("mousemove", (e) => {
    mouseCoords.x = e.x; // Update x-coordinate to the mouse's x position
    mouseCoords.y = e.y; // Update y-coordinate to the mouse's y position
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
