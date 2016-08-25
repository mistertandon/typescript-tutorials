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
    function Animal(animalName) {
        this.name = animalName;
    }
    Animal.prototype.speedMph = function (animalSpeed) {
        this.speed = animalSpeed;
    };
    Animal.prototype.characteristic = function () {
        var aCharateristic = null;
        aCharateristic = this.name + " can run at " + this.speed + " mph.";
        console.log(aCharateristic);
    };
    return Animal;
}());
var Greyhound = new Animal('Greyhound');
Greyhound.speedMph(43);
Greyhound.characteristic();
/**
 * Exhibit class definition to apply <over-ridden base class method>.
 * In below mentioned example :
 *
 * A. Class <NAOstrich> extend <Animal>
 * B. NAOstrich class method "speedMPH" override base class i.e. Animal
 * speedMPH method.
 */
var NAOstrich = (function (_super) {
    __extends(NAOstrich, _super);
    function NAOstrich(animalName) {
        _super.call(this, animalName);
    }
    // Using this way we can override Animal.speedMPH method.
    NAOstrich.prototype.speedMPH = function (NAOstrichSpeed) {
        if (NAOstrichSpeed === void 0) { NAOstrichSpeed = 40; }
        _super.prototype.speedMph.call(this, NAOstrichSpeed);
    };
    return NAOstrich;
}(Animal));
var NAOstrichInstance = new NAOstrich('North African Ostrich');
NAOstrichInstance.speedMPH();
NAOstrichInstance.characteristic();
