//Excersie 1
function amount(price) {
    const a = 3;
    const b = 0.01;
    const interestB = price * b;
    const totalCost = price + a + interestB
    return totalCost
}
console.log(amount(100));

//Exercise 2
function welcome (name1, name2 , name3) {
    console.log("Welcome " + name1 +" "+ name2 + " "+ name3);
}

//Exercise 3
function calAge(birthYear) {
    let thisYear = new Date().getFullYear();
    let age = thisYear - birthYear;
    return age;
}
console.log(calAge(24));

function welComePerson (name1,name2,name3,age1,age2,age3) {
    age1 = calAge(age1);
    age2 = calAge(age2);
    age3 = calAge(age3);
    console.log("Welcome " + name1 + " , you are " + age1 +".","Welcome " + name2 + " , you are " + age2 +".", "Welcome " + name3 + " , you are " + age3 +"."   )
}
welComePerson("a","b","c",1999,1958,2011)