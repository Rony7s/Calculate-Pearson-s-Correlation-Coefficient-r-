const xyValue = [];
const dataTable = [];
let sumA = [0,0,0,0,0,0,0];

let sumX = 0;
let sumY = 0;

const test =[[20,18],[15,14],[25,24],[18,17],[22,20],[17,16],[19,18],[16,15],[18,19],[23,21],[18,17],[14,13],[24,22],[19,18],[20,19]];


const xt = document.getElementById("col_x_text");
const xv = document.getElementById("col_x_value");

const yt = document.getElementById("col_y_text");
const yv = document.getElementById("col_y_value");

const r = document.getElementById("reasult_area");
const dt = document.getElementById("data_table");

 

xt.innerText ="Enter value x1:";
yt.innerText ="Enter value y1:";

let n = 2;
 
function next(){
     
	xt.innerText ="Enter value x"+n+" :";
	yt.innerText ="Enter value y"+n+" :";
	const x = Number (xv.value);
	const y = Number (yv.value);
	xyValue.push([x,y]);
	sumX += x;
	sumY += y;
    r.innerText ="No: "+(n-1)+" : "+xv.value+" "+yv.value;
	n = n+1;
}
 
function result(){
	let l = xyValue.length;

	let text = "<ul>";
	for (let i = 0; i < l; i++) {
		text += "<li>" + xyValue[i][0]+'  '+xyValue[i][1]+ "</li>";
	}
	text += "</ul>";
    r.innerHTML= text;
	formulaX();
}

function formulaX(){
	let l = xyValue.length;
	 
	let avrX = sumX/l;
	let avrY = sumY/l;
	

	for (let i = 0; i <l; i++) {
	const t0 = xyValue[i][0];
	sumA[0] += xyValue[i][0];

	const t1 = xyValue[i][1];
	sumA[1] += xyValue[i][1];

	const t2 = xyValue[i][0]-avrX;
	sumA[2] += xyValue[i][0]-avrX;

	const t3 = xyValue[i][1]-avrY;
	sumA[3] += xyValue[i][1]-avrY;

	const t4 = t2*t3;
	sumA[4] += t2*t3;

	const t5 = t2*t2;
	sumA[5] += t2*t2;

	const t6 = t3*t3;
	sumA[6] += t3*t3;

	dataTable.push([t0,t1,t2,t3,t4,t5,t6]);
	}

	console.log(dataTable);
	console.log(sumA);

    let ans = (sumA[4])/(Math.sqrt((sumA[5]*sumA[6])));
    console.log(ans);
	r.innerHTML ="<h1>The result is: "+ans+" </h1>";

	tableX(dataTable, "myTable");
	
}


function tableX(dataArr, idTable){
	 const tableHead =["x","y","xi-x̄", "yi-ȳ","(xi-x̄)(yi-ȳ)","(xi-x̄)²","(yi-ȳ)²"];

	let tableTxt = "<table>";
	tableTxt += "<tr>";
		for (let j = 0; j < 7; j++) {
			tableTxt += "<td>" + tableHead[j] + "</td>";
		}
		tableTxt += "</tr>";

	for (let i = 0; i < dataArr.length; i++) {
		tableTxt += "<tr>";
		for (let j = 0; j < dataArr[i].length; j++) {
			tableTxt += "<td>" + dataArr[i][j].toFixed(2) + "</td>";
		}
		tableTxt += "</tr>";
	}


	tableTxt += "<tr>";
	for (let j = 0; j < 7; j++) {
		tableTxt += "<td>" + sumA[j].toFixed(2) + "</td>";
	}
	tableTxt += "</tr>";

	tableTxt += "</table>";
	
	document.getElementById(idTable).innerHTML = tableTxt;
	
	
}