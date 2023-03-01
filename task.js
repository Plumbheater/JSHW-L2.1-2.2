"use strict";

//Task # 1

function solveEquation(a,b,c) {
   let result = b**2-4*a*c;
   if (result < 0) {
    result = [];
   };
   if (result === 0) {
    result = Math.round((-b/(2*a)));
   };
   if (result > 0) {
    let result1 = Math.round((-b + Math.sqrt(b))/(2*a));
    let result2 = Math.round((-b - Math.sqrt(b))/(2*a));
    result = [result1, result2];
    
   };
   return([result]);
};
console.log(solveEquation(1,5,4));

//Task # 2

function calculateTotalMortgage(percent, contribution, amount, date) {
  let per = parseInt(percent) / 100 / 12;
  let con = parseInt(contribution);
  let am = parseInt(amount);
  	if (isNaN(per) || per < 0) {
   		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
   	} else if (isNaN(con) || con < 0) {
   		return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
   	} else if (isNaN(am) || am < 0) {
   		return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
   	} else {
			
  		let today = new Date();
  		if (today.getMonth() > date) {
			return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
		} else {
			let s = am - con;
  			let n = date;
  			let pay = s*(per+per/(((1+per)**n)-1));
  			let totalAmount = (pay * n).toFixed(2);
 			return +totalAmount;
 		}	
    }
  }
  
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage('percent', 0, 10000, 36));
console.log(calculateTotalMortgage(15, 'contribution', 10000, 36));
console.log(calculateTotalMortgage(15, 0, 'amount', 36));
console.log(calculateTotalMortgage(10, 20000, 20000, 0));