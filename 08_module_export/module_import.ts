
import { createClassInstance as createClassInstanceModule} from "./module_export";
import { TerretrialAnimalClass as TerretrialAnimalClassModule} from "./module_export";


let lionInstance: TerretrialAnimalClassModule;
lionInstance = createClassInstanceModule(TerretrialAnimalClassModule, 'Lion', 1, 50);
console.log(lionInstance);

let lionInstanceOutput: string;
lionInstanceOutput = lionInstance.getAnimalInformation();
console.log(lionInstanceOutput);