module.exports = class Grid {
    constructor(x,y){
        this._maxX = x;
        this._maxY = y;
        this._roversPositions = [];
    }

    pushToPosition(rover){
        this._roversPositions.push(rover);
    }

    returnPositions(){
        return this._roversPositions;
    }
    getMaxX(){
        return this._maxX;
    }

    getMaxY(){
        return this._maxY;
    }

}