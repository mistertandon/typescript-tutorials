var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TerrestrialAnimalFunction = function (ctor, name, speed, rank) {
    return new ctor(name, speed, rank);
};
function propertyNameDecorator(target, propertyKey) {
    var _nameVar;
    var getter;
    getter = function () {
        console.log('getter1');
        return this._nameVar;
    };
    var setter;
    /**
     * namePropVal: Name property value.
     */
    setter = function (namePropVal) {
        console.log('setter1');
        return this._nameVar = namePropVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true
    });
}
var TerrestrialAnimalClass = (function () {
    function TerrestrialAnimalClass(name, speed, rank) {
        this.speed = speed;
        this.rank = rank;
        this.name = name;
    }
    TerrestrialAnimalClass.prototype.animalDescription = function () {
        var outputString;
        outputString = this.name + " use to run at " + this.speed + " MPH, having " + this.name + " rank among fastest animal. ";
        return outputString;
    };
    __decorate([
        propertyNameDecorator
    ], TerrestrialAnimalClass.prototype, "name", void 0);
    return TerrestrialAnimalClass;
}());
console.log('log1');
var TerrestrialAnimalInstance;
var TerrestrialAnimalRes;
TerrestrialAnimalInstance = TerrestrialAnimalFunction(TerrestrialAnimalClass, 'Lion', 55, 5);
TerrestrialAnimalRes = TerrestrialAnimalInstance.animalDescription();
console.log(TerrestrialAnimalRes);
