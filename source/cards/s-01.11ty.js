let SpiroPathm = require('../lib/SpiroPath')
var random = require('gl-vec2').random;
var add = require('gl-vec2').add;

const width= 500; 
const height= 800;
let viewBox =`0 0 ${width} ${height}`
const center = [width / 2, height/2];


let content = ``
let path = ''


let hue= 210;
// Set Background Rectangle
content += `<rect width="${width}" height="${height}" fill="hsl(${hue},80%, 20%)" />`;



for (let i = 1; i<=30; i++){

let p1 = add([], [width * 0.33 , height * 0.4], random([], 20))
let p2 = add([], [width * 0.15, height * 0.7], random([], 20))
let p4 = add([], [width * 0.66, height * 0.4], random([], 20))
let p3 = add([], [width * 0.85, height * 0.7], random([], 20))


let spiros = [
  {x: width/2, y: height*0.1, type:"corner"},
  { x: p1[0], y: p1[1], type:"g4" },
  { x: p2[0], y: p2[1], type: "g4" },
  {x:width*0.5, y: height*0.75, type:"corner"},
  { x: p3[0], y: p3[1], type: "g4" },
  { x: p4[0], y: p4[1], type: "g4" },
]
path += SpiroPathm.mapSpiro(spiros)
}


for (let i = 1; i <= 30; i++) {

  let p5 = add([], [width/2, height], random([], 100))
  let p6 = add([], [width / 2, height*0.66], random([], 10))

  let spiros = [
    
    { x: p6[0], y: p6[1], type: "g4" },
    { x: width * 0.5, y: height * 0.75, type: "g4" },
    { x: p5[0], y: p5[1], type: "g4" },
  ]
  path += SpiroPathm.mapSpiro(spiros, false)
}


content += `<path d="${path}" stroke="hsl(${hue},80%, 90%)" fill="none" stroke-width="1"/>`

module.exports = `<svg viewBox="${viewBox}" width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">\n${content}</svg>`;
