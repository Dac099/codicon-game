import { MainCharacter } from './models/main-character.js';
import { Device } from './models/device.js';

class Game{
  constructor(){
    this.promt = document.getElementById('promtUser');
    this.character = new MainCharacter(localStorage.getItem('userName'));
    this.terminal = document.getElementById('textHistory');
    this.totalComputers = [];
    this.currentComputer = null;
    
    document.getElementById('shell').innerText = `${this.character.name}@desktopMain$`;
    this.generateDevices();
    this.listenUserInput();
  }

  generateDevices(){
    for(let i = 0; i < 20; i++){
      this.totalComputers.push(new Device());
    }
  }

  listenUserInput(){
    const promt = document.getElementById('promt');

    promt.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
        const command = promt.value;
        const commandToExecute = this.character.commands[command];

        if(commandToExecute){
          this.addNewTerminalLine(commandToExecute());
        }else{
          if(command === 'cls'){
            this.clearTerminal();
          }else{
            if(command == 'ls -a --network --devices'){
              this.totalComputers.forEach(computer => {
                this.addNewTerminalLine(`Computer at [${computer._id}]`);
              })
            }

            if(command.startsWith('ssh')){
              const pcDirection = command.split('@')[1];
              this.addNewTerminalLine(`Connected to computer at [${pcDirection}]`);
              this.currentComputer = pcDirection;
            }
          }
        }


        promt.value = '';
      }
    });
  }

  addNewTerminalLine(text){
    this.terminal.innerText += `${text}\n`;
  }

  clearTerminal(){
    this.terminal.innerText = '';
  }
}

confirm('La terminal es tu mejor herramienta para reclutar zombies. La vas a encontrar a la izquierda, conocela e infecta tantos PC como puedas');
const game = new Game();