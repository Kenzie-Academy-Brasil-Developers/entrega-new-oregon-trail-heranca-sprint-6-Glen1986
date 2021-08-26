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
}

module.exports = Traveler;

