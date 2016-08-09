interface TerrestrialAnimalClassStaticInterface {

    new (name: string, speed: number, rank: number): TerrestrialAnimalClassInstanceInterface;
}

interface TerrestrialAnimalClassInstanceInterface {

    name: string;
    speed: number
    rank: number;

    animalDescription(): string;
}

let TerrestrialAnimalFunction: (ctor: TerrestrialAnimalClassStaticInterface, name: string, speed: number, rank: number) => TerrestrialAnimalClassInstanceInterface =
    function(ctor: TerrestrialAnimalClassStaticInterface, name: string, speed: number, rank: number): TerrestrialAnimalClassInstanceInterface {

        return new ctor(name, speed, rank);
    }

function propertyNameDecorator(target: any, propertyKey: string) {

    var _nameVar: string;
    var getter: any;
    var setter: any;

    getter = function() {

        return this._nameVar;
    }

    /**
     * namePropVal: Name property value.
     */
    setter = function(namePropVal) {

        return this._nameVar = namePropVal;
    }

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true

    });
}

class TerrestrialAnimalClass implements TerrestrialAnimalClassInstanceInterface {

    @propertyNameDecorator
    public name: string;

    constructor(name: string, public speed: number, public rank: number) {

        this.name = name;
    }

    public animalDescription(): string {

        let outputString: string;

        outputString = `${this.name} use to run at ${this.speed} MPH, having ${this.name} rank among fastest animal. `;

        return outputString;
    }
}

let TerrestrialAnimalInstance: TerrestrialAnimalClass;
let TerrestrialAnimalRes: string;
TerrestrialAnimalInstance = TerrestrialAnimalFunction(TerrestrialAnimalClass, 'Lion', 55, 5);

TerrestrialAnimalRes = TerrestrialAnimalInstance.animalDescription();
console.log(TerrestrialAnimalRes);