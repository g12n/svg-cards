const width= 500; 
const height= 800;
let viewBox =`0 0 ${width} ${height}`
const cx = width/2
const cy = height / 2;
const step = 30;
const halfStep = step/2;
let content = ``

// Set Background Rectangle
content += `<rect width="${width}" height="${height}" fill="hsl(10,100%, 10%)" />`;

for (let i=1; i<=12; i++){
    let  x= cx - i * halfStep
    let  y= cy - i * halfStep
    let  w= i * step
    let h= i *step
    let fill=`hsla(10,60%, 60%, 0.1)`
    content += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" transform="rotate(${i*4},${cx}, ${cy})"/>`;
}

module.exports = `<svg viewBox="${viewBox}" width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
