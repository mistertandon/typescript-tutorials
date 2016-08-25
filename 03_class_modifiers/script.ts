
/**
 * How to define <basic class> using javascript.
 * 
 */
class Animal {

    private name: string;
    protected speed: number;

    constructor(animalName: string, animalSpeed: number) {

        this.name = animalName;
        this.speed = animalSpeed;
    }

    public characteristic() {

        let aCharateristic: string = null;

        aCharateristic = `${this.name} can run at ${this.speed} mph.`;

        console.log(aCharateristic);
    }
}

let Greyhound: Animal = new Animal('Greyhound', 43);

Greyhound.characteristic();

/**
 * Exhibit class inheritence.
 * 
 * A. Class <NAOstrich> extend <Animal>
 */
class NAOstrich extends Animal {

    constructor(animalName: string, animalSpeed: number) {

        super(animalName, animalSpeed);
    }
}

let NAOstrichInstance: NAOstrich = new NAOstrich('North African Ostrich', 40);

NAOstrichInstance.characteristic();

class PronghornAntelope{
    
    private name: string = null;
    protected speed: number = null;
    
    constructor(animalName: string, animalSpeed: number) {

        this.name = animalName;
        this.speed = animalSpeed;
    }

    public characteristic() {

        let aCharateristic: string = null;

        aCharateristic = `${this.name} can run at ${this.speed} mph.`;

        console.log(aCharateristic);
    }
}

let PronghornAntelopeInstance: PronghornAntelope = new PronghornAntelope('Pronghorn Antelope', 55);
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

