const markNotSorted = ({ sorted, numbers }) => {
                    
    let items = [];
    numbers.some((r) => {
        if(sorted.includes(r) === false) {
            items.push(r)
        } 
    });

    for (let i in numbers) {
        if(items.includes(numbers[i])){
            numbers[i] = `<strong class="red">${numbers[i]}</strong>`; 
        }
    }

    return numbers;
}

export default markNotSorted;