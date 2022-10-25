class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {

            //Clear Canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //Establish the camera person
            const cameraPerson = this.map.gameObjects.hero;

            //Update all objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
                })
            })

            //Draw Lower Layer
            this.map.drawLowerImage(this.ctx, cameraPerson);

            //Draw Game Objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
            })

            //Draw Upper Layer
            this.map.drawUpperImage(this.ctx, cameraPerson);

            //Request next frame
            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
        this.map.mountObjects();

        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.startGameLoop();

        var audio = new Audio('./sounds/soundtrack.mp3');
        //audio.play().then(r => console.log("Playing"));
    }
}