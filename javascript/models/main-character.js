export class MainCharacter {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.points = 0;
    this.infectedComputers = [];
    this.powerUps = [];
    this.achievements = [];
    this.commands = {
      '--help': this.cmdHelp.bind(this),
      'last ~/temp/network/desk/delegates -l': this.cmdList.bind(this),
    };
  }

  addNewInfectedComputer(infectedComputer){
    this.infectedComputers.push(infectedComputer);
  }

  addNewPowerUp(powerUp){
    this.powerUps.push(powerUp);
  }

  addArchivements(addAchievement){
    this.achievements.push(addAchievement)
  }

  cmdHelp(){
    let output = '';
    for(let key of Object.keys(this.commands)){
      output += `${key}\n`;
    }

    output += `ssh ${this.name}@[ip_computer]\n`
    output += `scp ../apps/startup.bash ${this.name}@[ip_computer]\n`
    output += `ls -a --network --devices\n`

    return output;
  }

  cmdList(){
    let output;

    if(this.infectedComputers.length > 0){
      this.infectedComputers.forEach((pc) => output += `${pc._id}`);
    }else{
      output = 'Aún no tienes computadoras infectadas';
    }

    return output;
  }

  cmdInfect(){
    console.log('Infectando')
  }

  addCommand(title, value){
    this.commands = {
      ...this.commands, 
      title: value.bind(this)
    }
  }
}