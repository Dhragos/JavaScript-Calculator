import {Calculator} from "./Calculator";

export class ExpertCalculator implements Calculator{

    pow(a, b){
       let res = Math.pow(a, b);
        return res;
    }

    fact(n){
        if (n == 1)
            return 1;
        for (var i = n - 1; i >= 1; i--)
            n *= i;
       return n;
    }

    sqrt(n){
        let res = Math.sqrt(n);
        return res;
    }
}

