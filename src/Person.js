class Person extends GameObject{
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled || false;
        this.speed = 0.5;

        // Map of directions to the property and change to apply to the person's position
        this.directionUpdate = {
            "down": ["y", this.speed],
            "up": ["y", -this.speed],
            "left": ["x", -this.speed],
            "right": ["x", this.speed]
        }
    }

    update(state) {
        if(this.movingProgressRemaining > 0) {
            this.updatePosition();
        }
        else {
            // If the person is player controlled & pressing a key, update their direction
            if(this.isPlayerControlled && state.arrow){
                this.startBehavior(state, {
                    type: 'walk',
                    direction: state.arrow
                })
            }
            this.updateSprite();
        }
    }

    startBehavior(state, behavior) {
        this.direction = behavior.direction;
        // If the person is moving, update their position
        if(behavior.type === 'walk') {
            // Stop here if space isn't free
            if(state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                return;
            }
            // Otherwise, start moving
            state.map.moveWall(this.x, this.y, this.direction);
            this.movingProgressRemaining = 16;
        }
    }

    updatePosition() {
        // If the person is moving, update their position
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining -= this.speed;
    }

    updateSprite() {
        if(this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk-" + this.direction);
            return;
        }
        this.sprite.setAnimation("idle-" + this.direction);
    }
}