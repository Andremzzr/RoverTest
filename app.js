const Grid = require('./entities/Grid');
const Rover = require('./entities/Rover');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
function passRoverInfo(string,grid){
    const roverInfo = string.replace(/\s/g, '');
    console.log(roverInfo);
    return new Rover(roverInfo[0],roverInfo[1],roverInfo[2].toLocaleUpperCase(),grid);
}


function passBoardDimension(x,y){
    if(Number.isInteger(x) && Number.isInteger(y)){
        return new Grid(x,y);
    }
}

function isInvalidCommand(command){
    const commandArray = command.toUpperCase().trim().split('');
    for (let i = 0; i < commandArray.length; i++) {
        const element = commandArray[i];
        if(element !=  'M' && element != 'R' && element != 'L'){
            return true;
        }
    }
    
    return false
}


function createGame(grid){
    readline.question(`Pass the Rover infos: ex: '1 2 N':  `, info => {
        
        const rover = passRoverInfo(info,grid);
        
        readline.question(`Pass the moviment command: `, command => {
            
            if(isInvalidCommand(command)){
                console.log('You pass an invalid command! Try Again...');
                createGame(grid);
            }
            else{
                const roverMoves = command.toLocaleUpperCase().replace(/\s/g, '').split('');
                for (let index = 0; index < roverMoves.length;index++) {
                    const command = roverMoves[index];
                    rover.handleInputCommands(command);
                }

                rover.returnLocation()
                readline.question('Do you want to continue? (YES/NO)', lastAnswer => {
                    if(lastAnswer.trim().toLocaleUpperCase() == 'YES'){
                        createGame(grid);
                    }
                    else{
                        readline.close();
                    }
                })
               
            }
            
        
        });
        
    });        
}
    

//STARTING POINTS
readline.question(`What's the board dimension? ex: '5,5': `, dimension => {
    const x = parseInt(dimension.split(',')[0]);
    const y = parseInt(dimension.split(',')[1]);

    const grid = passBoardDimension(x,y);
    createGame(grid);
   
});






