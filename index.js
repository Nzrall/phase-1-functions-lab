// Code your solution in this file!
let headQuarters = 42;
let blockInFeet = 264;


function distanceFromHqInBlocks(pickUpLocation) {
    
    return Math.abs (pickUpLocation - headQuarters)
}
function distanceFromHqInFeet(startingBlock) {
    let distanceTravelledInBlocks = distanceFromHqInBlocks(startingBlock);
    return distanceTravelledInBlocks * blockInFeet;
}
let distanceTravelledInFeet = (startingBlock, destinationBlock) => {
    let distanceInBlocks = Math.abs (startingBlock - destinationBlock)
    return distanceInBlocks * blockInFeet
}
let calculatesFarePrice = (startingBlock, destinationBlock) => {
let feetTravelled = distanceTravelledInFeet (startingBlock,destinationBlock);
if (feetTravelled <= 400) {
    return 0;
} else if (feetTravelled >400 && feetTravelled <= 2000) {
    return (feetTravelled - 400) * 0.02;
} else if (feetTravelled > 2000 && feetTravelled <= 2500) {
    return 25;
} else {
    return 'cannot travel that far'
}

}


