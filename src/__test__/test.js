import  {  Daemon }  from '../daemon';
import  {  Magician }  from '../magician';

test('setAttack', () => {   
   let Mage = new Magician();
    Mage.setStoned(true);
    Mage.setAttack(2); 
    let result = Mage.attack;
    expect(result).toBe(85)});

test('setAttack', () => {   
    let DaemonPerson = new Daemon();
    DaemonPerson.setStoned(true);
    DaemonPerson.setAttack(2); 
    let result = DaemonPerson.attack;
    expect(result).toBe(85)});    
      
test('getAttack', () => {
    let Mage = new Magician();
    let result = Mage.getAttack();
    expect(result).toBe(100)});
  
test('getStoned', () => {
    let Mage = new Magician();
    let result = Mage.getStoned();
    expect(result).toBe(false)});

