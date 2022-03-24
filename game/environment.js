import { Location } from "./location.js";

export class Environment {
    constructor(field, canvas) {
        this.field = field;
        this.canvas = canvas;

        this.timer = {};

        this.canvas.onClick = (location) => {
            this.field.reverse(location);
            this.canvas.drawCell(location, this.field.field[location.y][location.x]);
        };
    }

    // 世代の更新を開始
    start() {
        // 操作が加わっていたらクリック不可に
        if (this.field.isBlank() == false) {
            this.canvas.clickFlag = false;
        }
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            let livesNum = this.field.countLives();
            if (livesNum == 0) {
                this.stop();
            } else {
                this.field.updateLivesStatus()
                for (let y = 0; y < this.field.height; y++) {
                    for (let x = 0; x < this.field.width; x++) {
                        this.canvas.drawCell(new Location(x, y), this.field.field[y][x]);
                    }
                }
            }
        }, 200);
    };

    // 世代の更新を止める
    stop() {
        clearInterval(this.timer);
    };

    // フィールドのライフを全て消す
    reset() {
        this.canvas.clickFlag = true;
        this.canvas.clearAll();
        this.field.clear();
    };
}