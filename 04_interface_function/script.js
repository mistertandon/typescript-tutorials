var TerrestrialAnimalFunc;
TerrestrialAnimalFunc = function (AnimalName, AnimalSpeed, AnimalRank) {
    var output = AnimalName + " having rank " + AnimalSpeed + ", use to run at " + AnimalSpeed + " mph";
    return output;
};
var funcResult = TerrestrialAnimalFunc("Pronghorn Antelope", 60, 5);
console.log(funcResult);
