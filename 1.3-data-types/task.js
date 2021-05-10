function calculateTotalMortgage(percent, contribution, amount, dateEnd) {
    // код для задачи №1 писать здесь
    "use strict"; 
    let today = new Date();

    if ( ( isNaN (parseFloat (percent) ) ) || (percent < 0 ) ) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${parseFloat (percent) || percent}`;   
    }
    

    if (isNaN (parseFloat (contribution)) || (contribution <0) ) {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${parseFloat (contribution) || contribution}`;
    }

    if (isNaN (parseFloat (amount)) || (amount <0) ) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${parseFloat (amount) || amount}`;
    }
    

    if ( dateEnd < today ) {
       return `Параметр "Срок ипотеки" содержит неправильное значение ${dateEnd.toLocaleString()}`;
    }

    if (amount < contribution) {
        return (0);
    }

    let S = amount - contribution;
    let P = ( percent / 100 ) / 12 ;
    let n = (dateEnd.getFullYear() - today.getFullYear() ) * 12 +  (dateEnd.getMonth() - today.getMonth() );   
    let totalAmount =  (S * ( P + P / ( ( ( 1 + P ) ** n ) - 1 ) ) * n);
    
    totalAmount = totalAmount.toFixed(2);
    
    return (parseFloat(totalAmount));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
   
    if  ( (name === undefined) || (name.length > 0) || (name.length === 0) ) {
        return `Привет, мир! Меня зовут ${name || 'Аноним'}.`; 
    }
    
}