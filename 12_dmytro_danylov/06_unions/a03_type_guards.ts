/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a03_type_guards.ts
 */
namespace TypeGuardsNS {
  /**
   * We use type guards to differentiate between the possible value of the union types.
   */
  class Car {
    drive() {
      console.log(`Let's drive Car`);
    }
  }

  class Bike {
    ride() {
      console.log(`Let's ride Bike`);
    }
  }
  console.log(`One way of using type guarding: using moveA function`);
  function moveA(vechicle: Car | Bike): void {
    if (vechicle instanceof Car) {
      vechicle.drive();
    }

    if (vechicle instanceof Bike) {
      vechicle.ride();
    }
  }

  let carInstance: Car = new Car();
  let bikeInstance: Bike = new Bike();

  moveA(carInstance);
  moveA(bikeInstance);

  console.log(`\n\nAnother way of using type guarding: using moveB function`);
  function moveB(vechicle: Car | Bike): void {
    if ((vechicle as Car).drive) {
      (vechicle as Car).drive();
    }

    if ((vechicle as Bike).ride) {
      (vechicle as Bike).ride();
    }
  }

  moveB(carInstance);
  moveB(bikeInstance);
}
