class DirectionInput {
    constructor() {
        this.heldDirections = [];

        //Add sprinting with left shift


        this.map = {
            "ArrowUp": "up",
            "z": "up",
            "Z": "up",

            "ArrowDown": "down",
            "s": "down",
            "S": "down",

            "ArrowLeft": "left",
            "q": "left",
            "Q": "left",

            "ArrowRight": "right",
            "d": "right",
            "D": "right",
        }
    }

    get direction() {
        return this.heldDirections[0];
    }

    init() {
        document.addEventListener("keydown", (event) => {
            const dir = this.map[event.key];
            if(dir && this.heldDirections.indexOf(dir) === -1) {
                this.heldDirections.unshift(dir);
            }
        });
        document.addEventListener("keyup", (event) => {
            const dir = this.map[event.key];
            const index = this.heldDirections.indexOf(dir);
            if(index > -1) {
                this.heldDirections.splice(index, 1);
            }
        });
    }
}