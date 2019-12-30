let state = {
    data: {
        selected: {
            megasena: [],
            lotofacil: [],
        },
    },
    setState(value) {
        this.data = { ...this.data, ...value };
        console.log(this.data);
        return this.data;
    },
    getState() {
        return this.data;
    }
};

export default state;