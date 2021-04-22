//String.prototype.isPalindrome - для задачи №1

function isPalindrome(){
    let strReverse = this.split('').reverse().join('').replace(/\s+/g, '').toLowerCase(''); 
    
    if (strReverse === this.replace(/\s+/g, '').toLowerCase('')) {
        return (true);
    } 
    else {
        return (false);
    }
}

String.prototype.isPalindrome = isPalindrome;


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let average;
    let roundedAverage;
    let markslen = marks.length;
    average = 0;
    roundedAverage = 0;
    
    if (markslen === 0){
        return (roundedAverage);
    }
    else {
        for (let i=0; i<markslen; i++){
            average = average + marks[i];
        }

        average = average / markslen;
        roundedAverage = Math.round(average);
        
        return (roundedAverage);
    }
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}