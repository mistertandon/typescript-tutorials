interface FastestAnimal {

    name: string;
    speed: number;
    rank?: number;
}

/**
 * Calling a function. while passing parameters their types will be validated
 * using interface.
 */
let PeregrineFalcon: (AnimalStats: FastestAnimal) => boolean =
    function(AnimalStats: FastestAnimal): boolean {

        console.log(AnimalStats.name + " runs at " + AnimalStats.speed + " mph");

        return true;
    }

PeregrineFalcon({ "name": "Peregrine Falcon", "speed": 200 });
/**
 * Below statements will cause an error as passed speed type is of string
 * instead of number.
 */
// PeregrineFalcon({"name":"Peregrine Falcon", "speed":"200"});

/**
 * Following function demonstrate function parameters validtion using
 * interface with optional parameter.
 */
let FrigateBird: (AnimalStats: FastestAnimal) => boolean =
    function(AnimalStats: FastestAnimal): boolean {

        console.log(AnimalStats.name + " runs at " + AnimalStats.speed + " mph");

        if (AnimalStats.rank) {

            console.log(AnimalStats.name + " having rank " + AnimalStats.rank + " among fastest animal.");
        }

        return true;
    }
FrigateBird({ "name": "Frigate Bird", "speed": 200, "rank": 2 });


interface FastestAquaticAnimal {

    name: string;
    speed?: number;
}

/**
 * While calling <SailFish> function, parameter will validate against
 * FastestAquaticAnimal interface i.e. parameter object must satisfied
 * FastestAquaticAnimal interface. In addition to this, function return type
 * object also will be validated against FastestAquaticAnimal interface and
 * returned object must satisfied FastestAquaticAnimal interface.
 */
let SailFish: (AquaticAnimalStats: FastestAquaticAnimal) => FastestAquaticAnimal =
    function(AquaticAnimalStats: FastestAquaticAnimal): FastestAquaticAnimal {

        let returnAnimalStats = { name: '', speed: 65 };

        returnAnimalStats.name = AquaticAnimalStats.name;

        if (AquaticAnimalStats.speed) {
            returnAnimalStats.speed = AquaticAnimalStats.speed;

        }

        return returnAnimalStats;
    }
/**
 * Below statement will cause an error as rank property doesn't exist into
 * FastestAquaticAnimal interface.
 */
//let SailFishResult_A = SailFish({name: '', speed: 65, rank:1});
let SailFishResult_B = SailFish({ name: 'Sail', speed: 65 });
console.log(SailFishResult_B);

/**
 * FastestTerrestrialAnimal interface contains optional property <[propName: string]>
 * i.e. it may contain optional property having name of string type which can
 * contain any type of value.
 */
interface FastestTerrestrialAnimal {

    name: string;
    speed?: number;
    [key: string]: any;
}

let Cheetah: (TerrestrialAnimalStats: FastestTerrestrialAnimal) => FastestTerrestrialAnimal =
    function(TerrestrialAnimalStats: FastestTerrestrialAnimal): FastestTerrestrialAnimal {

        let returnAnimalStats = { name: TerrestrialAnimalStats.name, speed: 61, rank: '1' };
        
        if(TerrestrialAnimalStats['rank']){

            returnAnimalStats['rank'] = TerrestrialAnimalStats['rank'];
        }

        return returnAnimalStats;
    }

let CheetahResult_A = Cheetah({ rank: 4, name: 'Cheetah', speed: 61 } as FastestTerrestrialAnimal);
console.log(CheetahResult_A);