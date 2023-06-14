// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;
  }

function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * feetPerBlock;
    return feet;
  }

function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetTravelled = blocksTravelled * feetPerBlock;
    return feetTravelled;
  }

function calculatesFarePrice (start, destination) {
    let farePrice = distanceTravelledInFeet(start, destination)

    if (farePrice <= 400) {
        return 0
    } else if (farePrice > 400 && farePrice <= 2000) { 
        return (farePrice- 400) * .02
    } else if (farePrice > 2000 && farePrice <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
