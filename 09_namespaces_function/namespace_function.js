/**
 * namespace name is OpenSourceTechnology.
 * Below code block exhibit how we can define namespace.
 */
var OpenSourceTechnology;
(function (OpenSourceTechnology) {
    /**
     * Function is used to get general statement.
     */
    function OpensourceLanguageName(nameObj) {
        var LanguageName;
        LanguageName = nameObj.langName + " is the main language.";
        return LanguageName;
    }
    OpenSourceTechnology.OpensourceLanguageName = OpensourceLanguageName;
    /**
     * Function is used to get general statement.
     */
    function OpenSourceFrameworkName(nameObj) {
        var FrameworkName;
        FrameworkName = nameObj.frameworkName + " is the name of the framework.";
        return FrameworkName;
    }
    OpenSourceTechnology.OpenSourceFrameworkName = OpenSourceFrameworkName;
})(OpenSourceTechnology || (OpenSourceTechnology = {}));
/**
 * OpenSourceLanguageRes variable contain result obtained from
 * OpensourceLanguageName module.
 */
var OpenSourceLanguageRes;
var OpenSourceLanguageVar = { langName: 'NodeJs' };
OpenSourceLanguageRes = OpenSourceTechnology.OpensourceLanguageName(OpenSourceLanguageVar);
console.log(OpenSourceLanguageRes);
/**
 * OpenSourceFrameworkRes variable contain result obtained from
 * OpenSourceFrameworkName module.
 */
var OpenSourceFrameworkRes;
var OpenSourceFrameworkVar = { frameworkName: 'HapiJs' };
OpenSourceFrameworkRes = OpenSourceTechnology.OpenSourceFrameworkName(OpenSourceFrameworkVar);
console.log(OpenSourceFrameworkRes);
