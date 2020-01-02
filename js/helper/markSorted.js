/**
 * Marca os números sorteados
 * 
 * @param {array} param.sorted 
 * @param {array} param.numbers 
 */
const markSorted = ({ sorted, numbers }) => {
                    
    let items = [];
    numbers.some((r) => {
        if(sorted.includes(r) === true) {
            items.push(r)
        } 
    });

    for (let i in numbers) {
        numbers[i] = `<div class="balls ${items.includes(numbers[i]) ? 'drawn': ''}">${numbers[i]}</div>`;         
    }

    return numbers;
};

export default markSorted;