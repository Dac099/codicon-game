export class Device{

  static deviceCounter = 1;

  constructor(){
    this._id = Device.deviceCounter * new Date().getMilliseconds();
    this.isInfected = false;
    Device.deviceCounter += 1;
  }
}