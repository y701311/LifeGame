export class Cell {
    constructor() {
        this.isAlive = false;
        // 次の世代での生死
        this.nextStatus = false;
    }

    // ライフの存在、非存在を反転させる
    toggle() {
        // TODO
    }

    // 周囲のライフの数を元に次の世代での生死を決定
    judgeSurvive(aroundLife) {
        // TODO
    }
}