const Grid = require('./entities/Grid');
const Rover = require('./entities/Rover');

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
            rover = new Rover(roverInfo[0],roverInfo[1],roverInfo[2].toLocaleUpperCase(),grid);
        }
        else{
            const roverMoves = input[i].toLocaleUpperCase().replace(/\s/g, '').split('');
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
RM
1 2 N
LMLMRM`);
