// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const isEmpty = (line) => line !== '' && line != null;
const isFirstLine = (index) => index === 0;
const header = (line) => `<h1>${line}</h1>`;
const paragraph = (line) => `<p>${line}</p>`;
const br = () => `<br/>`;

const lineChecker = (line, index) => {
  if (!isEmpty(line)) {
    //console.log('IsEmpty ==>' + [line, index]);
    return br();
  }
  //console.log([line, index]);
  return isFirstLine(index) ? header(line) : paragraph(line);
};

let liens = ['Title', '', 'paragraph'].map(lineChecker);
console.log(liens);
let frag = document.createRange().createContextualFragment(liens.join(''));
console.log(liens.join(''));
console.log(frag);
document.getElementById('aaaapp').append(frag);
