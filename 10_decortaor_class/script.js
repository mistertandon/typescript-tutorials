var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TerrestrialAnimalFunction = function (ctor, name, speed, rank) {
    return new ctor(name, speed, rank);
};
/**
 * @pCCtor Any Passed class i.e. TerrestrialAnimalClass type class constructor.
 */
function TerrestrialAnimalClassDecorator(pCCtor) {
    console.log('log1');
    console.log(pCCtor);
    /**
     * pCCtorRef: Passed class constructor reference.
     */
    var pCCtorRef;
    pCCtorRef = pCCtor;
    function createNewClassInstance(constructorParam, argsParam) {
        /**
         * @nICPVar: New instance creating process variable.
         */
        var nICPVar = function () {
            console.log('log2');
            console.log(constructorParam);
            console.log('log3');
            console.log(this);
            return constructorParam.apply(this, argsParam);
        };
        nICPVar.prototype = constructorParam.prototype;
        return new nICPVar();
    }
    var nCInst;
    nCInst = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return createNewClassInstance(pCCtor, args);
    };
    nCInst.prototype = pCCtor.prototype;
    return nCInst;
}
var TerrestrialAnimalClass = (function () {
    function TerrestrialAnimalClass(name, speed, rank) {
        this.name = name;
        this.speed = speed;
        this.rank = rank;
    }
    TerrestrialAnimalClass.prototype.animalDescription = function () {
        var outputString;
        outputString = this.name + " use to run at " + this.speed + " MPH, having " + this.name + " rank among fastest animal. ";
        return outputString;
    };
    TerrestrialAnimalClass = __decorate([
        TerrestrialAnimalClassDecorator
    ], TerrestrialAnimalClass);
    return TerrestrialAnimalClass;
}());
var TerrestrialAnimalInstance;
var TerrestrialAnimalRes;
TerrestrialAnimalInstance = TerrestrialAnimalFunction(TerrestrialAnimalClass, 'Lion', 55, 5);
TerrestrialAnimalRes = TerrestrialAnimalInstance.animalDescription();
console.log(TerrestrialAnimalRes);
