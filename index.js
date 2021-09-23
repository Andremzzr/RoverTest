class Grid {
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


class Rover{
    constructor(x,y,head,grid){
        this._x = x;
        this._y = y;
        this._head = head;
        this._grid = grid;
    }

    returnLocation(){
        console.log(`rover position:\nx:${this._x} y:${this._y}\n`);
    }

    handleInputCommands(command){
        if(command != 'M'){
            this.whereTheHeadGoesTo(command);
        }
        else{
            if(this.canRoverMove()){
                this.move();
            }
            else{
                console.log(`rover has stoped`);
            }
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

/**
 * Receive a string input, then tries to intaciate all tha right classes
 * @param {string} string 
 */
function handleInput(string){
    let rover;
    const input = string.split('\n');
    const initialLocation = input[0].replace(/\s/g, '');
    const grid = new Grid(initialLocation[0],initialLocation[1]);

    for (let i = 1; i < input.length; i++) {
        if(i % 2 != 0){
            const roverInfo = input[i].replace(/\s/g, '');
            rover = new Rover(roverInfo[0],roverInfo[1],roverInfo[2],grid);
        }
        else{
            const roverMoves = input[i].replace(/\s/g, '').split('');
            for (let index = 0; index < roverMoves.length;index++) {
                const command = roverMoves[index];
                rover.handleInputCommands(command);
            }

            rover.returnLocation()

        }
        
    }      
}



handleInput(`5 5 
1 2 N 
LMLMLMLMM 
3 3 E 
MMRMMRMRRM
0 1 N
RM`);
