const sumDozens = (param) => {
    let result = 0;
    for(let i = 0; i < param.length; i++) {
        result += Number(param[i]);
    }
    return result;
}

export default sumDozens;