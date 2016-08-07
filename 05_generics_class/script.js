var getTerrestrialAnimalClassInstance = function (ctor, name, speed, rank) {
    return new ctor(name, speed, rank);
};
var TerrestrialAnimalClass = (function () {
    function TerrestrialAnimalClass(name, speed, rank) {
        this.name = name;
        this.speed = speed;
        this.rank = rank;
    }
    TerrestrialAnimalClass.prototype.getAnimalInfo = function () {
        var outputString;
        outputString = this.name + " have capability of reaching speed up to " + this.speed + " mph.\n        He stands on " + this.rank + " rank among worlds fastest animal.";
        return outputString;
    };
    ;
    return TerrestrialAnimalClass;
}());
var LionTerrestrialInstance;
LionTerrestrialInstance = getTerrestrialAnimalClassInstance(TerrestrialAnimalClass, 'Lion', 50, 'first');
