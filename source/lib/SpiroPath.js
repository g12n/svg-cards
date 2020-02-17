let  spiro = require('libspiro-js');
	


let  mapSpiro = (spiros, closed=true) =>{
	let spiroObject = spiro.spiroToBezier(spiros, closed)
			//console.log(spiroObject)
			let path = ""
			path += spiroObject.map((point,index)=>{
				let string = ``
				let {x:sx,y:sy} = point.start;
				let {x:ex,y:ey} = point.end;
				if (index < 1) {
					string += `M ${sx} , ${sy}`
				}
				if(point.c1){
					let {x:cx1, y:cy1} = point.c1;
					let {x:cx2, y:cy2} = point.c2;
					string += `C ${cx1},${cy1} ${cx2},${cy2} ${ex},${ey}`
				} else {
					string += `L ${ex},${ey}`
				}
				return string;
			})
		return path;
}

exports.mapSpiro =  mapSpiro;