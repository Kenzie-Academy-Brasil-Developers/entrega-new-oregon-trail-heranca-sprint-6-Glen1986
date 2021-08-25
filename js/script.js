class Traveler {
    constructor(name, food, isHealthy) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
   hunt() {
    return `agora, ${this.name} tem mais ${this.food++} comida` ;  // sitting code here
   }
   eat() {
     this.food--
     if( this.food > 0 ){
     return `agora ${this.name} tem ${this.food} `;  // ${this.isHealthy = true}fetching code here
     }else if(this.food == 0){
     return `${this.name} esta ${this.isHealthy = false}`
     }
  }
};
class Hunter extends Traveler{
  //reWrite food = 5
  constructor(name, food, isHealthy){
    super(name, food, isHealthy)
    this.food = 5;
  }
  hunt(){
    this.food = this.food + 5;
    return `${this.name} ${this.food}`; 
  }
  eat() {
    this.food = this.food - 2;
   if( this.food > 0 ){
     return `agora ${this.name} tem ${this.food} `;  // ${this.isHealthy = true}fetching code here
      }
   else if(this.food == 0){
     return `${this.name} esta ${this.isHealthy = false}`
    }
  }
  giveFood(a){
    this.food = this.food - 1;
  //  console.log(this.food)
   return `agora ${a.name} tem ${a.food++} ` 
  }
}
class Doctor extends Traveler{
constructor(name, food, isHealthy){
    super(name, food, isHealthy);
  }
  heal(a){
    return a.isHealthy = true;
  }
}
const hunter = new Hunter('Jhon', 5, true);
const doctor = new Doctor('House', 1,true);
