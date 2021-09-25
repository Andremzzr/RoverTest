module.exports = class Rover{
    constructor(x,y,head,grid){
        this._x = x;
        this._y = y;
        this._head = head;
        this._grid = grid;
    }

    returnLocation(){
        this._grid.pushToPosition(`x:${this._x} y:${this._y}`);
        console.log(`rover position:\nx:${this._x} y:${this._y}\n`);
    }

    handleInputCommands(command){
        if(command == 'M' || command == 'R' || command == 'L'){
            if(command != 'M'){
                this.whereTheHeadGoesTo(command);
            }
            else{
                if(this.canRoverMove() && this.positionOccupied()){
                    this.move();
                }
                else{
                    console.log(`rover has stoped`);
                }
            }
        }
    }
    
    positionOccupied(){
        switch (this._head) {
            case 'N':
                if(this._grid.returnPositions().includes(`x:${this._x} y:${this._y + 1}`)){
                    console.log('ta ocupado');
                    return false;
                }
                return true;
                break;
            case 'S':
                if(this._grid.returnPositions().includes(`x:${this._x} y:${this._y - 1}`)){
                    console.log('ta ocupado');
                    return false;
                }
                return true;
            case 'E':
                if(this._grid.returnPositions().includes(`x:${this._x + 1} y:${this._y}`)){
                    console.log('ta ocupado');
                    return false;
                }
                return true;
            case 'W':
                if(this._grid.returnPositions().includes(`x:${this._x - 1} y:${this._y}`)){
                    console.log('ta ocupado');
                    return false;
                }
                return true;
            default:
                break;
        }
        
    }

    whereTheHeadGoesTo(move){
       switch (this._head) {
           case 'N':
               if(move == 'L'){
                   this._head = 'W';
                }
            else{
                   this._head = 'E'
               }
               break;
           case 'E':
                if(move == 'L'){
                    this._head = 'N';
                }
                else{
                    this._head = 'S';
                }   
            break;
            case 'W':
                if(move == 'L'){
                    this._head = 'S';
                }
                else{
                    this._head = 'N';
                }   
            break;
            case 'S':
                if(move == 'L'){
                    this._head = 'E';
                }
                else{
                    this._head ='W';
                }   
            break;                
           default:
               break;
       }
        
    }


    
    canRoverMove(){        
        switch (this._head) {
            case 'N':
               if(this._y == this._grid.getMaxY()){
                   return false;
               }
               else{
                   return true;
               } 
            case 'S':
                if(this._y == 0){
                    return false;
                }
                else{
                    return true;
                } 
            case 'E':
                if(this._x == this._grid.getMaxX()){
                    return false;
                }
                else{
                    return true;
                } 
            case 'W':
                if(this._x == 0){
                    return false;
                }
                else{
                    return true;
                }  
            default:
                break;
        }
    }

    move(){
        switch (this._head) {
            case 'N':
               this._y++;
               break;
            case 'S':
                this._y--;
                break;
            case 'E':
                this._x++;
                break;
            case 'W':
                this._x--;
                break;
            default:
                break;
        }
    }

}