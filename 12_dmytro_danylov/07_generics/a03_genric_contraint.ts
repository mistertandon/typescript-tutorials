/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a03_genric_contraint.ts
 */

namespace GenericConstraintNS {
  interface IShape {
    draw(): void;
  }

  class Circle implements IShape {
    draw(): void {
      console.log(`Drawing Circle`);
    }
  }

  class Rectangle implements IShape {
    draw(): void {
      console.log(`Drawing Rectangle`);
    }
  }

  function drawShape<S extends IShape[]>(shapes: S) {
    shapes.forEach((shape) => {
      shape.draw();
      console.log("\n");
    });
  }

  let circleShape: IShape = new Circle();
  let rectangleShape: IShape = new Rectangle();

  drawShape([circleShape, rectangleShape]);
}
