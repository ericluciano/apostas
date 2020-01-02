import markNotSorted from '../helper/markNotSorted.js'

const tableResultVerifySequence = ({ rows }) => {


    let items = '';
    let table = `
        <table>
            <thead>
                <tr class="table100-head">
                    <th class="column1">Data</th>
                    <th class="column2">Concurso</th>
                    <th class="column3">Acertos</th>
                    <th class="column4">N Certos X Numeros</th>
                    
                </tr>
            </thead>
            <tbody>
            `;

            for(let data of rows ) {
                let all = data.all_numbers.split(",").sort((a, b) => a-b);
                items += `
                <tr>
                    <td class="column1">
                        ${new Date(data.data).toLocaleDateString()}
                    </td>
                    <td class="column2">${data.concurso}</td>
                    <td class="column3">${data.totalFounds}</td>
                    <td class="column4" style="padding:10px 0px 10px">
                        ${markNotSorted({ 
                            sorted: data.sorted.split(','), 
                            numbers: data.all_numbers.split(',').sort((a, b) => a - b) })}
                    </td>
                </tr>`;
            }
            
     table += items +`</tbody></table>`;
     return table;
};

export default tableResultVerifySequence;