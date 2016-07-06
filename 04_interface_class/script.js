var createClassInstance = function (classConstructorType, name, rank, speed) {
    return new classConstructorType(name, rank, speed);
};
/**
 * Lio class use to implement <TerretrialAnimalInterface>, by definig
 * constructor definition in such a way compiler will automatically set
 * class properties same as constructor parameters.
 */
var Lion = (function () {
    function Lion(name, rank, speed) {
        this.name = name;
        this.rank = rank;
        this.speed = speed;
    }
    Lion.prototype.getAnimalInformation = function () {
        var outputString;
        outputString = this.name + " use to run at " + this.speed + " mph with rank " + this.rank;
        return outputString;
    };
    return Lion;
}());
var lionInstance;
lionInstance = createClassInstance(Lion, 'Lion', 1, 50);
console.log(lionInstance);
var lionInstanceOutput;
lionInstanceOutput = lionInstance.getAnimalInformation();
console.log(lionInstanceOutput);
