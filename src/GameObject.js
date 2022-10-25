class GameObject {
    constructor(config) {
        this.isMounted = false;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            currentAnimation: config.currentAnimation || "idle-down",
            gameObject: this,
            src: config.src || "./images/characters/people/hero.png",

        });
    }

    mount(map) {
        console.log("Mounting", this);
        this.isMounted = true;
        map.addWall(this.x, this.y);
    }

    update() {

    }
}