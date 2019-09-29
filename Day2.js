
function getInitialBalance(){
    var balance=400;
    return balance;
}

function deposit(amount){
    var updatedBalance=getInitialBalance()+amount;
    return updatedBalance;
}

function anotherDeposit(amount){
    return getInitialBalance()+amount;
}

function withdraw(amount){
    var updatedBalance=getInitialBalance();
    if(getInitialBalance()>amount){
        updatedBalance=getInitialBalance()-amount;
    }
    return updatedBalance;
}
function isGreater(a,b){
    if(a>b){
        return true;
    }
    return false;
}

function anotherIsGreater(a,b){
    return a>b;
}
console.log(anotherDeposit(100));

function getUserName(){
    return "sample"
}
function getPassword(){
    return "123"
}

function login(username,password){
    if(username==="" || password===""){
        return "fill up the required field"
    }
    if(username===getUserName() && password===getPassword()){
        return "login success";
    }
    return "creadential is not matched";
}

console.log(login("sample","123"));

function anotherLogin(username,password){
    if(username!=="" || password!==""){
        if(username===getUserName() && password===getPassword()){
            return "login success"
        }
        return "not matched"
    }
    return "empty"
}
console.log(anotherLogin("",""));