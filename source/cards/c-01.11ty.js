const width= 500; 
const height= 800;
let viewBox =`0 0 ${width} ${height}`
const center = [width / 2, height/2]

let content = ``
let hue= 140;
// Set Background Rectangle
content += `<rect width="${width}" height="${height}" fill="hsl(${hue},80%, 20%)" />`;

let field = []

let step = 60;
let path = ``

let draw = (x, y, direction, amplitude) => {
  let x1 = x - amplitude/2 * Math.cos(direction);
  let y1 = y - amplitude/2 * Math.sin(direction);
  let x2 = x + amplitude/2 * Math.cos(direction);
  let y2 = y + amplitude/2 * Math.sin(direction);  
  let path = `M${x1},${y1} L${x2},${y2}`
  return path
}

for (let x=0; x< width; x+= step){
  line = [];  
  for(let y = 0; y< height; y+=step){
    let direction = ((y / height) * Math.PI) ;
    line.push(direction);
    path += draw(x + step / 2, y + step / 2, direction , step*0.75)
  }
  field.push(line);
}

content += `<path d="${path}" stroke="hsl(${hue},80%, 30%)" fill="none" stroke-width="4"/>`

module.exports = `<svg viewBox="${viewBox}" width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">\n${content}</svg>`;
