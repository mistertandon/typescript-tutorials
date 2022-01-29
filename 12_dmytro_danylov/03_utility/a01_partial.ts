namespace PartialNS {
  /**
   * Some Type + Utility = New Type
   **/
  interface Starship {
    name: string;
    enableHyperjump: boolean;
  }
  /**
   * 1.1 - Partial<Type>
   * Constructs a type with all properties of Type set to optional.
   */

  /**
    * TypeScript throws an error for below 

      const updateStartshipA = (updatedStarshipObj: Starship) => void {};
      const updatedStarshipObjA = { name: "Star Trek" };
      updateStartshipA(updatedStarshipObjA);

      Error: 
      Argument of type '{ name: string; }' is not assignable to parameter of 
      type 'Starship'.
      Property 'enableHyperjump' is missing in type '{ name: string; }' 
      but required in type 'Starship'.ts(2345)
    */

  // Solution
  const updateStartshipB = (updatedStarshipObj: Partial<Starship>) => void {};
  const updatedStarshipObjB = { name: "Star Trek" };
  updateStartshipB(updatedStarshipObjB);
}
