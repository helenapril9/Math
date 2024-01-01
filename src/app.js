import  Character  from './character.js';
export class MathCustom extends Character {   
    constructor (name, type, attack) {
        super(name,type);
        this.attack = 0; 
        this.stoned = false;       
    }       
         getAttack(){
        return this.attack;        
}
    getStoned(){
        return this.stoned;        
}
    setStoned(stoned){
        this.stoned = stoned;        
}
    setAttack(distance){                
        function CoefficientCalc(distance) {                    
            if (distance <=5) {
                return  (distance - 1)/ 10;                              
            }
        }      
        let c = CoefficientCalc(distance)        
        this.attack = this.attackBase - c * this.attackBase;          
        if (this.stoned){                
            this.attack = this.attack - (Math.log2(distance) * 5);
    }       
}
}