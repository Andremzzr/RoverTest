module.exports = class Grid {
    constructor(x,y){
        this._maxX = x;
        this._maxY = y;
    }

    getMaxX(){
        return this._maxX;
    }

    getMaxY(){
        return this._maxY;
    }

}