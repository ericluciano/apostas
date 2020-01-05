/**
 * Retorna a probabilidade
 * 
 * @param {object} param
 * 
 */
const probability = ({ key, data, action, limit }) => {

    const actions = {
        // 7 pares e 9 impares 31%
        // 8 pares e 7 impares 27%
        // 6 pares e 9 impares 21%
        lotofacil: {
            0: () => [...data.pairs(Math.round(limit / 1 * 0.47)), ...data.odd(Math.round(limit / 1 * 0.53))] ,
            1: () => [...data.pairs(Math.round(limit / 1 * 0.53)), ...data.odd(Math.round(limit / 1 * 0.47))],
            2: () => [...data.pairs(6), ...data.odd(9)],
        },
        megasena: {
            0: () => [...data.slice(0, limit)],
            1: () => [...data.slice(0, limit)],
            2: () => [...data.slice(0, limit)],
        }
    }

    const execute = actions[action][key];
    const result = execute();
    return result.sort((a, b) => a - b);
   
};

export default probability;