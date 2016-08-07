define(["require", "exports"], function (require, exports) {
    "use strict";
    function createClassInstance(classConstructorType, name, rank, speed) {
        return new classConstructorType(name, rank, speed);
    }
    exports.createClassInstance = createClassInstance;
    /**
     * TerretrialAnimalClass class use to implement <TerretrialAnimalInterface>,
     * by definig constructor definition in such a way compiler will automatically
     * set class properties same as constructor parameters.
     */
    var TerretrialAnimalClass = (function () {
        function TerretrialAnimalClass(name, rank, speed) {
            this.name = name;
            this.rank = rank;
            this.speed = speed;
        }
        TerretrialAnimalClass.prototype.getAnimalInformation = function () {
            var outputString;
            outputString = this.name + " use to run at " + this.speed + " mph with rank " + this.rank;
            return outputString;
        };
        return TerretrialAnimalClass;
    }());
    exports.TerretrialAnimalClass = TerretrialAnimalClass;
    //export { TerretrialAnimalClass as TerretrialAnimalModule };
});
//let lionInstance: Lion;
//lionInstance = createClassInstance(Lion, 'Lion', 1, 50);
//console.log(lionInstance);
//
//let lionInstanceOutput: string;
//lionInstanceOutput = lionInstance.getAnimalInformation();
//console.log(lionInstanceOutput);
