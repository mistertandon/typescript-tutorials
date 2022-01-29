/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a01_intersection.ts
 */
namespace IntersectionANS {
  /**
   * In TypeScript, an intersection type combines multiple types into one.
   */
  interface Person {
    name: string;
  }

  interface Contact {
    email: string;
  }

  let personContact: Person & Contact = {
    name: "parvesh",
    email: "enggparveshtandon@gmail.com",
  };

  function displayPersonContact(personContactObj: Person & Contact): void {
    console.log(`
      Person name: ${personContactObj.name}
      Person email: ${personContactObj.email}
      `);
  }

  displayPersonContact(personContact);
}
