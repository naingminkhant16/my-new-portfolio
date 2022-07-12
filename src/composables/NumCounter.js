function NumCounter(num, end, speed = 1) {
    let Counter = setInterval(counterFun, 100);

    function counterFun() {
        if (num.value == end) clearInterval(Counter);
        else num.value += speed;;
    };
}
export {
    NumCounter
}