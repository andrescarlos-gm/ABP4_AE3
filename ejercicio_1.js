// var x = '';
while((isNaN(x))||x>100 ){
var x = parseInt(prompt('Ingresar un numero entero menor que 100'));
}
var i 
var y=0
for (i=0;i<=x;i++) { 
   	document.write(i)
   	document.write("<br>")
	y = y+i
}
alert('El resultado de la sumatoria desde 1 hasta '+x+' es '+y);