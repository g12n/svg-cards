const {pointsOnRegularPolygon} = require('../lib/generate-points.js');
const  {line,curveLinearClosed} = require('d3-shape'); 

const width= 500; 
const height= 800;
let viewBox =`0 0 ${width} ${height}`
const center = [width / 2, height/2]

let content = ``
// Set Background Rectangle
content += `<rect width="${width}" height="${height}" fill="hsl(10,100%, 10%)" />`;
// Loop to draw polygons
for (let i=0; i<=12; i++){
    const radius = width / 2 - 40 - 18 * i;
    const points = pointsOnRegularPolygon(center, radius, 4, Math.random()*5*i)
    const fill = `hsl(11,80%, ${80/12 * i + 10}%  )`
    content += `<path d="${line().curve(curveLinearClosed)(points)}" fill="${fill}" />`
}

module.exports = `<svg viewBox="${viewBox}" width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">\n${content}</svg>`;
