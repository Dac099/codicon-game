export class MainCharacter {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.points = 0;
    this.infectedComputers = [];
    this.powerUps = [];
    this.achievements = [];
    this.commands = [];
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

  addCommands(commad){
    this.commands.push(commad)
  }
}