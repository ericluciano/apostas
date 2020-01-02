import markSorted from '../helper/markSorted.js'

const createDraw = ({ rows }) => {
    let items = '';

    for(let data of rows ) {
        let all = data.all_numbers.split(",").sort((a, b) => a-b);
        items += `
        <div class="draw">
            <div class="name">
                <div>Concurso: ${data.concurso}</div>
                <div>${new Date(data.data).toLocaleDateString()}</div>
            </div>
            <div class="numbers">
            ${markSorted({ 
                sorted: data.sorted.split(','), 
                numbers: data.all_numbers.split(',').sort((a, b) => a - b) })}
            </div>
            <div class="total">
                ${data.totalFounds} acertos
            </div>
        </div>
        `;
    }
    return items;
};

export { createDraw, };