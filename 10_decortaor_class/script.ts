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

/**
 * @pCCtor Any Passed class i.e. TerrestrialAnimalClass type class constructor.
 */
function TerrestrialAnimalClassDecorator(pCCtor: any) {
    console.log('log1');
    console.log(pCCtor);
    /**
     * pCCtorRef: Passed class constructor reference.
     */
    let pCCtorRef: any;
    pCCtorRef = pCCtor;

    function createNewClassInstance(constructorParam, argsParam) {

        /**
         * @nICPVar: New instance creating process variable.
         */
        let nICPVar: any = function() {

            return constructorParam.apply(this, argsParam);
        };

        nICPVar.prototype = constructorParam.prototype;

        return new nICPVar();
    }

    let nCInst: any;
    nCInst = function(...args) {

        return createNewClassInstance(pCCtor, args);
    }


    nCInst.prototype = pCCtor.prototype;

    return nCInst;

}

@TerrestrialAnimalClassDecorator
class TerrestrialAnimalClass implements TerrestrialAnimalClassInstanceInterface {

    constructor(public name: string, public speed: number, public rank: number) {

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