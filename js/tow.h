'use strict';

let divElement = document.getElementById('sales');
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
let storeName = [];
let table = document.createElement('table');
let hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
function headLine() {
  let article = document.createElement('article');
  divElement.appendChild(article);
  article.appendChild(table);
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let tableHead1 = ' ';
  tableHead1 = document.createElement('th');
  tableRow.appendChild(tableHead1);
  for (let i = 0; i < hours.length; i++) {
    tableHead1 = document.createElement('th');
    tableRow.appendChild(tableHead1);
    tableHead1.textContent = `${hours[i]}`;

  }
  tableHead1.textContent = 'Daily Location Total';


}


function footer() {
  let finalRow = document.createElement('tr');
  table.appendChild(finalRow);
  let fTotal = document.createElement('td');
  finalRow.appendChild(fTotal);
  fTotal.textContent = 'Total';
  for (let n = 0; n < 13; n++) {
    let tdx = document.createElement('td');
    let totalN = 0;
    for (let j = 0; j < storeName.length; j++) {
      totalN += storeName[j].ac[n];
    }
    tdx.textContent = totalN;
    finalRow.appendChild(tdx);

  }
  let lion = 0;
  for (let k = 0; k < storeName.length; k++) {
    lion += storeName[k].totalOfCookies;
  }
  let tiger = document.createElement('td');
  finalRow.appendChild(tiger);
  tiger.textContent = lion;



}

function TableContent(min, max, locationName, averageOfCookies, totalOfCookies, ac) {
  this.min = min;
  this.max = max;
  this.locationName = locationName;
  this.totalOfCookies = totalOfCookies;
  this.averageOfCookies = averageOfCookies;
  this.ac = ac;
  // this.randNum = randNum;
  storeName.push(this);
}
TableContent.prototype.custumresPurHour = function () {
  let sum = 0;
  for (let i = 0; i < hours.length; i++) {
    sum = randomNum(this.min, this.max) * this.averageOfCookies;
    let sum2 = Math.floor(sum);
    this.ac.push(sum2);
    this.totalOfCookies += sum2;
  }

};
//console.log(ac);
TableContent.prototype.render = function () {
  let secRow = document.createElement('tr');
  table.appendChild(secRow);
  let cell = document.createElement('td');
  secRow.appendChild(cell);
  cell.textContent = this.locationName;
  let cell2 = ' ';
  for (let i = 0; i < hours.length; i++) {
    cell2 = document.createElement('td');
    secRow.appendChild(cell2);
    cell2.textContent = ac[i];

  }
  this.textContent = this.totalOfCookies;


};

let seattle = new TableContent(23, 65, 'seattle', 6.3, 0, []);
let Tokyo = new TableContent(3, 24, 'Tokyo', 1.2, 0, []);
let Dubai = new TableContent(11, 38, 'Dubai', 3.7, 0, []);
let Paris = new TableContent(20, 38, 'Paris', 2.3, 0, []);
let Lima = new TableContent(2, 16, 'Lima', 4.6, 0, []);

headLine();
footer();

for (let i = 0; i < storeName.length; i++) {
  storeName[i].custumresPurHour();
  storeName[i].render();
}









// this.getCookiesPerHour = function () {
//   let cookiesPerHour = Math.round(this.getNumberOfCustomers() * this.averageOfCookies);
//   return cookiesPerHour;

// };

// this.getFinalResult = function () {
//   for (let i = 0; i < Hours.length; i++) {
//     this.simulatedAmountsOfCookies.push(this.getCookiesPerHour());
//     this.totalOfCookies += this.simulatedAmountsOfCookies[i];
//   }
//   return this.simulatedAmountsOfCookies;
// };
// this.render = function () {
//   let trElement = document.createElement('tr');
//   trElement.textContent = this.locationName;

//   let tdElement = document.createElement('td');
//   tdElement.textContent = this.locationName;
//   trElement.appendChild(tdElement);

//   for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
//     let tdElement = document.createElement('td');
//     tdElement.textContent = Hours[i]; + ' : ' + this.simulatedAmountsOfCookies[i];
//     trElement.appendChild(tdElement);
//   }
//   table.appendChild(trElement);

// };


// let seattle = new Location(23, 65, 'seattle', 6.3);
// let Tokyo = new Location(3, 24, 'Tokyo', 1.2);
// let Dubai = new Location(11, 38, 'Dubai', 3.7);
// let Paris = new Location(20, 38, 'Paris', 2.3);
// let Lima = new Location(2, 16, 'Lima', 4.6);
// seattle.render();
// seattle.getFinalResult();





