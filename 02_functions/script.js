/**
 * Defining function prototype. In below definition "function type" and "function"
 * means on either side we have defined data type.
 */
var animalA = function (name, speed) {
    var sDialouge = name + " runs at " + speed + " miles per hour.";
    console.log(sDialouge);
    return true;
};
animalA('horse', 50);
/**
 * Defining function prototype. In below definition we have defined data type
 * only for "function type". It is called <inferring the types>
 */
var animalB = function (animalName, animalSpeed) {
    var sDialouge = animalName + " runs at " + animalSpeed + " miles per hour.";
    console.log(sDialouge);
    return true;
};
animalB('Oxe', 4);
/**
 * Defining function prototype using <optional parameter>.
 */
var animalC = function (animalName, animalSpeed, wildness) {
    var sDialouge = animalName + " runs at " + animalSpeed + " miles per hour";
    if (wildness) {
        sDialouge += " and " + wildness + "% people found them wild.";
    }
    console.log(sDialouge);
    return true;
};
animalC('Lion', 40, 70);
animalC('Cat', 10);
/**
 * Defining function prototype using <default initialized parameter>.
 */
var animalD = function (animalName, animalSpeed, wildness) {
    if (wildness === void 0) { wildness = 20; }
    var sDialouge = animalName + " runs at " + animalSpeed + " miles per hour";
    if (wildness) {
        sDialouge += " and " + wildness + "% people found them wild.";
    }
    console.log(sDialouge);
    return true;
};
animalD('Cow', 1);
/**
 * Default-initialized parameters don’t need to occur after required parameters.
 */
var animalE = function (animalName, animalSpeed, wildness) {
    if (animalSpeed === void 0) { animalSpeed = 0.5; }
    var sDialouge = animalName + " runs at " + animalSpeed + " miles per hour";
    if (wildness) {
        sDialouge += " and " + wildness + "% people found them wild.";
    }
    console.log(sDialouge);
    return true;
};
animalE('Rat', undefined, 3);
