function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var digital = createClock(Clock, 12, 17);
console.log(digital);
