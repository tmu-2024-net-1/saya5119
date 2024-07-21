// Retrieve the value from local storage
const receivedMsg = localStorage.getItem('msg');

// Function to get SVG path based on character
function createElementForCharacter(char) {
    switch(char) {
        case 'あ': return ['./svg/hiraa.svg'];
        case 'い': return ['./svg/hirai.svg'];
        case 'う': return ['./svg/hirau.svg'];
        case 'え': return ['./svg/hirae.svg'];
        case 'お': return ['./svg/hirao.svg'];
        case 'か': return ['./svg/hiraka.svg'];
        case 'き': return ['./svg/hiraki.svg'];
        case 'く': return ['./svg/hiraku.svg'];
        case 'け': return ['./svg/hirake.svg'];
        case 'こ': return ['./svg/hirako.svg'];
        case 'さ': return ['./svg/hirasa.svg'];
        case 'し': return ['./svg/hirasi.svg'];
        case 'す': return ['./svg/hirasu.svg'];
        case 'せ': return ['./svg/hirase.svg'];
        case 'そ': return ['./svg/hiraso.svg'];
        case 'た': return ['./svg/hirata.svg'];
        case 'ち': return ['./svg/hirati.svg'];
        case 'つ': return ['./svg/hiratu.svg'];
        case 'て': return ['./svg/hirate.svg'];
        case 'と': return ['./svg/hirato.svg'];
        case 'な': return ['./svg/hirana.svg'];
        case 'に': return ['./svg/hirani.svg'];
        case 'ぬ': return ['./svg/hiranu.svg'];
        case 'ね': return ['./svg/hirane.svg'];
        case 'の': return ['./svg/hirano.svg'];
        case 'は': return ['./svg/hiraha.svg'];
        case 'ひ': return ['./svg/hirahi.svg'];
        case 'ふ': return ['./svg/hirahu.svg'];
        case 'へ': return ['./svg/hirahe.svg'];
        case 'ほ': return ['./svg/hiraho.svg'];
        case 'ま': return ['./svg/hirama.svg'];
        case 'み': return ['./svg/hirami.svg'];
        case 'む': return ['./svg/hiramu.svg'];
        case 'め': return ['./svg/hirame.svg'];
        case 'も': return ['./svg/hiramo.svg'];
        case 'や': return ['./svg/hiraya.svg'];
        case 'ゆ': return ['./svg/hirayu.svg'];
        case 'よ': return ['./svg/hirayo.svg'];
        case 'ら': return ['./svg/hirara.svg'];
        case 'り': return ['./svg/hirari.svg'];
        case 'る': return ['./svg/hiraru.svg'];
        case 'れ': return ['./svg/hirare.svg'];
        case 'ろ': return ['./svg/hiraro.svg'];
        case 'わ': return ['./svg/hirawa.svg'];
        case 'を': return ['./svg/hirawo.svg'];
        case 'ん': return ['./svg/hirann.svg'];
        case 'が': return ['./svg/hiraga.svg'];
        case 'ぎ': return ['./svg/hiragi.svg'];
        case 'ぐ': return ['./svg/hiragu.svg'];
        case 'げ': return ['./svg/hirage.svg'];
        case 'ご': return ['./svg/hirago.svg'];
        case 'ざ': return ['./svg/hiraza.svg'];
        case 'じ': return ['./svg/hirazi.svg'];
        case 'ず': return ['./svg/hirazu.svg'];
        case 'ぜ': return ['./svg/hiraze.svg'];
        case 'ぞ': return ['./svg/hirazo.svg'];
        case 'だ': return ['./svg/hirada.svg'];
        case 'ぢ': return ['./svg/hiradi.svg'];
        case 'づ': return ['./svg/hiradu.svg'];
        case 'で': return ['./svg/hirade.svg'];
        case 'ど': return ['./svg/hirado.svg'];
        case 'ば': return ['./svg/hiraba.svg'];
        case 'び': return ['./svg/hirabi.svg'];
        case 'ぶ': return ['./svg/hirabu.svg'];
        case 'べ': return ['./svg/hirabe.svg'];
        case 'ぼ': return ['./svg/hirabo.svg'];
        case 'ぱ': return ['./svg/hirapa.svg'];
        case 'ぴ': return ['./svg/hirapi.svg'];
        case 'ぷ': return ['./svg/hirapu.svg'];
        case 'ぺ': return ['./svg/hirape.svg'];
        case 'ぽ': return ['./svg/hirapo.svg'];
        case 'ゃ': return ['./svg/hiraya2.svg'];
        case 'ゅ': return ['./svg/hirayu2.svg'];
        case 'ょ': return ['./svg/hirayo2.svg'];
        case 'っ': return ['./svg/hiratt.svg'];
        case 'ぁ': return ['./svg/hiraxa.svg'];
        case 'ぃ': return ['./svg/hiraxi.svg'];
        case 'ぅ': return ['./svg/hiraxu.svg'];
        case 'ぇ': return ['./svg/hiraxe.svg'];
        case 'ぉ': return ['./svg/hiraxo.svg'];
        case 'ー': return ['./svg/hiradash.svg'];
        default: return [];
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

const receiveselectnumber = localStorage.getItem('selectnumber');
if (receiveselectnumber == 1) {
    world.gravity.y = 0.01;
} else if (receiveselectnumber == 2) {
    world.gravity.y = 5;
} else if (receiveselectnumber == 3) {
    world.gravity.y = 1;
} else if (receiveselectnumber == 4) {
    world.gravity.y = 1.2;
}

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
const addSvgsToMatter = function(urls, x, y, size) {
    urls.forEach(url => {
        loadSvg(url).then(function(root) {
            const vertexSets = select(root, 'path')
                .map(function(path) {
                    return Svg.pathToVertices(path, 50);
                });

            // Create a physics body with the given size
            const body = Bodies.rectangle(x, y, size, size, {
                render: {
                    lineWidth: 1,
                    visible: false
                }
            });

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
                ctx.scale(1, 1);  // Scale to fit the canvas size
            });

            // Sync the canvas with Matter.js body
            (function updateCanvas() {
                const { position, angle } = body;
                const screenWidth = window.innerWidth;
                const offsetX = (screenWidth - 1100) / 2;  // Adjust offset based on screen width

                canvas.style.transform = `translate(${position.x - 50 + offsetX}px, ${position.y + 60}px) rotate(${angle}rad)`; // Center the canvas horizontally and vertically
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
        const size = (char === 'ゃ' || char === 'ゅ' || char === 'ょ' || char === 'っ' || char === 'ぁ' || char === 'ぃ' || char === 'ぅ' || char === 'ぇ' || char === 'ぉ') ? 70 : 90;
        
        if (svgPaths.length > 0) {
            addSvgsToMatter(svgPaths, x, y, size);
            x += 150;  // Adjust x position for the next SVG
        }
    }
}

// Add an ID to the floor body
const floor = Bodies.rectangle(550, 600, 1100, 50, { isStatic: true, id: 'floor' });

// Add walls, floor, and ceiling adjusted for the new dimensions
Composite.add(world, [
    Bodies.rectangle(550, 0, 1100, 50, { isStatic: true }), // Ceiling
    floor, // Floor
    Bodies.rectangle(1100, 300, 50, 600, { isStatic: true }), // Right wall
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true }) // Left wall
]);

// Collision event listener
Matter.Events.on(engine, 'collisionStart', function(event) {
    const pairs = event.pairs;

    pairs.forEach(pair => {
        const { bodyA, bodyB } = pair;

        if (receiveselectnumber == 3) {
            if (bodyA.id === 'floor' || bodyB.id === 'floor') {
                const movingBody = bodyA.id === 'floor' ? bodyB : bodyA;

                // Warp to 150 pixels below the top of the canvas
                Matter.Body.setPosition(movingBody, { x: movingBody.position.x, y: 80 });
                Matter.Body.setVelocity(movingBody, { x: 0, y: 0 }); // Reset velocity to avoid bouncing
            }
        }
        if (receiveselectnumber == 4) {
            if (bodyA.id === 'floor' || bodyB.id === 'floor') {
                const movingBody = bodyA.id === 'floor' ? bodyB : bodyA;

                // Reverse the vertical velocity to create a bouncing effect
                Matter.Body.setVelocity(movingBody, {
                    x: movingBody.velocity.x,
                    y: -movingBody.velocity.y * 0.8 // Apply a damping factor (e.g., 0.8) to simulate energy loss
                });
            } else if (bodyA.id === 'ceiling' || bodyB.id === 'ceiling') {
                const movingBody = bodyA.id === 'ceiling' ? bodyB : bodyA;

                // Reverse the vertical velocity to create a bouncing effect
                Matter.Body.setVelocity(movingBody, {
                    x: movingBody.velocity.x,
                    y: -movingBody.velocity.y * 0.8 // Apply a damping factor (e.g., 0.8) to simulate energy loss
                });
            } else if (bodyA.id === 'left wall' || bodyB.id === 'left wall' || bodyA.id === 'right wall' || bodyB.id === 'right wall') {
                const movingBody = bodyA.id === 'left wall' || bodyA.id === 'right wall' ? bodyB : bodyA;

                // Reverse the horizontal velocity to create a bouncing effect
                Matter.Body.setVelocity(movingBody, {
                    x: -movingBody.velocity.x * 0.8, // Apply a damping factor (e.g., 0.8) to simulate energy loss
                    y: movingBody.velocity.y
                });
            }
        }
    });
});

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
