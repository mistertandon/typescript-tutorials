/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a01_extends.ts
 */

namespace ExtendsGenericClasses {
  interface Person {
    name: string;
    age: number;
  }
  class Collection<T extends { name: string }> {
    protected items: T[] = [];

    constructor(items: T[]) {
      this.items.push(...items);
    }

    displayItems(): void {
      console.log(`Stringify JSON : ${JSON.stringify(this.items)}`);
    }
  }

  class SearchableCollection<T extends { name: string }> extends Collection<T> {
    find(name: string): T | undefined {
      return this.items.find((item) => item.name === name);
    }
  }

  let SearchableCollectionInst = new SearchableCollection<Person>([
    {
      name: "Virat",
      age: 30,
    },
  ]);

  SearchableCollectionInst.displayItems();
}
