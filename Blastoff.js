class Blastoff {
    static averageAge(I, J, K, X, Y){
        if(I < 0 || J < 0 || K < 0 || X < 0 || Y < 0){
            throw new Error("Negative values were sent to this function");
        }
        return (I+J+K+X+Y)/5.0;
    }
    static averageFuelConsumption(A, B){
        if(A < 0 || B <= 0){
            throw new Error("Invalid values were sent to this function");
        }
        return A/B;
    }
    static smallerNumber(a, b, c){
        if(a > b){
            if(b > c){
                return c;
            } else {
                return b;
            }
        } else if (a > c) {
            if(c > b){
                return b;
            } else {
                return c;
            }
        } else {
            return a;
        }
    }
    static CtoF(C){
        if(C < -273.15){
            throw new Error("Too cold");
        }
        return (C*9/5)+32;
    }
    static isMultiple(a, b){
        if(a%b == 0){
            return true;
        } else {
            return false;
        }
    }
    static playTime(A, B){
        const timeA = new Date(A);
        const timeB = new Date(B);
        let milliseconds = timeB.getTime() - timeA.getTime();
        const hours = Math.floor(milliseconds/3600000);
        milliseconds -= hours*3600000;
        const minutes = Math.floor(milliseconds/60000);
        milliseconds -= minutes*60000;
        const seconds = Math.floor(milliseconds/1000);
        return {
            hours, minutes, seconds
        }
    }
    static getEvenNumbers(A){
        let returnValues = [];
        for (const value of A){
            if(value%2 == 0){
                returnValues.push(value);
            }
        }
        return returnValues;
    }
    static isNumberPrime(N){
        let divisibleList = [];
        for(let probe = N; probe > 0; probe --){
            if(N%probe == 0){
                divisibleList.push(probe);
            }
        }
        if(divisibleList.length <= 2){
            return true;
        } else {
            return false;
        }
    }
    static timesTable(N){
        return {
            x1: `${N} * 1 = ${N*1}`,
            x2: `${N} * 2 = ${N*2}`,
            x3: `${N} * 3 = ${N*3}`,
            x4: `${N} * 4 = ${N*4}`,
            x5: `${N} * 5 = ${N*5}`,
            x6: `${N} * 6 = ${N*6}`,
            x7: `${N} * 7 = ${N*7}`,
            x8: `${N} * 8 = ${N*8}`,
            x9: `${N} * 9 = ${N*9}`,
            x10: `${N} * 10 = ${N*10}`,
        }
    }
    static numberFactorial(N){
        let factorial = 1;
        for(let guide = N; guide > 1; guide --){
            factorial *= guide;
        }
        return factorial;
    }
    static intersection(A, B){
        let values = [];
        for(let guideA = 0; guideA < A.length; guideA++){
            for(let guideB = 0; guideB < B.length; guideB++){
                if(A[guideA] === B[guideB]){
                    values.push(A[guideA]);
                    break;
                }
            }
        }
        return values;
    }
    static concatenation(A, B){
        let values = A;
        for(let guide = 0; guide < B.length; guide++){
            values.push(B[guide]);
        }
        return values;
    }
    static printMatrix(M){
        for(let guide = 0; guide < M.length; guide++){
            console.log(M[guide]);
        }
    }
    static isPalindrome(word){
        const array = word.split("").reverse();
        let drow = "".concat(...array);
        if(word.toLowerCase() === drow.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Blastoff;