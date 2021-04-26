// Задание №1
function parseCount (count) {
      
    if ( isNaN(Number.parseInt(count) ) )  {
       throw new Error('Невалидное значение');
    }
    else {
        return (Number.parseInt(count));
    }  
}


function validateCount(count){
    try{
       return parseCount(count);
    }   catch(e){
            return(e);
        }  
}


// Задание №2

class Triangle {
    constructor (a,b,c) {
        if ( (c > a + b) || (a > c + b) || (b > c + a) ) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        else {
            this.a = a,
            this.b = b,
            this.c = c   
        }    
    }

      getPerimeter () {
        return (this.a + this.b + this.c);
    }

     getArea () {
        return(parseFloat((Math.sqrt( (this.getPerimeter()/2) *  ((this.getPerimeter()/2)  - this.a) * ((this.getPerimeter()/2)  - this.b ) * ((this.getPerimeter()/2)  - this.c)  ) ).toFixed(3) ));
    }
}


function getTriangle(a, b, c) {
    try {
        let tringl = new Triangle(a, b, c);
        return (tringl);
    }
        catch(e) {
            let tringl = {
                getArea(){
                    return('Ошибка! Треугольник не существует');
                },
                getPerimeter() {
                    return('Ошибка! Треугольник не существует');
                }
            }
            return(tringl);

        }
}