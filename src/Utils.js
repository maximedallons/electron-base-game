const utils = {
    withGrid(n) {
        return n * 16;
    },
    asGridCoord(x,y) {
        return `${x*16},${y*16}`;
    },
    nextPosition(initialX, initialY, direction) {
        let x = initialX;
        let y = initialY;
        const size = 16;
        switch(direction) {
            case "up":
                y -= size;
                break;
            case "down":
                y += size;
                break;
            case "left":
                x -= size;
                break;
            case "right":
                x += size;
                break;
        }
        return {x,y};
    }
}