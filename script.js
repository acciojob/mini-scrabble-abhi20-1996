//your code here
let inPut= document.getElementById("evaluatedText");
let count= document.getElementById("letterCount");
inPut.addEventListener('input',()=>{
	let str=inPut.value;
	count.innerHTML=`${str.length}`;
})