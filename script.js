// //your code here
// let inPut= document.getElementById("evaluatedText");
// let count= document.getElementById("letterCount");
// inPut.addEventListener('input',()=>{
// 	let str=inPut.value;
// 	count.innerHTML=`${str.length}`;
// })
//your code here
let a= document.getElementById("evaluatedText");
let b= document.getElementById("letterCount");

a.addEventListener('input', ()=> {
	let str= a.value;
	b.innerHTML= `${str.length}`;
})