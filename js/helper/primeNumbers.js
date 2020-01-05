/**
 * Retorna se o número é primo ou não
 * @param {number} n 
 */
const isPrime = (n) => {
    
    if (n < 2) return false;

    /**
     * Um número, n, é um primo se não for divisível por outro número que não seja 1 e ele próprio. Além disso, basta verificar os números [2, sqrt (n)].
     **/

    let number = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= number; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}
/**
 * Retorna o total de números primos encontrados
 * @param {array} numbers 
 */
const countNumbersPrime = (numbers) => {
    let totalPrime = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(isPrime(numbers[i])) {
            totalPrime += 1;
        }
    }

    return totalPrime;
}

export { isPrime, countNumbersPrime };