// Задание 1
function getSolutions (a,b,c)
{
    let D = null;
    let x1 = null;
    let x2 = null;

    D = b ** 2 - 4 * a * c;

    if (D < 0) {
        return { D: D, roots:[] }
    }

    if (D === 0) {
        x1 = ( - b / (2 * a) );
        console.log('X1='+x1);
        return {D: D, roots:[x1]}
    }

    if (D > 0){
        x1 = (- b + Math.sqrt(D)) / 2 * a;
        x2 = (- b - Math.sqrt(D)) / 2 * a;
        return {D: D, roots:[x1, x2]}
    }
}

function showSolutionsMessage (a,b,c)
{
    let result=undefined;

    result= getSolutions (a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.roots.length = 0) {
        console.log('Уравнение не имеет вещественных корней');
    }
    else if (result.roots.length ===1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    else if (result.roots.length ===2) {
        alconsole.logert(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);   
    }
}

//Задание 2
function getAverageScore(data)
{
  let subjObj = new Object();
  let allAverage = null;
  let i = null;

  for (let subject in data) {
    let marksArray = data[subject];
    subjObj[subject] = getAverageMark(marksArray);
    allAverage = allAverage + getAverageMark(marksArray);
    i = i + 1;
  }
 
  if (i === null) {
    subjObj["average"] = 0;
  }
  else {
    subjObj["average"] = allAverage / i;
  }
  
  return (subjObj);

}

function getAverageMark([...marks])
{
    let summ = null;
    let averageSumm = null;
    let marksLength = null;

    marksLength = marks.length;

    if (marksLength === 0) {
        averageSumm = 0;     
        return (averageSumm);    
    }
    else {
       
        for (let i = 0; i < marksLength; i++){
            summ = summ + parseInt(marks[i]);       
        }

        averageSumm = summ / marksLength;
        return (averageSumm);
        }
}



