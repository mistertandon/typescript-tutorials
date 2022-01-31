/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a04_discriminated_unions.ts
 */
namespace DiscriminatedUnionNS {
  interface IPrinter {
    pageOrientation: string;
    printLandscape?(): void;
    printPortrait?(): void;
  }

  class LandscapePrinter implements IPrinter {
    public pageOrientation: string = "landscape";

    printLandscape(): void {
      console.log(`Printing landscape view`);
    }
  }

  class PortraitPrinter implements IPrinter {
    public pageOrientation: string = "portrait";

    printPortrait(): void {
      console.log(`Printing portrait view`);
    }
  }

  function print(printer: IPrinter): void {
    switch (printer.pageOrientation) {
      case "landscape":
        printer.printLandscape();
        break;
      case "portrait":
        printer.printPortrait();
        break;
    }
  }

  let landscapePrinterInstance: LandscapePrinter = new LandscapePrinter();
  let portraitPrinterInstance: PortraitPrinter = new PortraitPrinter();

  print(landscapePrinterInstance);
  print(portraitPrinterInstance);
}
