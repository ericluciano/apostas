import { lotoFacilPatterns } from '../patterns/config.js';

const insertText = (arr1) => arr1.join(' até ');

const isInsidePattern = ({ pattern, num, text, action = 'lotofacil' }) => {
    let numberCheck = Number(num);

    if(action === 'lotofacil') {
        const { fibonacci, prime, sumDozens } = lotoFacilPatterns;
        if(pattern === 'fibo') {
            
            return `
                <div class="tags ${fibonacci.trend.includes(numberCheck) ? 'inside' : 'not-inside'}">
                    ${ text || 'fibo' }: ${num}
                </div>`;
        }

        if(pattern === 'prime') {
            return `
            <div class="tags ${prime.includes(numberCheck) ? 'inside' : 'not-inside'}"
            title="Ideal: ${prime[0]}, ${prime[1]} ou ${prime[2]}"
            >
                ${ text || 'primos'}: ${num}
            </div>`;
        }

        if(pattern === 'sum') {
            const dozens = sumDozens;
            const { min, max } = dozens.trend;
            const check = ( numberCheck >= min && numberCheck <= max) ? 'inside' : 'not-inside';
            return `
                <div class="tags ${check}" title="(1) ${insertText(dozens[1])}, (2) ${insertText(dozens[2])}, (3) ${insertText(dozens[3])}">
                        ${ text || 'soma' }: ${num}
                </div>`;
        }
    }
}

export default isInsidePattern;