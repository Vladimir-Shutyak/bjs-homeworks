function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    "use strict";
  
    let today = new Date();
    let dateEnd = new Date(date);
    let totalAmount = 0;
    let S = 0;
    let P = 0;
    let n = 0;

    if (isNaN (parseFloat (percent))) {
        alert(`Параметр percent содержит неправильное значение ${parseFloat (percent)}`);
    }

    if (isNaN (parseFloat (contribution))) {
        alert(`Параметр contribution содержит неправильное значение ${parseFloat (contribution)}`);
    }

    if (isNaN (parseFloat (amount))) {
        alert(`Параметр amount содержит неправильное значение ${parseFloat (amount)}`);
    }
    
    S = amount - contribution;
    n = ( Math.floor ( ( ( dateEnd - today ) / ( 1000 * 3600 * 24 ) ) / 30 ) );
    P =  ( percent / 100 ) / 12 ;
    totalAmount =  S * ( P + P / ( ( ( 1 + P ) ** n ) - 1 ) );
    totalAmount = totalAmount.toFixed(2);
    
    return totalAmount
}


function getGreeting(name) {

    // код для задачи №2 писать здесь
    
    if (name.length > 0) {
        return `Привет, мир! Меня зовут ${name}.`; 
    }
    else {
        return `Привет, мир! Меня зовут Аноним.`;  
    }
    
}