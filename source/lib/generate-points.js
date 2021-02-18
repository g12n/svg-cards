 const pointsOnRegularPolygon = (center = [0, 0], radius = 100, sides = 12, startDegrees = 0) => {
    const [x, y] = center;
    const points = [];
    //Convert startvalue in from degrees to radians (degrees * Math.PI) / 180;
    const startRadians = (startDegrees * Math.PI) / 180;
    
    // calculate angle between points 
    const step = (2 * Math.PI) / sides;

    for (i = 0; i< sides; i++ ){
        const angle = step * i + startRadians;
        const point = [x + radius * Math.cos(angle), y + radius * Math.sin(angle)]
        points.push(point)
    }
    return points;
};

exports.pointsOnRegularPolygon =  pointsOnRegularPolygon;