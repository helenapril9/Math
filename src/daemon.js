import  {  MathCustom }  from './app.js';
export class Daemon extends MathCustom {
    constructor(name, type = 'Daemon') {
        super(name, type);
        this.attack = 100;   
        this.attackBase = this.attack;     
    }
}

