/*var a = 10;
var b = 20;
var c = 30;

if(a > b && a > c){
    console.log(a)
}else if(b > c && b > a){
    console.log(b)
}else{
    console.log(c)
} */

/*function largeNumber(a, b, c) {

    if (a > b && a > c) {
        console.log(a)
    } else if (b > c && b > a) {
        console.log(b)
    } else {
        console.log(c)
    }
}
largeNumber(50,60, 10); */

/*for(i = 0; i<=10; i++){
    console.log('go ' + i + ' step');
}*/

/*var num;

do{
    num = prompt('enter value');
    console.log('inside the loop');
}
while(num<=10){
    console.log('outside loop');
}
*/

/*var newnum = 0;

while(newnum < 10){
    newnum = prompt('enter value');
    console.log('less than 10');
}
 console.log('bigger than 10'); */

/*
for(i = 0; i<=10; i++){
   if(i === 6){
        break;
   }
    console.log('i is now at ' + i);
}*/


/*for(i=0; i<10; i++){
    if(i===5){
    console.log(i + ' is skipped');
        continue;
    }
   console.log('i is now at ' + i);
}

*/

/*var arrname = ['rezwan', 'soni', 'fahim', 'niaz'];
arrname.push('rifat');
arrname.unshift('raju');

for(i = 0; i<arrname.length; i++){
    console.log('name: ' + arrname[i]);
}*/

/*var arrname = ['rezwan', 'soni', 'fahim', 'niaz'];
var newarr = arrname.splice(3);
console.log(arrname);
console.log(newarr);
*/


/*var rahim = {
    fullName: 'rahim uddin',
    age: 30,
    job: 'coder'
}
console.log(rahim);
console.log (rahim.job);
rahim.job = 'programmer';
console.log(rahim.job);

*/

/*var person ={
    name: 'rahim khan',
    age: 455,
    job: 'job holder',
    anotherobj:{
        name: 'shobuj',
        job: 'business',
        msg: function (){
            console.log(this);
        }
    }
}
person.anotherobj.msg();
*/

/*var person = {
    name: 'rahim khan',
    age: 455,
    job: 'job holder',
    anotherobj: {
        name: 'shobuj',
        job: 'business',
        msg: function () {
            console.log(this.name);
        }
    }
}
var obj = person.anotherobj.msg.bind(person);
obj();



var birthCalculator = {
    name: 'rezwan',
    dob: 1996,
    age: function (currentYear, msg) {
        console.log(msg + ' ' + this.name + 'is' + (currentYear - this.dob) + ' years old');
    }
}



var rahim = {
    name: 'Rahim Abdu',
    dob: 1986
}

var final  = birthCalculator.age.bind(rahim);
final(2018 , 'hello!');
*/

/*var person = {
    name: 'abdul gani',
    age: 22,
    timer: function(){
        setTimeout(function(){
            console.log(this.name);
        }.bind(person), 1000)
    }
}

person.timer();



var obj = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job =job;
}

var samir = new obj('samir hossain', 22 , 'programmer' );
var jamil = new obj('Jamil Hossain', 18, 'Driver');
var zonayed = new obj('Zonayed Ahmed', 21, 'Developer');

console.log(samir.name);
console.log(samir.age);
console.log(samir.job);

console.log(jamil.name);
console.log(jamil.age);
console.log(jamil.job);

console.log(zonayed.name);
console.log(zonayed.age);
console.log(zonayed.job);

*/

/*var obj = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function(){
        console.log(this.name + ' is born in ' + (2018-this.age));
    }
}
obj.prototype.address = 'bangladesh';
var samir = new obj('samir hossain', 65 , 'programmer' );
console.log(samir.name);
console.log(samir.age);
console.log(samir.job);
console.log(samir.address);
*/


/*var obj = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}

var teacher = function(name, age, job, subject){
    obj.call(this, name, age, job);
    this.subject= subject;
}
var kamaljeet = new teacher('Kamaljeet Saini', 53, 'Teacher', 'CSE');
console.log(kamaljeet.name);
console.log(kamaljeet.age);
console.log(kamaljeet.job);
console.log(kamaljeet.subject); */

/*(function demo(){
    var a = 10;
    var b = 20;
    var pi = 3.1416;
    console.log(a+b+pi);
})();


const str = 'hello';
console.log (str.repeat(5));
*/

class person_one{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
        this.dateOfBirth = () => {
         console.log(`${this.name} is born in ${2018 - this.age}`);
      }
    }
}

class teacher extends person_one{
    constructor(name, age, job, subject){
        super(name, age, job);
        this.subject = subject;
    }
}
const ourSir = new teacher('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');
console.log(ourSir.dateOfBirth());
























