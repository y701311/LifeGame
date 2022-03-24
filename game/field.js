import { Cell } from "./cell.js";
import { Location } from "./location.js";

export class Field {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.field = new Array(height);
        for (let y = 0; y < height; y++) {
            this.field[y] = new Array(width);
            for (let x = 0; x < width; x++) {
                this.field[y][x] = new Cell()
            }
        }
    }

    // 受け取った場所のライフの存在、非存在を反転させる
    reverse(location) {
        this.field[location.y][location.x].toggle();
    };

    // 受け取った場所の周囲のライフの数を数えて返す
    countAroundLives(location) {
        let aroundLives = 0;
        // 左
        if (location.x >= 1) {
            if (this.field[location.y][location.x - 1].isAlive == true) {
                aroundLives++;
            }
        }
        // 右
        if (location.x <= this.width - 2) {
            if (this.field[location.y][location.x + 1].isAlive == true) {
                aroundLives++;
            }
        }
        // 上
        if (location.y >= 1) {
            if (this.field[location.y - 1][location.x].isAlive == true) {
                aroundLives++;
            }
        }
        // 下
        if (location.y <= this.height - 2) {
            if (this.field[location.y + 1][location.x].isAlive == true) {
                aroundLives++;
            }
        }
        // 左上 
        if (location.y >= 1 && location.x >= 1) {
            if (this.field[location.y - 1][location.x - 1].isAlive == true) {
                aroundLives++;
            }
        }
        // 右上
        if (location.y >= 1 && location.x <= this.width - 2) {
            if (this.field[location.y - 1][location.x + 1].isAlive == true) {
                aroundLives++;
            }
        }
        // 左下
        if (location.x >= 1 && location.y <= this.height - 2) {
            if (this.field[location.y + 1][location.x - 1].isAlive == true) {
                aroundLives++;
            }
        }
        // 右下
        if (location.x <= this.width - 2 && location.y <= this.height - 2) {
            if (this.field[location.y + 1][location.x + 1].isAlive == true) {
                aroundLives++;
            }
        }
        return aroundLives;
    };

    // 盤面のライフの数を数えて返す
    countLives() {
        let livesNum = 0;
        for (let y = 0; y <= this.height - 1; y++) {
            for (let x = 0; x <= this.width - 1; x++) {
                if (this.field[y][x].isAlive == true) {
                    livesNum++;
                }
            }
        }
        return livesNum;
    };

    // 盤面にライフが1つも無いか
    isBlank() {
        let isBlank = true;
        for (let y = 0; y <= this.height - 1; y++) {
            for (let x = 0; x <= this.width - 1; x++) {
                if (this.field[y][x].isAlive == true) {
                    isBlank = false;
                }
            }
        }
        return isBlank;
    }

    // 盤面をライフが無い状態にする
    clear() {
        let location = new Location();
        for (let y = 0; y <= this.height - 1; y++) {
            for (let x = 0; x <= this.width - 1; x++) {
                location.x = x;
                location.y = y;
                if (this.field[y][x].isAlive == true) {
                    this.field[y][x].isAlive = false;
                    this.field[y][x].nextStatus = false;
                }
            }
        }
    };

    // 次の世代に更新する
    updateLivesStatus() {
        for (let y = 0; y <= this.height - 1; y++) {
            for (let x = 0; x <= this.width - 1; x++) {
                let aroundLives = this.countAroundLives(new Location(x, y));
                this.field[y][x].judgeSurvive(aroundLives);
            }
        }
        for (let y = 0; y <= this.height - 1; y++) {
            for (let x = 0; x <= this.width - 1; x++) {
                this.field[y][x].isAlive = this.field[y][x].nextStatus;
            }
        }
    };
}