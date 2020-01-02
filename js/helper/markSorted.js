const markSorted = ({ sorted, numbers }) => {
                    
    let items = [];
    numbers.some((r) => {
        if(sorted.includes(r) === true) {
            items.push(r)
        } 
    });

    for (let i in numbers) {
        if(items.includes(numbers[i])){
            numbers[i] = `<div class="balls drawn">${numbers[i]}</div>`; 
        } else {
            numbers[i] = `<div class="balls">${numbers[i]}</div>`; 
        }
    }
    console.log(numbers);
    return numbers;
};

export default markSorted;