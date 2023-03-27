const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(accumulator, batch) {
    return accumulator+= batch
};

const totalBatteries = batteryBatches.reduce(reducer, 0);