const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//use reduce to initerate array into single value

const totalBatteries = batteryBatches.reduce(function (accumulator, number){return number + accumulator}, 0)