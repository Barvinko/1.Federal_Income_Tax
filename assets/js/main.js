function calc(){
    let sumBasic = document.getElementById("Sum").value * 100 ;
    let deduction = 1255000;
    let sum = sumBasic - deduction;
    console.log(`sum: ${sum}`);
    let limits = [995000, 4052500, 8637500, 16492500, 20942500, 52360000];
    let rates = [10, 12, 22, 24, 32, 35, 37];
    let tax = 0;
    let taxLimits = [];

//Создаёт масив где находяться посчитаны по максимуму налоги для разного диапазона сумм  
    for (let i = 0; i < limits.length; i++) {
        if (i == 0) {
            taxLimits[i] = (limits[i]  * rates[i])/100;   
        }else{
            taxLimits[i] = ((limits[i] - limits[i-1])  * rates[i])/100 + taxLimits[i-1];  
            console.log(taxLimits[i])
        }
    }

    if (sum <= 0) {
        tax = 0;
    }else{

        for (let i = 0; i < rates.length; i++) {
            if (i==0) {
                tax = (sum * rates[i])/100;
                console.log(`${i+1}tax: ${tax}`);
            }else if(sum > limits[i-1] && i<limits.length && i!=0){

                tax = ((sum - limits[i-1]) * rates[i])/100 + taxLimits[i-1];
                console.log(`${i+1}tax: ${tax}`);
            }else if(sum > limits[5]){
                tax = ((sum - limits[i-1]) * rates[i])/100 + taxLimits[i-1];
            }         
        }
    }
    
    tax = tax/100;
    console.log(`tax finish ${tax}`);
    tax = tax.toFixed(2);
    document.getElementById("taxSum").innerHTML ='$ ' + tax;


    // let sum = +document.getElementById("Sum").value;
    // let deduction = 12550;
    // let sumForTax = sum - deduction;
    // let tax;
    // if(sum <= deduction){
    //     tax = 0;
    // }else if (sumForTax <= 9950){
    //     tax = (sumForTax * 0.10);
    // }else if (sumForTax <= 40525) {
    //     tax = (sumForTax - 9950) * 0.12 + 995;        
    // }else if (sumForTax <= 86375) {
    //     tax = (sumForTax - 40525) * 0.22 + 4664;            
    // }else if (sumForTax <= 164925) {
    //     tax = (sumForTax - 86375) * 0.24 + 14751;
    // }else if (sumForTax <= 209425) {
    //     tax = (sumForTax - 164925) * 0.32 + 33603;
    // }else if (sumForTax <= 523600) {
    //     tax = (sumForTax - 209425) * 0.35 + 47843;
    // }else if (sumForTax > 523600) {
    //     tax = (sumForTax - 523600) * 0.37 + 157804.25;
    // }
    // console.log(tax);
    // tax = tax.toFixed(2);
    // document.getElementById("taxSum").innerHTML ='$ ' + tax;
}