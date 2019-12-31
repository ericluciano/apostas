const probability = ({ key, data, action, limit }) => {

    const actions = {
        // 7 pares e 9 impares 31%
        // 8 pares e 7 impares 27%
        // 6 pares e 9 impares 21%
        lotofacil: {
            0: () => [...data.pairs(7), ...data.odd(8)],
            1: () => [...data.pairs(8), ...data.odd(7)],
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