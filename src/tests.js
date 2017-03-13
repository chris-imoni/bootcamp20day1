// The dataTypes function
function dataTypes (data){
    if(data === null || data === undefined){
        return "no value";
    }else if(typeof data === "string"){
        return data.length;
    }else if (typeof data === "boolean"){
        return data;
    }else if (typeof data === "number"){
        if(data < 100){
            return "less than 100";
        }else if(data > 100){
            return "more than 100";
        }else{
            return "equal to 100";
        }
    }else if(Array.isArray(data)){
        return data[2];
    }else{
        if(typeof data === "function"){
            return data(true);
        }
    }
}


//The getPrimes function
function getPrimes(num){
    var primes = [];
    if (num === 0){
        return 'input should be greater than 0';
    }else if(typeof num !== "number"){
        return 'not a number';
    }else{
        for(var i = 2; i <= num; i++){
            if(CheckPrime(i)){
                primes.push(i);
            }
        }                    
       
    }

    return primes;
}     

function CheckPrime(n){
    var r = n < 2 ? n : Math.round(n/2);            
    var count = 2;
    while (count <= r){
        if(n % count === 0){
            return false;
        }
        count++;
    }
    return true;
}