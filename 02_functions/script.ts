
/**
 * Defining function prototype. In below definition "function type" and "function"
 * means on either side we have defined data type.
 */
let animalA: (name: string, speed: number) => boolean = function(name: string, speed: number): boolean {

    let sDialouge: string = `${name} runs at ${speed} miles per hour.`;
    console.log(sDialouge);
    return true;
}
animalA('horse', 50);

/**
 * Defining function prototype. In below definition we have defined data type
 * only for "function type". It is called <inferring the types>
 */
let animalB: (name: string, speed: number) => boolean = function(animalName, animalSpeed) {
    
    let sDialouge: string = `${ animalName } runs at ${ animalSpeed } miles per hour.`;
    console.log(sDialouge);

    return true;
}
animalB('Oxe', 4);

/**
 * Defining function prototype using <optional parameter>.
 */
let animalC: (name: string, speed: number, wildness?: number) => boolean = function(animalName, animalSpeed, wildness) {
    
    let sDialouge: string = `${ animalName } runs at ${ animalSpeed } miles per hour`;
    
    if(wildness){
        sDialouge +=` and ${ wildness }% people found them wild.`;
    }
    
    console.log(sDialouge);

    return true;
}
animalC('Lion', 40, 70);
animalC('Cat', 10);

/**
 * Defining function prototype using <default initialized parameter>.
 */
let animalD: (name: string, speed: number, wildness?: number) => boolean = function(animalName, animalSpeed, wildness = 20) {
    
    let sDialouge: string = `${ animalName } runs at ${ animalSpeed } miles per hour`;
    
    if(wildness){
        sDialouge +=` and ${ wildness }% people found them wild.`;
    }
    
    console.log(sDialouge);

    return true;
}
animalD('Cow', 1);

/**
 * Default-initialized parameters don’t need to occur after required parameters.
 */
 let animalE: (name: string, speed: number, wildness: number) => boolean = function(animalName, animalSpeed = 0.5, wildness) {
    
    let sDialouge: string = `${ animalName } runs at ${ animalSpeed } miles per hour`;
    
    if(wildness){
        sDialouge +=` and ${ wildness }% people found them wild.`;
    }
    
    console.log(sDialouge);

    return true;
}
animalE('Rat', undefined, 3 );