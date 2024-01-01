import  {  MathCustom }  from './app.js';
export class Magician extends MathCustom {
    constructor(name = "Magician", type = 'Magician' ) {
        super(name, type );
        this.attack = 100;         
        this.attackBase = this.attack;
    } 
}