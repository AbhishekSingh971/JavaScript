// Object literals
//  let car = {
//     name : 'Maruti 889',
//     toSpeed : 89,
//     run : function(){
//         console.log("car is running");
//     }
//  }
//  console.log(car);

//we have already seen constructor like these
//new Date();

//Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyse = function () {
        console.log(`This car is slower by ${200 - this.topSpeed}Km/H than mercedes`);
    }
}
car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('Maruti Alto', 80);
car3 = new GeneralCar('Merceder', 200);
console.log(car2);