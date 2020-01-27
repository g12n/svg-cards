const shape = require('d3-shape');

const width= 500; 
const height= 800;
let viewBox =`0 0 ${width} ${height}`
const center = [width / 2, height/2]

let content = ``
// Set Background Rectangle
content += `<rect width="${width}" height="${height}" fill="hsl(10,80%, 10%)" />`;

// function calculating points on a regular polygon
const heart = (center = [0,0], radius= 100) =>{
    let r = radius /16;
    let [cx,cy] = center;
    let points = []
    for (let a = 0; a <= 2 * Math.PI; a += Math.PI/24) {
      let x =  r * 16 * Math.pow(Math.sin(a), 3);
      let y =
      r * 
        -1 *
        (13 * Math.cos(a) -
          5 * Math.cos(2 * a) -
          2 * Math.cos(3 * a) -
          Math.cos(4 * a));
      points.push([x + cx, y + cy]);
    }
    return points
};

// Loop to draw polygons

for (let i=0; i<=8; i++){
    const radius = width / 2 - 40 - 18 * i;
    const points = heart(center, radius, 6, Math.random()*5*i)
    const fill = `hsl(10,80%, ${80/12 * i + 10}%  )`

    //path data string
    let [x,y] = points[0];
    let data = shape.line()(points)
    content += `<path d="${data}" fill="${fill}" />`
}

module.exports = `<svg viewBox="${viewBox}" width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">\n${content}</svg>`;
