var tableLenth = 12;
var tourDestinations = ['coxBazer', 'nepal', 'vutan', 'paris'];

// index এর মান 0  দিয়ে শুরু হয়ে  1   1  করে বাড়বে ।

// find index position
tourDestinations.indexOf('vutan')

// find index value
var fourthDastination = tourDestinations[3];

// rewrite Array data
tourDestinations[1] = 'srilonka';

// add a new data in an Array last position
tourDestinations.push('london');

// delete a data in an Array last position
tourDestinations.pop();

// condition 
if (tourDestinations[1] == 'napal') {
    console.log('parah ayhare ayhare');
}
else if (tourDestinations[1] == 'china') {
    console.log('china tor kache jamuna');
}
else if (tourDestinations.length == 4) {
    console.log('aro taka ase aro besi ghurmu');
}
else {
    console.log('kothao jamuna basay thakmu ar mosa marmu');
}

// comparisons
var eggPrice = 32;
var myBudget = 32;

if (eggPrice <= myBudget) {
    console.log('amr dim khamu');
}
if (eggPrice >= myBudget) {
    console.log('lebu diya vat khabo');
}