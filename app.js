let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
const canvas = document.getElementById('canvas');

const renderer = PIXI.autoDetectRenderer({
    forceCanvas: true,
    width: screenWidth,
    height: screenHeight,
    antialias: false,
    roundPixels: true,
    resolution: 2,
    view: canvas,
});

renderer.view.width = screenWidth;
renderer.view.height = screenHeight;
renderer.view.style.width = screenWidth + 'px';
renderer.view.style.height = screenHeight + 'px';
renderer.view.style.display = 'block';
renderer.view.style.position = 'absolute';
renderer.view.style.top = '0';
renderer.view.style.left = '0';
renderer.view.style.zIndex = '-1';
renderer.backgroundColor = 0x000000;

const stage = new PIXI.Container();
const g = new PIXI.Graphics();
g.beginFill(0xff000);
g.lineStyle(1, 0xff000);
g.drawRect(0, 0, 20, 20);
g.x = window.innerWidth / 4;
g.y = window.innerHeight / 4;
stage.addChild(g);
loop();

function loop() {
    renderer.render(stage);
    setTimeout(() => {
        loop();
    }, 1000/30)
}
