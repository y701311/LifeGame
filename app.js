import { Canvas } from "./canvas.js";
import { Environment } from "./game/environment.js";
import { Field } from "./game/field.js";
import { FIELD_WIDTH, FIELD_HEIGHT } from "./appConfig.js";

class App {
    constructor() {
        // 盤面の広さ
        this.width = FIELD_WIDTH, this.height = FIELD_HEIGHT;
        // ゲームを進める環境
        this.environment = new Environment(new Field(this.width, this.height), new Canvas("gameCanvas", this.width, this.height));
    }

    run() {
        document.getElementById("startButton").addEventListener("click", () => this.start(), false);
        document.getElementById("stopButton").addEventListener("click", () => this.stop(), false);
        document.getElementById("resetButton").addEventListener("click", () => this.reset(), false);
    };

    start() {
        this.environment.start();
    };

    stop() {
        this.environment.stop();
    };

    reset() {
        this.environment.stop();
        this.environment.reset();
    };
}

function main() {
    window.onload = function () {
        let app = new App();
        app.run();
    };
}

main();