import {BasicCalculator} from "./BasicCalculator";
import {ExpertCalculator} from "./ExpertCalculator";

let calc = new BasicCalculator();
let calcExp = new ExpertCalculator()

console.log(calc.add(2,3,5,))
console.log(calc.dif(15, 10,4))
console.log(calc.mul(2, 5,4))
console.log(calc.div(8, 2,2))
console.log(calcExp.pow(2, 3))
console.log(calcExp.fact(5))
console.log(calcExp.sqrt(121))