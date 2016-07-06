/**
 * PronghornAntelope interface demonstrate how we can define function prototype
 * using interface.
 */
interface PronghornAntelope {

    (AnimalName: string, AnimalSpeed: number, AnimalRank: number): string;
}

let TerrestrialAnimalFunc: PronghornAntelope;
TerrestrialAnimalFunc = function(AnimalName: string, AnimalSpeed: number, AnimalRank: number): string{
    
    let output = `${AnimalName} having rank ${AnimalRank}, use to run at ${AnimalSpeed} mph`;
    
    return output;
}

let funcResult = TerrestrialAnimalFunc("Pronghorn Antelope", 60, 5);
console.log(funcResult);