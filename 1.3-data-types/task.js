function calculateTotalMortgage(percent, contribution, amount, dateEnd) {
    // код для задачи №1 писать здесь
    "use strict"; 
    let today = new Date();

    if ( (isNaN (parseFloat (percent))) || (percent <0) ) {
        alert(`Параметр percent содержит неправильное значение ${parseFloat (percent)}`);
    }

    if (isNaN (parseFloat (contribution)) || (contribution <0) ) {
        alert(`Параметр contribution содержит неправильное значение ${parseFloat (contribution)}`);
    }

    if (isNaN (parseFloat (amount)) || (amount <0) ) {
        alert(`Параметр amount содержит неправильное значение ${parseFloat (amount)}`);
    }
    
    

    if ( (dateEnd < today) || (dateEnd.length === undefined) ) {
        alert(`Параметр date содержит пустую дату или предыдущую ${dateEnd}`);
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
    if (name === undefined){
        return `Привет, мир! Меня зовут Аноним.`;   
    }

    if (name.length > 0) {
        return `Привет, мир! Меня зовут ${name}.`; 
    }
    else {
        return `Привет, мир! Меня зовут Аноним.`;  
    }
    
}