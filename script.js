"use strict";
// kombinacije uslijed kojih dolazi do pobjede nekog od igrača//

//skrivanje svih vrijednosti
function skrivanjeVrijednosti() {
  for (let i = 1; i <= 9; i++) {
    document.querySelector(".broj" + String(i)).style.visibility = "hidden";
  }
}
skrivanjeVrijednosti();

const uvijetiPobjede = {
  1: "1,2,3",
  2: "4,5,6",
  3: "7,8,9",
  4: "1,4,7",
  5: "2,5,8",
  6: "3,6,9",
  7: "1,5,9",
  8: "3,5,7",
};

// red s dostupnim poljima
let dostupnaPolja = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// izbacivanje slobodnog polja kako nebi sustav više puta zauzeo isto polje
function izbacivanjeSlobodnogPolja() {
  const brojPolja = dostupnaPolja.indexOf(number);
  dostupnaPolja.splice([brojPolja], 1);
  dostupnaPolja.sort();
  if (dostupnaPolja.length < 1) {
    alert(`Neriješeno! X-O`);
  }
}
// varijable za pospremanje trenutnih pozicija zauzetih znakovima X ili O
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let g = 7;
let h = 8;
let i = 9;
let number;
let brojac = 1;
let ostvarenaPobjeda = 0;

//funkcija promjene simbola na igračkoj ploči
function promjenaSimbola() {
  document.querySelector(
    ".broj" + String(number)
  ).textContent = document.querySelector("p1").textContent;
  document.querySelector(".broj" + String(number)).style.visibility = "visible";
}
// promjena rezultata na ploči rezultata
function scoreboard() {
  if (document.querySelector("p1").textContent === "X") {
    document.querySelector(".rezX").textContent++;
  } else if (document.querySelector("p1").textContent === "O") {
    document.querySelector(".rezO").textContent++;
  }
}

//funkcija o obavijesti
function obavijest() {
  alert(`Pobjednik je ${document.querySelector("p1").textContent}`);
  document.body.style.backgroundColor = "green";
  scoreboard();
}
// provjera s uvjetima za pobjedu
function provjeraPobjede() {
  if (a == e && e == i) {
    ostvarenaPobjeda = 1;
    obavijest();
  }
  if (c == e && e == g) {
    ostvarenaPobjeda = 1;
    obavijest();
  }
  if (a == b && b == c) {
    ostvarenaPobjeda = 1;
    obavijest();
  }
  if (d == e && e == f) {
    ostvarenaPobjeda = 1;
    obavijest();
  }
  if (g == h && h == i) {
    ostvarenaPobjeda = 1;
    obavijest();
  }
  if (a == d && d == g) {
    ostvarenaPobjeda = 1;
    obavijest();
  }
  if (b == e && e == h) {
    ostvarenaPobjeda = 1;
    obavijest();
  }
  if (c == f && f == i) {
    ostvarenaPobjeda = 1;
    obavijest();
  }
}

function promjenaIgraca() {
  let igrac = document.querySelector("p1").textContent;
  if (igrac === "X") {
    document.querySelector("p1").textContent = "O";
  } else {
    document.querySelector("p1").textContent = "X";
  }
}

function pcPlayer() {
  if (ostvarenaPobjeda == 0) {
    if (dostupnaPolja.includes(1)) {
      number = 1;
      a = document.querySelector("p1").textContent;
      document.querySelector(".broj1").textContent = "O";
      document.querySelector(".broj1").style.visibility = "visible";
      sveFunkcije();
    } else if (dostupnaPolja.includes(3)) {
      number = 3;
      c = document.querySelector("p1").textContent;
      document.querySelector(".broj3").textContent = "O";
      document.querySelector(".broj3").style.visibility = "visible";
      sveFunkcije();
    } else if (dostupnaPolja.includes(5)) {
      number = 5;
      e = document.querySelector("p1").textContent;
      document.querySelector(".broj5").textContent = "O";
      document.querySelector(".broj5").style.visibility = "visible";
      sveFunkcije();
    } else if (dostupnaPolja.includes(7)) {
      number = 7;
      g = document.querySelector("p1").textContent;
      document.querySelector(".broj7").textContent = "O";
      document.querySelector(".broj7").style.visibility = "visible";
      sveFunkcije();
    } else if (dostupnaPolja.includes(9)) {
      number = 9;
      i = document.querySelector("p1").textContent;
      document.querySelector(".broj9").textContent = "O";
      document.querySelector(".broj9").style.visibility = "visible";
      sveFunkcije();
    } else if (dostupnaPolja.includes(2)) {
      number = 2;
      b = document.querySelector("p1").textContent;
      document.querySelector(".broj2").textContent = "O";
      document.querySelector(".broj2").style.visibility = "visible";
      sveFunkcije();
    } else if (dostupnaPolja.includes(4)) {
      number = 4;
      d = document.querySelector("p1").textContent;
      document.querySelector(".broj4").textContent = "O";
      document.querySelector(".broj4").style.visibility = "visible";
      sveFunkcije();
    } else if (dostupnaPolja.includes(6)) {
      number = 6;
      f = document.querySelector("p1").textContent;
      document.querySelector(".broj6").textContent = "O";
      document.querySelector(".broj6").style.visibility = "visible";
      sveFunkcije();
    } else if (dostupnaPolja.includes(8)) {
      number = 8;
      h = document.querySelector("p1").textContent;
      document.querySelector(".broj8").textContent = "O";
      document.querySelector(".broj8").style.visibility = "visible";
      sveFunkcije();
    }
  }
  console.log(dostupnaPolja);
}

function pokretanjeNaKlik() {
  if (
    document.querySelector(".broj" + String(number)).textContent === "X" ||
    document.querySelector(".broj" + String(number)).textContent === "O"
  ) {
    alert(`Zauzeto mjesto!`);
  } else {
    sveFunkcije();
    console.log(dostupnaPolja);
    pcPlayer();
  }
}
function nastavakIgre() {
  document.querySelector("p1").textContent = "X";
  document.body.style.backgroundColor = "black";
  dostupnaPolja = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  a = 1;
  b = 2;
  c = 3;
  d = 4;
  e = 5;
  f = 6;
  g = 7;
  h = 8;
  i = 9;
  brojac = 1;
  ostvarenaPobjeda = 0;

  for (let i = 1; i <= 9; i++) {
    document.querySelector(".broj" + String(i)).textContent = String(i);
  }
}
function sveFunkcije() {
  izbacivanjeSlobodnogPolja(number);
  provjeraPobjede();
  promjenaSimbola();
  promjenaIgraca();
}
document.querySelector(".col1").addEventListener("click", function () {
  number = Number(1);
  a = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});
document.querySelector(".col2").addEventListener("click", function () {
  number = Number(2);
  b = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});
document.querySelector(".col3").addEventListener("click", function () {
  number = Number(3);
  c = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});
document.querySelector(".col4").addEventListener("click", function () {
  number = Number(4);
  d = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});
document.querySelector(".col5").addEventListener("click", function () {
  number = Number(5);
  e = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});
document.querySelector(".col6").addEventListener("click", function () {
  number = Number(6);
  f = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});
document.querySelector(".col7").addEventListener("click", function () {
  number = Number(7);
  g = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});
document.querySelector(".col8").addEventListener("click", function () {
  number = Number(8);
  h = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});
document.querySelector(".col9").addEventListener("click", function () {
  number = Number(9);
  i = document.querySelector("p1").textContent;
  pokretanjeNaKlik();
});

document.querySelector(".gumb1").addEventListener("click", function () {
  nastavakIgre();
  skrivanjeVrijednosti();
  varijableInicijalizacija();
});
document.querySelector(".gumb2").addEventListener("click", function () {
  location.reload();
});
