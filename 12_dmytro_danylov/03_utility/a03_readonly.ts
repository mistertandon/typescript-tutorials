namespace ReadOnly {
  interface Coordinates {
    x: number;
    y: number;
  }

  const coordObj: Readonly<Coordinates> = {
    x: 10,
    y: 20,
  };

  /**
    TypeScript throws an error for below statement
    
    coordObj.x = 25;

    Error:
    Cannot assign to 'x' because it is a read-only property.
   */
}
