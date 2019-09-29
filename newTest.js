function getUserName() {
  var name = "hello";
  return name;
}

function getUserPassword() {
  var password = 123;
  return password;
}

function login(name, password) {
  if (name === "" || password === "") {
    console.log("Please, Fill the required field");
  }
  if (getUserName() === name && getUserPassword() == password) {
    console.log("Login Success");
  } else {
    console.log("Don't Match");
  }
}

login("", "");

function getGrade(marks) {
  if (marks >= 80) {
    return "A+";
  }
  if (marks >= 70) {
    return "A";
  }

  if (marks >= 60) {
    return "B";
  }

  if (marks >= 50) {
    return "C";
  }

  if (marks >= 40) {
    return "D";
  }
  return "Fail";
}

console.log(getGrade(100));

function getMonthsInString(value) {
  if (value === 1) {
    return "January";
  }
  if (value === 2) {
    return "February";
  }
  if (value === 3) {
    return "March";
  }
  if (value === 4) {
    return "April";
  } else {
    return "Wrong Entry";
  }
}
console.log(getMonthsInString(7));

function getAnotherMonthsInString(value) {
  switch (value) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    default:
      return "wrong Entry";
      break;
  }
}
console.log(getAnotherMonthsInString(4));

function getTeamByName(value) {
  switch (value) {
    case "karim":
    case "rahim":
    case "monu":
      return "Team A";
      break;
    case "Sahil":
      return "Team B";
      break;
    default:
      return "wrong Entry";
      break;
  }
}

console.log(getTeamByName("ra"));

function getCredential(){
    var credential={
        username:"sample",
        password:"123"
    }
    credential["type"]="basic"
    return credential;
}
console.log(getCredential());

function login(name, password) {
    if (name === "" || password === "") {
      console.log("Please, Fill the required field");
    }
    if (getCredential().username === name && getCredential().password === password) {
      console.log("Login Success");
    } else {
      console.log("Don't Match");
    }
  }
  
  function loginFromObject(name, password) {
    if (name === "" || password === "") {
      console.log("Please, Fill the required field");
    }
    if (getCredential()["username"] === name && getCredential()["password"] === password) {
      console.log("Login Success");
    } else {
      console.log("Don't Match");
    }
  }
loginFromObject("","")

var type = {
    type: 'hello',
    type1: 'hello1',
    type2: 'hello2'

} 
  
function getObjectValue(key){
    if(type[key]!==undefined){
        return type[key]   
    }
    return "not found";
}
function getAnotherObjectValue(key){
    if(type.hasOwnProperty(key)){
        return type[key]   
    }
    return "not found";
}

console.log(getObjectValue('type'));

function createUserObject(name,password,type){
    var user = {
       userName : name, 
       userPassword : password, 
       userType : type
    }
    return user
}
console.log(createUserObject('Tanvir','123','Admin'))
console.log(getAnotherObjectValue("type"));

var user={
    name:"test",
    address:{
        area:"mirpur",
        road:"2"
    }
}

console.log(user["address"]["road"]);

var myProfile={
    name:"Tanvir Ahamed",
    age: 23,
    homeDistrict: 'Tangail',
    education : [
        {
            instituteType: '',
            instituteName: '',
            instituteAddress: '',
            certificationName: ''
        }
    ]

}
