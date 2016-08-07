var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var C = (function () {
    function C() {
    }
    C.prototype.foo = function (n, o, p) {
        console.log('log8');
        console.log(this);
        return n * o * p * 2;
    };
    __decorate([
        log
    ], C.prototype, "foo", null);
    return C;
}());
function log(target, key, value) {
    console.log('log3');
    console.log(target);
    console.log('log4');
    console.log(key);
    console.log('log5');
    console.log(value);
    console.log('log6');
    console.log(this);
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log('log7');
            console.log(this);
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            var result = value.value.apply(this, args);
            return 18;
        }
    };
}
var cv = new C();
console.log('log1');
console.log(cv);
var res = cv.foo(4, 5, 6);
console.log('log2');
console.log(res);
