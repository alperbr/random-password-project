const CapLetters = [];
const lowLetters = [];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
];

const settings = [CapLetters, lowLetters, numbers, symbols];

const capacity = document.getElementById("count");
const sSymbol = document.getElementById("symbol");
const sCap = document.getElementById("cap");
const sLow = document.getElementById("low");
const sNum = document.getElementById("num");
const capacityLabel = document.getElementById("capacity");
const generate = document.getElementById("generate");
const pass = document.getElementById("pass");
const copy = document.getElementById("copy");

for (let i = 65; i <= 90; i++) {
  CapLetters.push(String.fromCharCode(i));
}

for (let i = 97; i <= 122; i++) {
  lowLetters.push(String.fromCharCode(i));
}

capacity.addEventListener("input", function () {
  capacityLabel.textContent = "Length: " + capacity.value;
});
generate.addEventListener("click", function () {
  check(sSymbol, symbols);
  check(sCap, CapLetters);
  check(sLow, lowLetters);
  check(sNum, numbers);

  getRandom();
});

function check(box, symbol) {
  if (!box.checked) {
    let index = settings.indexOf(symbol);

    if (index != -1) {
      settings.splice(index, 1);
    }
  } else {
    if (!settings.includes(symbol)) {
      settings.push(symbol);
    }
  }
}

function getRandom() {
  let password = "";
  for (let i = 0; i < capacity.value; i++) {
    let random1 = Math.floor(Math.random() * settings.length);
    let selectedSymbol = settings[random1];
    let random2 = Math.floor(Math.random() * settings[random1].length);
    let letter = selectedSymbol[random2];
    password = password + letter;
  }
  pass.value = password;
}

copy.addEventListener("click", function () {
  pass.select();
  navigator.clipboard.writeText(pass.value);
});
