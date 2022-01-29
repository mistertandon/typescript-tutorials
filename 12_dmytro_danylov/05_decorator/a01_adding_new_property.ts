/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a01_adding_new_property.ts
 */
namespace AddingNewPropertyNS {
  function SelfDriving(constructorFunction: Function) {
    console.log(`-- Decorator function i.e. SelfDriving invoked --`);
    constructorFunction.prototype.selfDrivable = true;
  }

  @SelfDriving
  class Car {
    private _make: string;

    constructor(make: string) {
      console.log(`-- Car constructor invoked --`);
      this._make = make;
    }

    displayCarName(): void {
      console.log(`Car name is : ${this._make}`);
    }

    isAutomated(): void {
      console.log(
        `Is Car self drivable (Access within class) : ${this["selfDrivable"]}`
      );
    }
  }

  let carInstance = new Car("BMW");
  carInstance.displayCarName();
  console.log(
    `Is Car self drivable (Access property on instance) : ${carInstance["selfDrivable"]}`
  );
  carInstance.isAutomated();
}
