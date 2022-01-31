/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a01_generic_classes.ts
 */
namespace GenericClassesNS {
  class List<T> {
    private data: T[] = [];

    constructor(...elements: T[]) {
      this.data = elements;
    }

    add(element: T): void {
      this.data.push(element);
    }

    getData(): T[] {
      return this.data;
    }
  }

  let listInstanceTypeNumber: List<number> = new List(1, 2, 3, 4);
  listInstanceTypeNumber.add(5);

  let dataA = listInstanceTypeNumber.getData();
  console.log(`listInstanceTypeNumber data
  ${JSON.stringify(dataA)}
  `);

  let listInstanceTypeString: List<string> = new List("Cricket", "Hockey");
  listInstanceTypeString.add("Football");

  let dataB = listInstanceTypeString.getData();
  console.log(`listInstanceTypeNumber data
  ${JSON.stringify(dataB)}
  `);
}
