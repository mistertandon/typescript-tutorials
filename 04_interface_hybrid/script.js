var AnimalInfoFunc = function (AnimalName, AnimalSpeed, AnimalRank) {
    var TerrestrialAnimal = function (AnimalName, AnimalSpeed, AnimalRank) {
        var retString;
        retString = AnimalName + " use to run at " + AnimalSpeed + " mph.";
        return retString;
    };
    TerrestrialAnimal.getRankStatus = function (rank) {
        var compRes;
        compRes = (rank > 5) ? ' Greater ' : ' lesser ';
        var outputStatement;
        outputStatement = "rank is " + compRes + " then " + rank;
        return outputStatement;
    };
    return TerrestrialAnimal;
};
var AnimalInfoFuncResult = AnimalInfoFunc('Blue Wildebeest', 50, 6);
console.log(AnimalInfoFuncResult);
var outputStatement = AnimalInfoFuncResult('Blue Wildebeest - A', 50, 6);
console.log(outputStatement);
