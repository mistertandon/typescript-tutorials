/**
 * Variable <bIsHumnan> is of "boolean" data-type.
 */
var bIsHumnan = true;
/**
 * Variable <fPersonStrngth> is of "float" data-type
 */
var fPeopleStrngth = 25;
console.log('Variable : fPeopleStrngth = ' + fPeopleStrngth);
/**
 * Variable <sPersonName> is of "string" data-type.
 */
var sPersonName = 'Parvesh';
console.log('Variable : sPersonName = ' + sPersonName);
/**
 * Variable <sDialouge> is of "string template" type.
 */
var sDialouge = "People strength was " + fPeopleStrngth + "\n" + sPersonName + " will do something wonder";
console.log('Variable : sDialouge = ' + sDialouge);
/**
 * Variable <aBooleanArray> is an array, contained only "bool" type value.
 */
var aBooleanArray = [true, false];
console.log(aBooleanArray);
/**
 * Variable <aStringArray> is an array, contained only "string" type value.
 */
var aStringArray = ['String A', 'String B', 'String C'];
console.log(aStringArray);
/**
 * Variable <aNumberArray> is an array, contained only "number" type value.
 */
var aNumberArray = [5, 4];
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
var tMixArray = [9.58, 'Usain Bolt', true];
tMixArray[4] = "19.19";
tMixArray[3] = "Usain Bolt";
tMixArray[5] = true;
for (var index in tMixArray) {
    console.log('aMixArray[' + index + '] = ' + tMixArray[index]);
}
var eAnimal;
(function (eAnimal) {
    eAnimal[eAnimal["Lion"] = 1] = "Lion";
    eAnimal[eAnimal["Cat"] = 2] = "Cat";
    eAnimal[eAnimal["Parrot"] = 3] = "Parrot";
})(eAnimal || (eAnimal = {}));
;
var sAnimalLion = eAnimal.Lion;
var sAnimalCat = eAnimal[2];
console.log('Valiable: eAnimal = ');
console.log(eAnimal);
console.log('');
console.log('Valiable: sAnimalLion = ' + sAnimalLion);
console.log('Valiable: sAnimalCat = ' + sAnimalCat);
for (var sAnimalName in eAnimal) {
    console.log(sAnimalName);
}
