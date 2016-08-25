
/**
 * How to define <basic class> using javascript.
 * 
 */
class Animal {

    public name: string;
    public speed: number;

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

let Greyhound: Animal = new Animal('Greyhound');
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
class NAOstrich extends Animal {

    constructor(animalName: string) {

        super(animalName);
    }
    // Using this way we can override Animal.speedMPH method.
    public speedMPH(NAOstrichSpeed = 40) {

        super.speedMph(NAOstrichSpeed);
    }
}

let NAOstrichInstance: NAOstrich = new NAOstrich('North African Ostrich');
NAOstrichInstance.speedMPH();
NAOstrichInstance.characteristic();



