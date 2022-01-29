/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a09_instancetype.ts
 */
namespace instancetypeNS {
  /**
   * InstanceType<Type>
   * Constructs a type consisting of the instance type of a constructor function in Type
   */
  type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

  function Displayable<BaseClass extends Constructable<{}>>(base: BaseClass) {
    return class extends base {};
  }

  class User {
    constructor(public name: string) {}

    displayName() {
      console.log(`Name: ${this.name}`);
    }
  }

  class Vehicle {
    constructor(public name: string) {}

    displayName() {
      console.log(`Name: ${this.name}`);
    }
  }

  const DisplayableUserClass = Displayable(User);
  const DisplayableVehicleClass = Displayable(Vehicle);
  type UserType = InstanceType<typeof DisplayableUserClass>;
  type VechicleType = InstanceType<typeof DisplayableVehicleClass>;

  class Profile {
    user: UserType;
    vechicle: VechicleType;

    constructor(user: UserType, vechicle: VechicleType) {
      this.user = user;
      this.vechicle = vechicle;
    }
  }

  let userInstance: UserType = new DisplayableUserClass("Parvesh");
  let vechicleInstance: VechicleType = new DisplayableUserClass("BMW");
  let profileInstance = new Profile(userInstance, vechicleInstance);

  profileInstance.user.displayName();
  profileInstance.vechicle.displayName();
}
