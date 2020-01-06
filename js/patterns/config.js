const lotoFacilPatterns = {
    prime: [5, 6, 4],
    sumDozens: {
        1: [180, 194],
        2: [195, 209],
        3: [210, 224],
        trend: {
            min: 180,
            max: 224,
        }
    },
    evenAndOdd: {
        1: [7, 8],
        2: [8, 7],
        3: [6, 9]
    },
    fibonacci: {
        1: 4,
        2: 5,
        3: 3,
        numbers: [1, 2, 3, 5, 8, 13, 21],
        trend: [4, 5, 3]
    }
}

export { lotoFacilPatterns, }