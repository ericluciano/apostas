import { lotoFacilPatterns } from '../patterns/config.js';

const countNumbersInFibo = (numbers) => {
    let totalNumbers = 0;
    
    let fibo = lotoFacilPatterns.fibonacci;
    console.log(fibo.numbers);
    for(let i = 0; i < numbers.length; i++) {
        if(fibo.numbers.includes(Number(numbers[i]))) {
            totalNumbers += 1;
        }
    }

    return totalNumbers;
}

export { countNumbersInFibo, };