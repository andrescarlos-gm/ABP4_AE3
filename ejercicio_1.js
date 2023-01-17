let x = ''
function ejercicio1(x){
if (x<100){
let y = 0
for (i=0;i<=x;i++) { 
   	document.write(i);
   	document.write("<br>");
	 y = y+i
}
console.log('El resultado de la sumatoria desde 1 hasta '+x+' es '+y);

}
}