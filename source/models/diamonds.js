const  {line,curveLinearClosed} = require('d3-shape'); 
const {pointsOnRegularPolygon} = require('../lib/generate-points.js');
const {Delaunay}= require("d3-delaunay");
const {polygonCentroid} = require("d3-polygon")

const {voronoiMapSimulation} = require('d3-voronoi-map')

let diamonds = (value=1, viewBox=[0,0,500,800]) => {


    let padding = 80;

    let [bx,by,bwidth,bheight] = viewBox;
    let layers = []

    bx += padding
    by += padding
    bwidth -= padding
    bheight -= padding


    let center = [viewBox[0] +viewBox[2]/2 , viewBox[1]+viewBox[3]/2]

    let points = []
    let centroids = []
    
    for (let i = 1; i<= value; i++){
        let x = Math.random()*bwidth + bx;
        let y = Math.random()*bheight + by;
        points.push([x,y])
    }
   
    const delaunay = Delaunay.from(points);
    const voronoi = delaunay.voronoi([bx,by,bwidth,bheight]);
   
 
    let polygons = voronoi.cellPolygons()

    let polygon = polygons.next();
    while (!polygon.done) {
        var d = line()(polygon.value);

        layers.push({
            d: d
        })
        centroids.push(polygonCentroid(polygon.value))  
        

        polygon = polygons.next();
    }
    

    centroids.map(center=>{

        let corners = Math.floor(Math.random()*4 + 3)

        let polygon = pointsOnRegularPolygon(center,50,corners)
        var d = line()(polygon);

        layers.push({
            d: d
        })
    })

    return layers

}

exports.diamonds =  diamonds;