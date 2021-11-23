//1
const hqLocation = 42
function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return (someValue - hqLocation)
    }else {
        return (hqLocation-someValue)
    } 
}
//2
function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    return distanceFromHqInBlocks(someValue) * 264;
}

//3
function distanceTravelledInFeet(hqLocation, someValue){
    const destFt = (someValue * 264)
    const hqFt = (hqLocation * 264)
    if (destFt > hqFt){
        return (destFt - hqFt)
    }else {
        return (hqFt - destFt)
    } 
}

//4
function calculatesFarePrice(hqLocation, someValue) {
  const distanceInFeet = distanceTravelledInFeet(hqLocation, someValue);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return 0.02 * (distanceInFeet - 400);  
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
