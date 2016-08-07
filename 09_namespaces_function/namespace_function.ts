/**
 * namespace name is OpenSourceTechnology.
 * Below code block exhibit how we can define namespace.
 */
namespace OpenSourceTechnology {
    
    /**
     * OpenSourceLanguageInteface interface restrict function parameter
     * [ Note: Function must define paarmeter type to be
     * OpenSourceLanguageInteface type ] property to same as interface
     * specific properties.
     * 
     * Imp Note: In namespaces, exporting an interface is less required
     * i.e. if you delete export keyword from below interface, still it'll
     * work smoothly.
     */
    export interface OpenSourceLanguageInteface {

        langName: string;
    }

    /**
     * Function is used to get general statement.
     */
    export function OpensourceLanguageName(nameObj: OpenSourceLanguageInteface) {

        let LanguageName: string;

        LanguageName = `${nameObj.langName} is the main language.`;

        return LanguageName;
    }
    
    /**
     * OpenSourceFrameworkInterface interface restrict function parameter
     * [ Note: Function must define paarmeter type to be
     * OpenSourceFrameworkInterface type ] property to same as interface
     * specific properties.
     * 
     * Imp Note: In namespaces, exporting an interface is less required
     * i.e. if you delete export keyword from below interface, still it'll
     * work smoothly.
     * 
     **/
    export interface OpenSourceFrameworkInterface {

        frameworkName: string;
    }

    /**
     * Function is used to get general statement.
     */
    export function OpenSourceFrameworkName(nameObj: OpenSourceFrameworkInterface) {

        let FrameworkName: string;

        FrameworkName = `${nameObj.frameworkName} is the name of the framework.`;

        return FrameworkName;
    }
}

/**
 * OpenSourceLanguageRes variable contain result obtained from
 * OpensourceLanguageName module.
 */
let OpenSourceLanguageRes: string;
let OpenSourceLanguageVar = {langName:'NodeJs'};
OpenSourceLanguageRes = OpenSourceTechnology.OpensourceLanguageName(OpenSourceLanguageVar);
console.log(OpenSourceLanguageRes);

/**
 * OpenSourceFrameworkRes variable contain result obtained from
 * OpenSourceFrameworkName module.
 */
let OpenSourceFrameworkRes: string;
let OpenSourceFrameworkVar = {frameworkName:'HapiJs'};
OpenSourceFrameworkRes = OpenSourceTechnology.OpenSourceFrameworkName(OpenSourceFrameworkVar);
console.log(OpenSourceFrameworkRes);