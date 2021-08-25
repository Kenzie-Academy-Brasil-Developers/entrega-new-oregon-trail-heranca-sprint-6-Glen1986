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
/*
 *class Dog {
   constructor(name, breed, isGoodBoy) {
      this.name = name;
      this.breed = breed;
      this.isGoodBoy = isGoodBoy;
   }

   sit() {
       // sitting code here
   }
}

class GuardDog extends Dog {
   constructor(name, breed, isGoodBoy, attackWord) {
      super(name, breed, isGoodBoy)
      this.attackWord = attackWord;
   }

   bark() {
      // barking code here
   }
}
 *
 */
