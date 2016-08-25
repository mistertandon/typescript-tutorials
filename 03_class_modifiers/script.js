var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * How to define <basic class> using javascript.
 *
 */
var Animal = (function () {
    function Animal(animalName, animalSpeed) {
        this.name = animalName;
        this.speed = animalSpeed;
    }
    Animal.prototype.characteristic = function () {
        var aCharateristic = null;
        aCharateristic = this.name + " can run at " + this.speed + " mph.";
        console.log(aCharateristic);
    };
    return Animal;
}());
var Greyhound = new Animal('Greyhound', 43);
Greyhound.characteristic();
/**
 * Exhibit class inheritence.
 *
 * A. Class <NAOstrich> extend <Animal>
 */
var NAOstrich = (function (_super) {
    __extends(NAOstrich, _super);
    function NAOstrich(animalName, animalSpeed) {
        _super.call(this, animalName, animalSpeed);
    }
    return NAOstrich;
}(Animal));
var NAOstrichInstance = new NAOstrich('North African Ostrich', 40);
NAOstrichInstance.characteristic();
var PronghornAntelope = (function () {
    function PronghornAntelope(animalName, animalSpeed) {
        this.name = null;
        this.speed = null;
        this.name = animalName;
        this.speed = animalSpeed;
    }
    PronghornAntelope.prototype.characteristic = function () {
        var aCharateristic = null;
        aCharateristic = this.name + " can run at " + this.speed + " mph.";
        console.log(aCharateristic);
    };
    return PronghornAntelope;
}());
var PronghornAntelopeInstance = new PronghornAntelope('Pronghorn Antelope', 55);
PronghornAntelopeInstance.characteristic();
/**
 * Below assignment of NAOstrichInstance to Greyhound is a valid as originating
 * of both instances are from same class.
 */
NAOstrichInstance = Greyhound;
NAOstrichInstance.characteristic();
Greyhound.characteristic();
/**
 * Note : Uncomment following statemnt will cause an error as originating
 * of both instance are from two different classes.
 */
// Greyhound = PronghornAntelopeInstance; 
