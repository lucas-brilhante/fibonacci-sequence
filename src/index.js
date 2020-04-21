'use strict'

const fibonacci = () => {
    let fib = [];

    for (let i = 0; ; i++) {
        let value;
        if (i === 0)
            value = 0;
        else if (i === 1)
            value = 1;
        else
            value = fib[i - 1] + fib[i - 2];

        fib.push(value);
        
        if (value > 350)
            break;
    }
    return fib;

}

const isFibonnaci = (num) => {
    const fib = fibonacci();
    return fib.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
