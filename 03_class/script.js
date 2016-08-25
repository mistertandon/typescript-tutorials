/**
 * How to define <basic class> using javascript.
 */
class Greyhound {
    constructor(animalName) {
        this.name = animalName;
    }
    speedMph(animalSpeed) {
        this.speed = animalSpeed;
    }
    characteristic() {
        let aCharateristic = null;
        aCharateristic = `${this.name} can run at ${this.speed} mph.`;
        console.log(aCharateristic);
    }
}
let greyhoundInstance = new Greyhound('Greyhound');
greyhoundInstance.speedMph(43);
greyhoundInstance.characteristic();
/**
 * How to define <basic class> where constructor will take care of declairation
 * and intialization of class proerties.
 * A: In <PronghornAntelope> class constructor will automatically create
 * two properties with name <animalName> & <animalSpeed> and will initialize
 * them also.
 * B: Getter and Setter has been demonstrated.
 */
class PronghornAntelope {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.getNameHistory = new Array();
        this.setNameHistory = new Array();
    }
    /**
     * Setter can not return a value.
     */
    set setAnimalName(animalName) {
        this.setNameHistory.push();
        this.name = animalName;
    }
    get getAnimalName() {
        return this.name;
    }
    retreiveAnimalNameHistory() {
        return this.setNameHistory;
    }
    characteristic() {
        let aCharateristic = null;
        aCharateristic = `${this.name} can run at ${this.speed} mph.`;
        console.log(aCharateristic);
    }
}
let pronghornAntelopeInstance = new PronghornAntelope('Pronghorn Antelope', 55);
pronghornAntelopeInstance.characteristic();
// Using setter functionality.
pronghornAntelopeInstance.setAnimalName = 'Cheetah';
pronghornAntelopeInstance.characteristic();
