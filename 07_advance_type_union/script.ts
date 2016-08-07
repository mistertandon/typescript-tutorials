/**
 * Below interface demonstrate function type with union type.
 * Rank parameter can be either string or number.
 */
interface terretrialAnimalInterface{
    
    (name: string, speed: number, rank: string|number): string;
}

let terretrialAnimalFunc: terretrialAnimalInterface;
terretrialAnimalFunc = function(name: string, speed: number, rank: string|number): string{
    
    let outputString: string;
    
    outputString = `{name} animal use to run at {speed} mph and having {} rank among worlds fastest animal.`;

    return outputString;
}

let terretrialAnimalFuncOutput: string;
/**
 * Third parameter i.e. rank will be of number type.
 */
terretrialAnimalFuncOutput = terretrialAnimalFunc('Lion', 50, 5);
console.log(terretrialAnimalFuncOutput);

/**
 * Third parameter i.e. rank will be of string type.
 */
terretrialAnimalFuncOutput = terretrialAnimalFunc('Lion', 50, 'fifth');
console.log(terretrialAnimalFuncOutput);