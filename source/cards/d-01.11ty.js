const width= 500; 
const height= 800;
let viewBox =`0 0 ${width} ${height}`
const cx = width/2
const cy = height / 2;
const step = 30;
const halfStep = step/2;
let content = ``
content += `<rect width="${width}" height="${height}" />`;


for (let i=1; i<=16; i++){
    content += `<rect x="${cx - i * halfStep}" y="${cy -
      i * halfStep}" width="${i * step}" height="${i *
      step}" fill="rgba(255,255,255,0.1)" transform="rotate(${i*4},${cx}, ${cy})"/>`;
}

module.exports = `<svg viewBox="${viewBox}" width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
