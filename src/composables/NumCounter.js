function NumCounter(num, end) {
    let Counter = setInterval(counterFun, 100);

    function counterFun() {
        if (num.value == end) clearInterval(Counter);
        else num.value++;
    };
}
export {
    NumCounter
}