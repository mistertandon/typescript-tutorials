/**
 * Below mentioned interface definition illustrate how we can validate static
 * side of class.
 */
interface TerretrialAnimalConstructor {

    new (name: string, rank: number, speed: number): TerretrialAnimalInterface;
}

/**
 * Below mentioned interface definition illustrate how we can validate instance
 * side of class.
 */
interface TerretrialAnimalInterface {

    name: string;
    rank: number;
    speed: number;

    getAnimalInformation(): string;
}

let createClassInstance: (classConstructorType: TerretrialAnimalConstructor, name: string, rank: number, speed: number) => TerretrialAnimalInterface =
    function(classConstructorType: TerretrialAnimalConstructor, name: string, rank: number, speed: number): TerretrialAnimalInterface {

        return new classConstructorType(name, rank, speed);
    }

/**
 * Lio class use to implement <TerretrialAnimalInterface>, by definig
 * constructor definition in such a way compiler will automatically set
 * class properties same as constructor parameters.
 */
class Lion implements TerretrialAnimalInterface {

    constructor(public name: string,public rank: number,public speed: number) {

    }

    public getAnimalInformation(): string {

        let outputString: string;

        outputString = `${this.name} use to run at ${this.speed} mph with rank ${this.rank}`;

        return outputString;
    }
}

let lionInstance: Lion;
lionInstance = createClassInstance(Lion, 'Lion', 1, 50);
console.log(lionInstance);

let lionInstanceOutput: string;
lionInstanceOutput = lionInstance.getAnimalInformation();
console.log(lionInstanceOutput);


