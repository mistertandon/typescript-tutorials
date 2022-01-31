/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a02_generic_interface.ts
 */

namespace GenericInterfaceNS {
  interface IPair<T, U> {
    first: T;
    second: U;
  }

  type Person = {
    name: string;
    age: number;
  };

  type Background = {
    political: boolean;
    educational: boolean;
    sports: boolean;
  };

  const pairTypeAVariable: IPair<string, number> = {
    first: "Generic Interface",
    second: 5,
  };

  const pairTypeBVariable: IPair<Person, Background> = {
    first: {
      name: "John",
      age: 25,
    },
    second: {
      political: false,
      educational: true,
      sports: true,
    },
  };
}
