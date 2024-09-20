function calculateNumber(type, a, b) {
    const x = Math.round(a);
    const y = Math.round(b);
    let result = 0;
    switch (type) {
        case 'SUM':
            result = x + y;
            break
        case 'SUBTRACT':
            result = x - y
            break
        case 'DIVIDE':
            if (y == 0) {
                result = 'Error';
            } else  {
                result = x / y;
            }
            break
    }
    return result;
}

module.exports = calculateNumber;
