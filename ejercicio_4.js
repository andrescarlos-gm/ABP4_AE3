while((isNaN(x))||(x<10||x>=1000)){
    var x = parseInt(prompt('Ingresar un numero entero mayor que 10 y menor que 100'));
    }
    var i 
    var y=0
    for (i=1;i<=x;i++) { 
    if ((i%2)==0){
        y=i+y
    }

    }
alert('El resultado de la sumatoria de pares desde 1 hasta '+x+' es '+y);