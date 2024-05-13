
const d = new Date();
let time = d.getTime();

const e = new Date("July 21, 1983 01:15:00");
let date = e.getDate()

const sd = new Date();
sd.setDate(15);

const gh = new Date();
gh.setTime(1);
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", "blue");
  const myMother = new Person("Sally", "Rally", "green");
  
  Person.prototype.nationality = "English";
  const dxx = new Date();
let text = dxx.toLocaleDateString();
 
const times = new Date();
let texts = times.toLocaleTimeString();

const der = 25;
let text1 = der.toString();
let text2 = typeof text
document.write(`the answer is ${text1} ${text2} </br></br>`);


document.write (` the answer is :${gh}</br></br>`);

document.write(`the time is :${d} </br></br>`);

document.write(`today is :${date} </br></br>`);

document.write(`updaated date is :${sd} </br></br>`);

document.write(` my nationality is  ${myFather.nationality}</br></br>` ) 

document.write(`today date is :${dxx} </br></br>`);

document.write(`the current time  is :${texts} </br></br>`);
