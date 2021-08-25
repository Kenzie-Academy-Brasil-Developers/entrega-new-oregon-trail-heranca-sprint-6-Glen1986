class Wagon {
    constructor(capacity, list) {
        this.capacity = capacity;
        this.list = [];
    }

     getAvailableSeatCount() {
         let total = this.capacity;
         return `lugares: ${this.capacity}`;
     }
     join(a) {
       if(this.capacity >= 1){
       this.list.push(a);
       this.capacity = this.capacity -1;
       }
       return this.capacity
   }
     shouldQuarantine(){
       const material = this.list;
       for(let key in material){
         console.log(material.key)
       }

       console.log(...material)
 /*      console.log(this.name)
       console.log(this.list)
       let saude = [, , this.isHealthy]
       console.log(saude)
       if(this.food === 0){
         return true;
                }
       return false;
         //retorna true si hay una persona enferma
  */ }
     totalFood(){
   //retorna a quantidade total de comida dos pasageiros
     }
}

module.exports = Wagon;
