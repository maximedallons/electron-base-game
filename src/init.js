(function () {
    const body = document.querySelector("body");
    const overworld = new Overworld({
        element: body.querySelector(".game-container")
    });
    overworld.init();

})();