
const  {line} = require('d3-shape'); 

let polygonToPathString =  (polygon)=>{
    var pathString = line()(polygon);
    pathString +="Z"
    return(pathString)
}

const width= 500; 
const height= 800;
let viewBox =`0 0 ${width} ${height}`
const center = [width / 2, height/2]

const p1 = [width / 2, height*0.25]
const p2 = [width / 2, height*0.75]
let content = ``
// Set Background Rectangle
content += `<rect width="${width}" height="${height}" fill="hsl(350,100%, 10%)" />`;

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

let points = [p1,p2]

for (let i=0; i<=12; i++){
    const radius = width/2 - 18 * i;
    const fill = `hsl(350,80%, ${80/12 * i + 10}%  )`
    let points = pointsOnRegularPolygon(p1, radius, 4, Math.random()*5*i)
    
    content += `<path d="${polygonToPathString(points)}" fill="${fill}" />`
    points = pointsOnRegularPolygon(p2, radius, 4, Math.random()*5*i)
    content += `<path d="${polygonToPathString(points)}" fill="${fill}" />`
        
}

module.exports = `<svg viewBox="${viewBox}" width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">\n${content}</svg>`;
