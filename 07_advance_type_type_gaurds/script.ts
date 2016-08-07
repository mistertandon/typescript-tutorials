interface terretrialAnimalStaticSide {

    new (name: string, speed: number, rank: number): terretrialAnimalInstanceSide;
}

interface terretrialAnimalInstanceSide {

    name: string;
    speed: number;
    rank: number;

    runningInformation(): string;
}

type terretrialAnimalTypeFunc = (terretrialAnimalCtor: terretrialAnimalStaticSide, name: string, speed: number, rank: number) => terretrialAnimalInstanceSide;

var terretrialAnimalFactory: terretrialAnimalTypeFunc =
    function(terretrialAnimalCtor: terretrialAnimalStaticSide, name: string, speed: number, rank: number): terretrialAnimalInstanceSide {

        return new terretrialAnimalCtor(name, speed, rank);
    }

interface aquaticAnimalStaticSide {

    new (name: string, speed: number, rank: string | number): aquaticAnimalInstanceSide;
}

interface aquaticAnimalInstanceSide {

    name: string;
    speed: number;
    rank: number;

    swimmingInformation(): string;
}

type aquaticAnimalTypeFunc = (aquaticAnimalCtor: aquaticAnimalStaticSide, name: string, speed: number, rank: number) => aquaticAnimalInstanceSide;

var aquaticAnimalFactory: aquaticAnimalTypeFunc =
    function(aquaticAnimalCtor: aquaticAnimalStaticSide, name: string, speed: number, rank: number): aquaticAnimalInstanceSide {

        return new aquaticAnimalCtor(name, speed, rank);
    }

class terrestrialAnimalClass implements terretrialAnimalInstanceSide {

    constructor(public name: string, public speed: number, public rank: number) {

    }

    public runningInformation(): string {

        let outputString: string;

        outputString = `{this.name} animal use to run at {this.speed} mph and having {this.rank} rank among worlds fastest animal.`;

        return outputString;
    }
}

class aquaticAnimalClass implements aquaticAnimalInstanceSide {

    constructor(public name: string, public speed: number, public rank: number) {

    }

    public swimmingInformation(): string {

        let outputString: string;

        outputString = `{this.name} animal use to swim at {this.speed} mph and having {this.rank} rank among worlds fastest swimmer animal.`;

        return outputString;
    }
}

function getClassInstance(): aquaticAnimalClass|terrestrialAnimalClass{
    
    const HALF = 0.5;
    let randomNumber: number;
    
    randomNumber = Math.random();
    
    return (randomNumber > HALF)? terretrialAnimalFactory(terrestrialAnimalClass, 'Lion', 50, 5):
                                    aquaticAnimalFactory(aquaticAnimalClass, 'Fish', 2, 100);
}

type animalClassType = terrestrialAnimalClass | aquaticAnimalClass;

let classInstance: animalClassType;
classInstance = getClassInstance();
console.log(classInstance);

function isAquaticAnimalClass(animalClassTypeRecog: animalClassType): animalClassTypeRecog is aquaticAnimalClass{
    
    return (<aquaticAnimalClass>animalClassTypeRecog).swimmingInformation !== undefined;
}

let isAquaticAnimalClassInstance: boolean;
isAquaticAnimalClassInstance = isAquaticAnimalClass(classInstance);
console.log(isAquaticAnimalClassInstance);


