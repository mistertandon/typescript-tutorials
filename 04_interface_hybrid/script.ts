/**
 * Below code block illustrate how we can hybrid interface prototype.
 */
interface TerrestrialAnimalInfo{
    
    (name: string, speed: number, rank: number): string;

    getRankStatus(rank: number): string;
}

/**
 * Below code block demostrate how we can define function in typescript.
 */
let AnimalInfoFunc: (AnimalName: string, AnimalSpeed: number, AnimalRank: number) => TerrestrialAnimalInfo = 
function(AnimalName: string, AnimalSpeed: number, AnimalRank: number): TerrestrialAnimalInfo{
    
   var TerrestrialAnimal = <TerrestrialAnimalInfo>function(AnimalName: string, AnimalSpeed: number, AnimalRank: number): string{
        
        let retString: string;
        
        retString = `${AnimalName} use to run at ${AnimalSpeed} mph.`;

        return retString;
    }
    
    TerrestrialAnimal.getRankStatus = function(rank: number): string {
        
        let compRes: string;

        compRes = (rank > 5)?' Greater ':' lesser ';
        
        let outputStatement: string;

        outputStatement = `rank is ${compRes} then ${rank}`;
        
        return outputStatement;
    }
    
    return TerrestrialAnimal;
}

let AnimalInfoFuncResult: TerrestrialAnimalInfo;
 AnimalInfoFuncResult = AnimalInfoFunc('Blue Wildebeest', 50, 6);
 console.log(AnimalInfoFuncResult);
 
let outputStatement: string;
outputStatement = AnimalInfoFuncResult('Blue Wildebeest - A', 50, 6);
console.log(outputStatement);