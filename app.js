// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b;
}


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

function fromDollarToYen (valueInDollar){
    const valueInYens = valueInDollar / 1.07 * 156.5;
    return valueInYens;
}

const fromYenToPound = (valueInYens) => {
    let valueInPound = valueInYens / 156.5 * 0.87;
    return valueInPound;

}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
