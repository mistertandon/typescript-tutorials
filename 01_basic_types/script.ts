/**
 * Variable <bIsHumnan> is of "boolean" data-type.
 */
let bIsHumnan: boolean = true;

/**
 * Variable <fPersonStrngth> is of "float" data-type
 */
let fPeopleStrngth: number = 25;
console.log('Variable : fPeopleStrngth = ' + fPeopleStrngth);

/**
 * Variable <sPersonName> is of "string" data-type.
 */
let sPersonName: string = 'Parvesh';
console.log('Variable : sPersonName = ' + sPersonName);

/**
 * Variable <sDialouge> is of "string template" type.
 */
let sDialouge: string = `People strength was ${fPeopleStrngth}\n\
${ sPersonName} will do something wonder`;
console.log('Variable : sDialouge = ' + sDialouge);

/**
 * Variable <aBooleanArray> is an array, contained only "bool" type value.
 */
let aBooleanArray: boolean[] = [true, false];
console.log(aBooleanArray);

/**
 * Variable <aStringArray> is an array, contained only "string" type value.
 */
let aStringArray: Array<string> = ['String A', 'String B', 'String C'];
console.log(aStringArray);

/**
 * Variable <aNumberArray> is an array, contained only "number" type value.
 */
let aNumberArray: number[] = [5, 4];
console.log(aNumberArray);

/**
 * Variable <aMixArray> is an array, can contain value either of "number", "string" OR
 * "boolean".
 * 
 * Note :
 * A: <aMixArray[0]> index must contain value having "number" data-type.
 * B: <aMixArray[1]> index must contain value having "string" data-type.
 * C: <aMixArray[2]> index must contain value having "boolean" data-type.
 * D: Indices greater then 2 i.e. <aMixArray[3], aMixArray[4]....> can have
 * value either of  "number", "string" OR "boolean" data-type.
 * 
 */
let tMixArray: [number, string, boolean] = [9.58, 'Usain Bolt', true];
tMixArray[4] = "19.19";
tMixArray[3] = "Usain Bolt";
tMixArray[5] = true;

for (let index in tMixArray) {
    console.log('aMixArray[' + index + '] = ' + tMixArray[index]);
}

enum eAnimal {Lion = 1, Cat, Parrot };
let sAnimalLion: eAnimal = eAnimal.Lion;
let sAnimalCat: string = eAnimal[2];
console.log('Valiable: eAnimal = ');
console.log(eAnimal);
console.log('');
console.log('Valiable: sAnimalLion = ' + sAnimalLion);
console.log('Valiable: sAnimalCat = ' + sAnimalCat);

for(var sAnimalName in eAnimal ){
    console.log(sAnimalName);
}