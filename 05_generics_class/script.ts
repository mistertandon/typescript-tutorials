interface TerrestrialAnimalConstructor<A, B, C>{
    new (name: A, speed: B, rank: C): TerrestrialAnimalInterface<A, B, C>;
}

interface TerrestrialAnimalInterface<A, B, C>{
    
    name: A;
    speed: B;
    rank: C;

    getAnimalInfo(): string;
}

let getTerrestrialAnimalClassInstance: <A, B, C>(ctor: TerrestrialAnimalConstructor<A, B, C>,name: A,speed: B,rank: C) => TerrestrialAnimalInterface<A, B, C> = 
    function <A, B, C>(ctor: TerrestrialAnimalConstructor<A, B, C>,name: A,speed: B,rank: C): TerrestrialAnimalInterface<A, B, C>{
    
        return new ctor(name,speed,rank);
}

class TerrestrialAnimalClass<A, B, C> implements TerrestrialAnimalInterface<A, B, C>{
    
    constructor(public name: A, public speed: B,public rank: C){
        
    }
    public getAnimalInfo(): string{
        
        let outputString: string;
        
        outputString = `${this.name} have capability of reaching speed up to ${this.speed} mph.\n\
        He stands on ${this.rank} rank among worlds fastest animal.`;
        
        return outputString
    };
    
}

let LionTerrestrialInstance: TerrestrialAnimalClass<string, number, string>;
LionTerrestrialInstance = getTerrestrialAnimalClassInstance(TerrestrialAnimalClass, 'Lion', 50, 'first');