const sortNumbers = ({ data }) => {
    return data.sort(function() {
        return 0.5 - Math.random() 
    });
};

export default sortNumbers;