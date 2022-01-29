namespace RequiredNS {
  interface Starship {
    name?: string;
    enableHyperjump?: boolean;
  }
  /**
   * 1.2 - Required<Type>
   * Constructs a type consisting of all properties of Type set to required.
   */

  /**
    TypeScript throws an error for below 

    const updateStartship = (updatedStarshipObj: Required<Starship>) => void {};
    const updatedStarshipObj = { name: "Star Trek" };
    updateStartship(updatedStarshipObj);

    Error: 
        Argument of type '{ name: string; }' is not assignable to parameter
        of type 'Required<Starship>'.
        Property 'enableHyperjump' is missing in type '{ name: string; }'
        but required in type 'Required<Starship>'.
    */

  // Solution
  const updateStartship = (updatedStarshipObj: Required<Starship>) => void {};
  const updatedStarshipObj = { name: "Star Trek", enableHyperjump: true };
  updateStartship(updatedStarshipObj);
}
