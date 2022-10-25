class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {};
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(this.lowerImage, utils.withGrid(20) - cameraPerson.x,
            utils.withGrid(10) - cameraPerson.y);
    }

    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(this.upperImage, utils.withGrid(20) - cameraPerson.x,
            utils.withGrid(10) - cameraPerson.y);
    }

    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    mountObjects() {
        Object.values(this.gameObjects).forEach(gameObject => {
            gameObject.mount(this);
        });
    }

    addWall(x,y) {
        this.walls[`${x},${y}`] = true;
    }

    removeWall(x,y) {
        delete this.walls[`${x},${y}`];
    }

    moveWall(initialX, initialY, direction) {
        this.removeWall(initialX, initialY);
        const {x,y} = utils.nextPosition(initialX, initialY, direction);
        this.addWall(x,y);
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "./images/maps/DemoLower.png",
        upperSrc: "./images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
                src: "./images/characters/people/max.png"
            }),
            npc1: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                currentAnimation: "idle-left",
                src: "./images/characters/people/npc1.png"
            })
        },
        walls: {
            //Outside walls
            [utils.asGridCoord(0, 0)]: true,
            [utils.asGridCoord(0, 1)]: true,
            [utils.asGridCoord(0, 2)]: true,
            [utils.asGridCoord(0, 3)]: true,
            [utils.asGridCoord(0, 4)]: true,
            [utils.asGridCoord(0, 5)]: true,
            [utils.asGridCoord(0, 6)]: true,
            [utils.asGridCoord(0, 7)]: true,
            [utils.asGridCoord(0, 8)]: true,
            [utils.asGridCoord(0, 9)]: true,
            [utils.asGridCoord(0, 10)]: true,

            [utils.asGridCoord(1, 10)]: true,
            [utils.asGridCoord(2, 10)]: true,
            [utils.asGridCoord(3, 10)]: true,
            [utils.asGridCoord(4, 10)]: true,
            [utils.asGridCoord(5, 11)]: true,
            [utils.asGridCoord(6, 10)]: true,
            [utils.asGridCoord(7, 10)]: true,
            [utils.asGridCoord(8, 10)]: true,
            [utils.asGridCoord(9, 10)]: true,
            [utils.asGridCoord(10, 10)]: true,
            [utils.asGridCoord(11, 10)]: true,

            [utils.asGridCoord(11, 0)]: true,
            [utils.asGridCoord(11, 1)]: true,
            [utils.asGridCoord(11, 2)]: true,
            [utils.asGridCoord(11, 3)]: true,
            [utils.asGridCoord(11, 4)]: true,
            [utils.asGridCoord(11, 5)]: true,
            [utils.asGridCoord(11, 6)]: true,
            [utils.asGridCoord(11, 7)]: true,
            [utils.asGridCoord(11, 8)]: true,
            [utils.asGridCoord(11, 9)]: true,

            [utils.asGridCoord(1, 0)]: true,
            [utils.asGridCoord(2, 0)]: true,
            [utils.asGridCoord(3, 0)]: true,
            [utils.asGridCoord(4, 0)]: true,
            [utils.asGridCoord(5, 0)]: true,
            [utils.asGridCoord(6, 0)]: true,
            [utils.asGridCoord(7, 0)]: true,
            [utils.asGridCoord(8, 0)]: true,
            [utils.asGridCoord(9, 0)]: true,
            [utils.asGridCoord(10, 0)]: true,

            //Inside walls
            [utils.asGridCoord(1, 3)]: true,
            [utils.asGridCoord(2, 3)]: true,
            [utils.asGridCoord(3, 3)]: true,
            [utils.asGridCoord(4, 3)]: true,
            [utils.asGridCoord(5, 3)]: true,
            [utils.asGridCoord(6, 3)]: true,
            [utils.asGridCoord(6, 4)]: true,
            [utils.asGridCoord(8, 4)]: true,
            [utils.asGridCoord(8, 3)]: true,
            [utils.asGridCoord(9, 3)]: true,
            [utils.asGridCoord(10, 3)]: true,

            [utils.asGridCoord(7, 6)]: true,
            [utils.asGridCoord(8, 6)]: true,
            [utils.asGridCoord(7, 7)]: true,
            [utils.asGridCoord(8, 7)]: true,

        }
    },
    DemoRoom2: {
        lowerSrc: "./images/maps/Demo2Lower.png",
        upperSrc: "./images/maps/Demo2Upper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(22),
                y: utils.withGrid(10),
                src: "./images/characters/people/max.png"
            }),
            npc1: new Person({
                x: utils.withGrid(6),
                y: utils.withGrid(6),
                currentAnimation: "idle-left",
                src: "./images/characters/people/npc1.png"
            }),
            npc2: new Person({
                x: utils.withGrid(4),
                y: utils.withGrid(6),
                currentAnimation: "idle-right",
                src: "./images/characters/people/gilles.png"
            }),
            npc3: new Person({
                x: utils.withGrid(10),
                y: utils.withGrid(7),
                currentAnimation: "idle-left",
                src: "./images/characters/people/simon.png"
            }),
            npc4: new Person({
                x: utils.withGrid(8),
                y: utils.withGrid(7),
                currentAnimation: "idle-right",
                src: "./images/characters/people/hero.png"
            }),
            npc5: new Person({
                x: utils.withGrid(16),
                y: utils.withGrid(6),
                currentAnimation: "idle-right",
                src: "./images/characters/people/npc2.png"
            }),
            npc6: new Person({
                x: utils.withGrid(24),
                y: utils.withGrid(5),
                currentAnimation: "idle-down",
                src: "./images/characters/people/template.png"
            }),
        },
    },
}