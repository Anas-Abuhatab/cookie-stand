'use strict';
const shop=document.getElementById('shop');
let addtotable=document.getElementById('Restaurants');


let all =[];

let hours = ['6 Am' ,'7 Am' ,' 8 Am','9 Am' ,'10 Am' ,' 11 Am','12 PM',' 1 PM','2 PM','3 PM',
  ' 4 PM','5 PM',' 6 PM','7 PM'];

function tabletop(){//                                                        top
  hours.unshift(' ');
  hours.push('Daily TotalH');
  const trElement=document.createElement('tr');
  shop.appendChild(trElement);

  for(let i=0;i<hours.length;i++){
    let thElement =document.createElement('th');
    thElement.textContent =hours[i];
    trElement.appendChild(thElement);
  }
  hours.shift();
  hours.pop();


}


function Resturents (name ,minCust ,maxCust,avg ){//                                   constractor
  this.name=name;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avg=avg;
  this.cookiesSales=[];
  this.total=0;
  all.push(this);
  Resturents.prototype.randomnumber=function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  Resturents.prototype.getCookies= function (){
    for (let i=0;i<hours.length;i++){
      let randAVGcust=(Math.ceil(this.randomnumber(this.minCust ,this.maxCust)*this.avg));
      this.cookiesSales.push(randAVGcust);
      this.total += randAVGcust;
    }
  };
  Resturents.prototype.render= function(){
    let trElement=document.createElement('tr');
    shop.appendChild(trElement);

    let tdElement =document.createElement('td');
    tdElement.textContent =this.name;
    trElement.appendChild(tdElement);

    for(let i=0;i<hours.length;i++){
      let tdElement =document.createElement('td');
      tdElement.textContent=this.cookiesSales[i];
      trElement.appendChild(tdElement);
    }
    const tdtotal=document.createElement('td');
    tdtotal.textContent=this.total;
    trElement.appendChild(tdtotal);
  };
}

let seattle = new Resturents('seattle',23,65,6.3);
let Tokyo = new Resturents('Tokyo',3,24	,1.2);
let Dubai = new Resturents('Dubai',11,38,3.7);
let Paris = new Resturents('Paris',20,38,2.3);
let Lima = new Resturents('Lima',2,16,4.6);



let arr =[seattle,Tokyo,Dubai,Paris,Lima];
tabletop();
for (let i = 0; i < arr.length; i++) {
  arr[i].getCookies();
  arr[i].render();
  arr[i].randomnumber();
}
tablebotom();



addtotable.addEventListener( 'submit',addnewrow); //                                     event
function addnewrow(event){
  event.preventDefault();
  let cityName =event.target.cityName.value;
  let minCust =event.target.minCust.value;
  let maxCust =event.target.maxCust.value;
  let avg =event.target.avg.value;

  cityName =new Resturents(cityName,minCust,maxCust,avg);
  cityName.getCookies();
  cityName.render();


  tablebotom();
  addtotable.reset();
  shop.deleteRow(all.length);

}




function tablebotom(){ ///                                               bottom
  let trElement=document.createElement('tr');
  shop.appendChild(trElement);

  let tdElementtotal =document.createElement('td');
  tdElementtotal.textContent ='Totals';
  trElement.appendChild(tdElementtotal);

  for (let i = 0; i < hours.length; i++) {
    let dailytotal =0;
    for (let j = 0; j < all.length; j++) {
      dailytotal += all[j].cookiesSales[i];

    }

    let thElement=document.createElement('th');
    thElement.textContent =dailytotal;
    trElement.appendChild(thElement);
  }
  let totaloftotal =0;
  for (let j = 0; j < all.length; j++) {
    totaloftotal += all[j].total;
  }
  let thElement=document.createElement('th');
  thElement.textContent=totaloftotal;
  trElement.appendChild(thElement);

}




