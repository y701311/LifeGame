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
        // TODO
    }

    // 受け取った場所の周囲のライフの数を数えて返す
    countAroundLives(location) {
        // TODO
    }

    // 盤面のライフの数を数えて返す
    countLives() {
        // TODO
    }

    // 盤面にライフが1つも無いか
    isBlank() {
        // TODO
    }

    // 盤面をライフが無い状態にする
    clear() {
        // TODO
    }

    // 次の世代に更新する
    updateLivesStatus() {
        // TODO
    }
}