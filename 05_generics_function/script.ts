/**
 * Interface definition to define proptotype for a generic function.
 */
interface terrestrialAnimalInterface<W, X, Y> {

    (animalName: W, animalSpeed: X, animalRank: Y): string;
}

/**
 * Generic function i.e. terrestrialAnimal definition.
 * 
 * @param animalName: W [ Note: Data type of <W> is defined while callling
 * <terrestrialAnimal> function ]
 * 
 * @param animalSpeed: X [ Note: Data type of <X> is defined while callling
 * <terrestrialAnimal> function ]
 * @param animalRank: Y [ Note: Data type of <Y> is defined while callling
 * <terrestrialAnimal> function ]
 * 
 */
function terrestrialAnimal<W, X, Y>(animalName: W, animalSpeed: X, animalRank: Y): string {

    let outputString: string;

    outputString = `${animalName} is capable of reaching speed up to ${animalSpeed}. ${animalName}\n\
            having ${animalRank} rank among world's fastest aanimal.`;

    return outputString;
}

/**
 * Below code block demonstrate how to use <terrestrialAnimal> generic function
 * using <terrestrialAnimalInterface> interface.
 * Note : In lionTerrestrialAnimal function parameters values will be i.e.
 * X typeof string, Y typeof number, Z typeof string
 */
let lionTerrestrialAnimal: terrestrialAnimalInterface<string, number, string> = terrestrialAnimal;
let lionTerrestrialAnimalRes: string;
lionTerrestrialAnimalRes = lionTerrestrialAnimal('Lion', 50, 'seventh');

console.log(lionTerrestrialAnimalRes);


/**
 * Below code block demonstrate how to use <terrestrialAnimal> generic function
 * using <terrestrialAnimalInterface> interface.
 * Note : In <thomsonGazelleTerrestrialAnimal> function parameters values will be i.e.
 * X typeof string, Y typeof number, Z typeof string
 * 
 * Purpose of this example: Uncomment below piece of code to observe error as
 * we have defined <animalRank> is of string type, but we'll pass integer value.
 * 
 */
//let thomsonGazelleTerrestrialAnimal: terrestrialAnimalInterface<string, number, string>;
//thomsonGazelleTerrestrialAnimal('Lion', 45, 1);