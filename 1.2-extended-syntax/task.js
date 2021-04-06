function getResult(a,b,c){
    // код для задачи №1 писать здесь
    "use strict";

    let desc = null;
    let x = [];
    desc = b**2 - (4 * a * c) ;
    
    if (desc > 0) {
        x[0] = (-b + Math.sqrt(desc) ) / 2 * a;
        x[1] = (-b - Math.sqrt(desc) ) / 2 * a;
        return x;
    }
    
        else if (desc === 0) {
            x[0] = -b / 2 * a;
            return x;
        }

    else {
        return x;
    }

    // return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    
    let averageMark = 0;

    function getMarksAverage(marks){
        let mark = null;
        
        for (let i = 0; i < marks.length; i++) {
            mark = marks[i] + mark;
        }

        return mark / marks.length;
    }    


    if (marks.length > 5) {
        averageMark = getMarksAverage(marks.splice(0,5));  
        return averageMark;
    }
    
        else if (marks.length <= 5) {
            averageMark = getMarksAverage(marks);
            return averageMark;
        }
    
    else {
        return averageMark;
    }

    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let today = new Date();
    let result = '';

    if (today.getFullYear() - dateOfBirthday.getFullYear() >=18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    
    else {
        result = `Сожалею,  ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;  
    }
    
    return result;
}