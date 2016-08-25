interface ClockConstructor {

    new (hour: number, minute: number): prop;
}

interface prop {

    currentTime: Date;
    getTime(): string;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): prop {

    return new ctor(hour, minute);
}

class Clock implements prop {

    currentTime: Date;
    function ()
    constructor(h: number, m: number) { }
}
let digital = createClock(Clock, 12, 17);
console.log(digital);