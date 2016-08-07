class C {
    @log
    foo(n: number, o: number, p: number) {
        console.log('log8');
        console.log(this);
        return n * o * p * 2;
    }
}

function log(target: Function, key: string, value: any) {
    console.log('log3');
    console.log(target);
    console.log('log4');
    console.log(key);
    console.log('log5');
    console.log(value);
    console.log('log6');
    console.log(this);
    return {
        value: function (...args: any[]) {
            console.log('log7');
            console.log(this);
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            return 18;
        }
    };
}

let cv = new C();
console.log('log1');
console.log(cv);
var res = cv.foo(4, 5, 6);
console.log('log2');
console.log(res);