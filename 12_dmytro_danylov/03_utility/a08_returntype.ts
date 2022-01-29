namespace returntypeNS {
  /**
   * ReturnType<Type>
   * Constructs a type consisting of the return type of function Type.
   */
  interface StarshipProperties {
    color?: "blue" | "red" | "green";
  }

  function paintStartship(
    id: number,
    color: Pick<Required<StarshipProperties>, "color">
  ) {
    return {
      id,
      color,
    };
  }

  /**
    Upon compilation answer would be

    type paintStartshipType = {
        id: number;
        color: Pick<Required<StarshipProperties>, "color">;
    }
   */
  type paintStartshipType = ReturnType<typeof paintStartship>;
}
