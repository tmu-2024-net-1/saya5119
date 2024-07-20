// Retrieve the value from local storage
const receivedMsg = localStorage.getItem('msg');

// Function to get SVG path based on character
function createElementForCharacter(char) {
    switch(char) {
        case 'あ':
            return ['./svg/hiraa.svg'];
        case 'い':
            return ['./svg/hirai.svg'];
        case 'う':
            return ['./svg/hirau.svg'];
        case 'え':
            return ['./svg/hirae.svg'];
        case 'お':
            return ['./svg/hirao.svg'];
        default:
            return [];
    }
}

// Import Canvg from Skypack
import { Canvg } from 'https://cdn.skypack.dev/canvg@^4.0.0';

// Module aliases
const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Common = Matter.Common,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Svg = Matter.Svg,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

// Provide concave decomposition support library
Common.setDecomp(decomp);

// Create an engine
const engine = Engine.create();
const world = engine.world;

// Modify gravity
world.gravity.y = 0.01;

// Create a renderer for Matter.js
const render = Render.create({
    element: document.getElementById('main-container'), // Append canvas to the main element
    engine: engine,
    options: {
        width: 1100,
        height: 600, // Fixed height
        wireframes: false,
        background: '#f4f4f8'
    }
});

// Function to select paths from SVG
const select = function(root, selector) {
    return Array.prototype.slice.call(root.querySelectorAll(selector));
};

// Function to load SVG
const loadSvg = function(url) {
    return fetch(url)
        .then(response => response.text())
        .then(raw => (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'));
};

// Function to add SVGs to Matter.js and Canvg
const addSvgsToMatter = function(urls, x, y) {
    urls.forEach(url => {
        loadSvg(url).then(function(root) {
            const vertexSets = select(root, 'path')
                .map(function(path) {
                    return Svg.pathToVertices(path, 50);
                });

            // Add the Matter.js body for physics with transparency
            const body = Bodies.fromVertices(x, y, vertexSets, {
                render: {
                    lineWidth: 1
                }
            }, true);

            Composite.add(world, body);

            // Create a canvas for Canvg
            const canvas = document.createElement('canvas');
            canvas.width = 100;
            canvas.height = 100;
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.pointerEvents = 'none'; // Ensure canvas doesn't capture mouse events
            document.body.appendChild(canvas);

            // Use Canvg to overlay the original SVG
            const ctx = canvas.getContext('2d');
            Canvg.from(ctx, url).then((v) => {
                v.start();
                ctx.scale(0.125, 0.125);  // Scale down the SVG (100 / 800 = 0.125)
            });

            // Sync the canvas with Matter.js body
            (function updateCanvas() {
                const { position, angle } = body;
                const screenWidth = window.innerWidth;
                const offsetX = (screenWidth - 1100) / 2;  // Adjust offset based on screen width
            
                canvas.style.transform = `translate(${position.x - 50 + offsetX}px, ${position.y + 10}px) rotate(${angle}rad)`; // Center the canvas horizontally and vertically
                requestAnimationFrame(updateCanvas);
            })();
        });
    });
};

// Load SVGs based on receivedMsg
if (receivedMsg) {
    let x = 50;  // Initial x position
    const y = 300;  // Fixed y position

    for (let i = 0; i < receivedMsg.length; i++) {
        const char = receivedMsg[i];
        const svgPaths = createElementForCharacter(char);
        
        if (svgPaths.length > 0) {
            addSvgsToMatter(svgPaths, x, y);
            x += 150;  // Adjust x position for the next SVG
        }
    }
}

// Add walls, floor, and ceiling adjusted for the new dimensions
Composite.add(world, [
    Bodies.rectangle(550, 0, 1100, 50, { isStatic: true }), // Ceiling
    Bodies.rectangle(550, 600, 1100, 50, { isStatic: true }), // Floor
    Bodies.rectangle(1100, 300, 50, 600, { isStatic: true }), // Right wall
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true }) // Left wall
]);

// Create mouse constraint
var mouse = Mouse.create(render.canvas);
var mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

// Add mouse constraint to the world
Composite.add(world, mouseConstraint);

// Run the renderer
Render.run(render);

// Create runner
const runner = Runner.create();

// Run the engine
Runner.run(runner, engine);
