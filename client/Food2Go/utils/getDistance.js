export function getDistance(myLocation, restaurantLat, restaurantLong) {
    const x1 = myLocation.lat; 
    const y1 = myLocation.long;
    const x2 = restaurantLat; 
    const y2 = restaurantLong; 
    const horizontal = Math.pow(x2-x1, 2);
    const vertical = Math.pow(y2-y1, 2);
    const distance = Math.round((Math.sqrt(horizontal + vertical)*100000))
    return distance
}