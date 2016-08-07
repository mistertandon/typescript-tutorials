var terretrialAnimalFactory = function (terretrialAnimalCtor, name, speed, rank) {
    return new terretrialAnimalCtor(name, speed, rank);
};
var aquaticAnimalFactory = function (aquaticAnimalCtor, name, speed, rank) {
    return new aquaticAnimalCtor(name, speed, rank);
};
var terrestrialAnimalClass = (function () {
    function terrestrialAnimalClass(name, speed, rank) {
        this.name = name;
        this.speed = speed;
        this.rank = rank;
    }
    terrestrialAnimalClass.prototype.runningInformation = function () {
        var outputString;
        outputString = "{this.name} animal use to run at {this.speed} mph and having {this.rank} rank among worlds fastest animal.";
        return outputString;
    };
    return terrestrialAnimalClass;
}());
var aquaticAnimalClass = (function () {
    function aquaticAnimalClass(name, speed, rank) {
        this.name = name;
        this.speed = speed;
        this.rank = rank;
    }
    aquaticAnimalClass.prototype.swimmingInformation = function () {
        var outputString;
        outputString = "{this.name} animal use to swim at {this.speed} mph and having {this.rank} rank among worlds fastest swimmer animal.";
        return outputString;
    };
    return aquaticAnimalClass;
}());
function getClassInstance() {
    var HALF = 0.5;
    var randomNumber;
    randomNumber = Math.random();
    return (randomNumber > HALF) ? terretrialAnimalFactory(terrestrialAnimalClass, 'Lion', 50, 5) :
        aquaticAnimalFactory(aquaticAnimalClass, 'Fish', 2, 100);
}
var classInstance;
classInstance = getClassInstance();
console.log(classInstance);
function isAquaticAnimalClass(animalClassTypeRecog) {
    return animalClassTypeRecog.swimmingInformation !== undefined;
}
var isAquaticAnimalClassInstance;
isAquaticAnimalClassInstance = isAquaticAnimalClass(classInstance);
console.log(isAquaticAnimalClassInstance);
