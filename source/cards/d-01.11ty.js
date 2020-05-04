const width= 500; 
const height= 800;
let viewBox =`0 0 ${width} ${height}`
const center = [width / 2, height/2]

let content = ``
// Set Background Rectangle
content += `<rect width="${width}" height="${height}" fill="hsl(10,100%, 10%)" />`;

// function calculating points on a regular polygon

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

// Loop to draw polygons

for (let i=0; i<=12; i++){
    const radius = width / 2 - 40 - 18 * i;
    const points = pointsOnRegularPolygon(center, radius, 4, Math.random()*5*i)
    const fill = `hsl(11,80%, ${80/12 * i + 10}%  )`
    
    //path data string
    let [x,y] = points[0];
    let data = `M${x},${y}`
    points.shift()

    points.map(([x,y]) => {
        data += `L${x},${y}`;
    })
    
    data += "z";

    content += `<path d="${data}" fill="${fill}" />`
}

module.exports = `<svg viewBox="${viewBox}" width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">\n${content}</svg>`;
