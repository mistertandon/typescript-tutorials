
/**
 * How to define <basic class> using javascript.
 */
class Greyhound {

    private name: string;
    protected speed: number;

    constructor(animalName: string) {

        this.name = animalName;
    }

    public speedMph(animalSpeed: number) {

        this.speed = animalSpeed;
    }

    public characteristic() {

        let aCharateristic: string = null;

        aCharateristic = `${this.name} can run at ${this.speed} mph.`;

        console.log(aCharateristic);
    }
}

let greyhoundInstance: Greyhound = new Greyhound('Greyhound');
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

    private getNameHistory: string[] = new Array<string>();
    private setNameHistory: string[] = new Array<string>();

    constructor(private name: string, protected speed: number) {

    }
    /**
     * Setter can not return a value.
     */
    set setAnimalName(animalName: string) {
    
        this.setNameHistory.push();
        this.name = animalName;
    }

    get getAnimalName(): string {

        

        return this.name;
    }

    public retreiveAnimalNameHistory(): Array<string> {

        return this.setNameHistory;
    }

    public characteristic() {

        let aCharateristic: string = null;

        aCharateristic = `${this.name} can run at ${this.speed} mph.`;

        console.log(aCharateristic);
    }
}

let pronghornAntelopeInstance: PronghornAntelope = new PronghornAntelope('Pronghorn Antelope', 55);
pronghornAntelopeInstance.characteristic();
// Using setter functionality.
pronghornAntelopeInstance.setAnimalName = 'Cheetah';
pronghornAntelopeInstance.characteristic();