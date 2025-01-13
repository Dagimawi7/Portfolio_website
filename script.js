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

// Function to create a 'Punto' object (a point on the canvas with specific behavior)
function Punto() {
    this.x = Math.random() * canvas.width; // Random x-coordinate within the canvas width
    this.y = Math.random() * canvas.height; // Random y-coordinate within the canvas height
    this.size = Math.random() * 3; // Random size for the point
    this.floatX = Math.random() * 0.3 - 0.1; // Random x-direction floating speed
    this.floatY = Math.random() * 0.3 - 0.1; // Random y-direction floating speed
    this.color = randomColor(); // Set the point's color using the randomColor function

    // Method to draw the point on the canvas
    this.draw = function () {
        context.beginPath(); // Start a new drawing path
        context.fillStyle = this.color; // Set the fill color to the point's color
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Draw a circle (point)
        context.fill(); // Fill the circle with the chosen color
    };

    // Method to update the point's position and re-draw it
    this.update = function () {
        // Check if the point is out of bounds and wrap it around to the opposite side
        if (this.x > canvas.width) this.x = -10;
        if (this.x < -20) this.x = canvas.width;
        if (this.y > canvas.height) this.y = -10;
        if (this.y < -20) this.y = canvas.height;

        this.x += this.floatX; // Update x-coordinate based on floating speed
        this.y += this.floatY; // Update y-coordinate based on floating speed
        this.draw(); // Draw the updated point
    };
}
