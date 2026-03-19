function berechnen1() {
let c = parseFloat(document.getElementById("Ic").value);
let b = parseFloat(document.getElementById("IB").value);
let a = document.getElementById("output1");
if (isNaN(c) || isNaN(b)) {
a.value = "Falsche eingabe";
}
else {
a.value =Math.sqrt(c * c - b * b);
}

}

function berechnen2() {
let a = parseFloat(document.getElementById("Ia").value);
let b = parseFloat(document.getElementById("Ib").value);
let c = document.getElementById("output2");
if (isNaN(a) || isNaN(b)) {
c.value = "Falsche eingabe";
}
else {
c.value =Math.sqrt(a * a + b * b);
}

}

function berechnen3() {
let c = parseFloat(document.getElementById("IC").value);
let a = parseFloat(document.getElementById("IA").value);
let b = document.getElementById("output3");
if (isNaN(c) || isNaN(a)) {
b.value = "Falsche eingabe";
}
else {
b.value =Math.sqrt(c * c - a * a);
}

}
