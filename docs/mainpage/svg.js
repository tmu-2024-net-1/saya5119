var Example = Example || {};

Example.svg = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Vertices = Matter.Vertices,
        Svg = Matter.Svg,
        Bodies = Matter.Bodies;

    // provide concave decomposition support library
    Common.setDecomp(require('poly-decomp'));

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    if (typeof fetch !== 'undefined') {
        var select = function(root, selector) {
            return Array.prototype.slice.call(root.querySelectorAll(selector));
        };

        var loadSvg = function(url) {
            return fetch(url)
                .then(function(response) { return response.text(); })
                .then(function(raw) { return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'); });
        };

        ([
            'https://brm.io/matter-js/demo/svg/iconmonstr-check-mark-8-icon.svg', 
            'https://brm.io/matter-js/demo/svg/iconmonstr-paperclip-2-icon.svg',
            'https://brm.io/matter-js/demo/svg/iconmonstr-puzzle-icon.svg',
            'https://brm.io/matter-js/demo/svg/iconmonstr-user-icon.svg'
        ]).forEach(function(path, i) { 
            loadSvg(path).then(function(root) {
                var color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);

                var vertexSets = select(root, 'path')
                    .map(function(path) { return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4); });

                Composite.add(world, Bodies.fromVertices(100 + i * 150, 200 + i * 50, vertexSets, {
                    render: {
                        fillStyle: color,
                        strokeStyle: color,
                        lineWidth: 1
                    }
                }, true));
            });
        });

        loadSvg('https://brm.io/matter-js/demo/svg/svg.svg').then(function(root) {
            var color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);
            
            var vertexSets = select(root, 'path')
                .map(function(path) { return Svg.pathToVertices(path, 30); });

            Composite.add(world, Bodies.fromVertices(400, 80, vertexSets, {
                render: {
                    fillStyle: color,
                    strokeStyle: color,
                    lineWidth: 1
                }
            }, true));
        });
    } else {
        Common.warn('Fetch is not available. Could not load SVG.');
    }

    Composite.add(world, [
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

Example.svg.title = 'Concave SVG Paths';
Example.svg.for = '>0.16.1';

// if (typeof module !== 'undefined') {
//     module.exports = Example.svg;
// }

// create demo interface
// not required to use Matter.js

MatterTools.Demo.create({
  toolbar: {
    title: 'matter-js',
    url: 'https://github.com/liabru/matter-js',
    reset: true,
    source: true,
    fullscreen: true,
    exampleSelect: true
  },
  preventZoom: true,
  resetOnOrientation: true,
  examples: [
    {
      name: 'Svg',
      id: 'svg',
      init: Example.ragdoll,
      sourceLink: 'https://github.com/liabru/matter-js/blob/master/examples/svg.js'
    }
  ]
});