// tady je místo pro náš program

let title = 'Forrest Gump';

let title1 = title.length;
let title2 = title.toUpperCase();
let title3 = title.slice(0,5);
let title4 = title.slice(-5) 


const email = prompt('Please enter your email address:');

const atIndex = email.indexOf('@');
const parsedEmail = {
  name: email.slice(0, atIndex),
  domain: email.slice(atIndex),
}

document.body.innerHTML = 
'<p> Your username is: ' + parsedEmail.name + '</p>'

document.body.innerHTML += 
'<p> Domain: ' + parsedEmail.domain + '</p>'
