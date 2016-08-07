define(["require", "exports", "./module_export", "./module_export"], function (require, exports, module_export_1, module_export_2) {
    "use strict";
    var lionInstance;
    lionInstance = module_export_1.createClassInstance(module_export_2.TerretrialAnimalClass, 'Lion', 1, 50);
    console.log(lionInstance);
    var lionInstanceOutput;
    lionInstanceOutput = lionInstance.getAnimalInformation();
    console.log(lionInstanceOutput);
});
