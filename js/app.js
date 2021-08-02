'use strict';
const shop=document.getElementById('shop');
let hours = ['6 Am' ,'7 Am' ,' 8 Am','9 Am' ,'10 Am' ,' 11 Am','12 PM',' 1 PM','2 PM','3 PM',
  ' 4 PM','5 PM',' 6 PM','7 PM'];
function Resturents (name ,minCust ,maxCust,avg ,cookiesSales,total){
  this.name=name;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avg=avg;
  this.cookiesSales=cookiesSales;
  this.total=total;

}

Resturents.prototype.randomnumber=function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};
Resturents.prototype.getCookies= function (){
  for (let i=0;i<hours.length;i++){
    let randAVGcust=(Math.ceil(this.randomnumber(this.minCust ,this.maxCust)*this.avg));
    this.cookiesSales.push(randAVGcust);
    this.total += randAVGcust;
  }
};
Resturents.prototype.render= function(){
  const h2Element=document.createElement('h2');
  h2Element.textContent=this.name;
  shop.appendChild(h2Element);
  const ulElement =document.createElement('ul');
  shop.appendChild(ulElement);
  for(let i=0;i<hours.length;i++){
    let liElement =document.createElement('li');
    liElement.textContent=`${hours[i]} :  ${this.cookiesSales[i]}  cookies`;
    ulElement.appendChild(liElement);
  }
  const litotal=document.createElement('li');
  litotal.textContent=`Total     :     ${this.total} Cookies`;
  ulElement.appendChild(litotal);
};


let seattle = new Resturents('seattle',23,65,6.3,[],0);
let Tokyo = new Resturents('Tokyo',3,24	,1.2,[],0);
let Dubai = new Resturents('Dubai',11,38,3.7,[],0);
let Paris = new Resturents('Paris',20,38,2.3,[],0);
let Lima = new Resturents('Lima',2,16,4.6,[],0);
let arr =[seattle,Tokyo,Dubai,Paris,Lima];
for (let i = 0; i < arr.length; i++) {
  arr[i].getCookies();
  arr[i].render();
  arr[i].randomnumber();
}
console.log(seattle);

const table=document.getElementById('Table');





// const tableshop1 =function(){
//   let tableEle=document.createElement('table');
//   tableEle.appendChild(table);
//   for (let i = 0; i < arr.length+2; i++) {
//     let row=document.createElement('tr');
//     row.appendChild(tableEle);
//     let td=document.createElement('td');
//     td.appendChild('rowEle');
//     td.textContent=arr[i];
//   }
//   console.log(this.tableshop1());
// };
// let seattle = {
//   name :'seattle'
//   minCust :23,
//   maxCust:65,
//   avg:6.3,
//   cookiesSales: [],
//   total:0,
//   getCookies: function (){
//     for (let i=0;i<hours.length;i++){
//       let randAVGcust=(Math.ceil(randomnumber(this.minCust ,this.maxCust)*this.avg));
//       this.cookiesSales.push(randAVGcust);
//       this.total += randAVGcust;

//     }
//   },
//   render: function(){
//     const h2Element=document.createElement('h2');
//     h2Element.textContent=this.name;
//     shop.appendChild(h2Element);

//     const ulElement =document.createElement('ul');
//     shop.appendChild(ulElement);


//     for(let i=0;i<hours.length;i++){
//       let liElement =document.createElement('li');
//       liElement.textContent=`${hours[i]} :  ${this.cookiesSales[i]}  cookies`;
//       ulElement.appendChild(liElement);
//     }
//     const litotal=document.createElement('li');
//     litotal.textContent=`Total     :     ${this.total} Cookies`;
//     ulElement.appendChild(litotal);


//   }
// };


// seattle.getCookies();
// seattle.render();




// // let link = document.getElementById('link');

// // let photo =document.getElementById('imag');
// // let image ={
// //   salesPagelink: 'sales.html',
// //   imgSRC: 'https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/assets/salmon.png ',

// //   render: function(){
// //     let ulElement=document.createElement('ul');
// //     link.appendChild(ulElement);

// //     let liElement=document.createElement('li');
// //     liElement.textContent=this.link;
// //     ulElement.appendChild(liElement);



// //   },


// // };
// // image.render();


// let Tokyo = {
//   name :'Tokyo',
//   minCust :3,
//   maxCust:624,
//   avg:1.2,
//   cookiesSales: [],
//   total:0,
//   getCookies: function (){
//     for (let i=0;i<hours.length;i++){
//       let randAVGcust=(Math.ceil(randomnumber(this.minCust ,this.maxCust)*this.avg));
//       this.cookiesSales.push(randAVGcust);
//       this.total += randAVGcust;

//     }
//   },
//   render: function(){
//     const h2Element=document.createElement('h2');
//     h2Element.textContent=this.name;
//     shop.appendChild(h2Element);

//     const ulElement =document.createElement('ul');
//     shop.appendChild(ulElement);


//     for(let i=0;i<hours.length;i++){
//       let liElement =document.createElement('li');
//       liElement.textContent=`${hours[i]} :  ${this.cookiesSales[i]}  cookies`;
//       ulElement.appendChild(liElement);
//     }
//     const litotal=document.createElement('li');
//     litotal.textContent=`Total     :     ${this.total} Cookies`;
//     ulElement.appendChild(litotal);


//   }
// };


// Tokyo.getCookies();
// Tokyo.render();



// let Dubai = {
//   name :'Dubai',
//   minCust :11,
//   maxCust:38,
//   avg:3.7,
//   cookiesSales: [],
//   total:0,
//   getCookies: function (){
//     for (let i=0;i<hours.length;i++){
//       let randAVGcust=(Math.ceil(randomnumber(this.minCust ,this.maxCust)*this.avg));
//       this.cookiesSales.push(randAVGcust);
//       this.total += randAVGcust;

//     }
//   },
//   render: function(){
//     const h2Element=document.createElement('h2');
//     h2Element.textContent=this.name;
//     shop.appendChild(h2Element);

//     const ulElement =document.createElement('ul');
//     shop.appendChild(ulElement);


//     for(let i=0;i<hours.length;i++){
//       let liElement =document.createElement('li');
//       liElement.textContent=`${hours[i]} :  ${this.cookiesSales[i]}  cookies`;
//       ulElement.appendChild(liElement);
//     }
//     const litotal=document.createElement('li');
//     litotal.textContent=`Total     :     ${this.total} Cookies`;
//     ulElement.appendChild(litotal);


//   }
// };


// Dubai.getCookies();
// Dubai.render();



// let Paris = {
//   name :'Paris',
//   minCust :20,
//   maxCust:38,
//   avg:2.3,
//   cookiesSales: [],
//   total:0,
//   getCookies: function (){
//     for (let i=0;i<hours.length;i++){
//       let randAVGcust=(Math.ceil(randomnumber(this.minCust ,this.maxCust)*this.avg));
//       this.cookiesSales.push(randAVGcust);
//       this.total += randAVGcust;

//     }
//   },
//   render: function(){
//     const h2Element=document.createElement('h2');
//     h2Element.textContent=this.name;
//     shop.appendChild(h2Element);

//     const ulElement =document.createElement('ul');
//     shop.appendChild(ulElement);


//     for(let i=0;i<hours.length;i++){
//       let liElement =document.createElement('li');
//       liElement.textContent=`${hours[i]} :  ${this.cookiesSales[i]}  cookies`;
//       ulElement.appendChild(liElement);
//     }
//     const litotal=document.createElement('li');
//     litotal.textContent=`Total     :     ${this.total} Cookies`;
//     ulElement.appendChild(litotal);


//   }
// };


// Paris.getCookies();
// Paris.render();



// let Lima = {
//   name :'Lima',
//   minCust :2,
//   maxCust:16,
//   avg:4.7,
//   cookiesSales: [],
//   total:0,
//   getCookies: function (){
//     for (let i=0;i<hours.length;i++){
//       let randAVGcust=(Math.ceil(randomnumber(this.minCust ,this.maxCust)*this.avg));
//       this.cookiesSales.push(randAVGcust);
//       this.total += randAVGcust;

//     }
//   },
//   render: function(){
//     const h2Element=document.createElement('h2');
//     h2Element.textContent=this.name;
//     shop.appendChild(h2Element);

//     const ulElement =document.createElement('ul');
//     shop.appendChild(ulElement);


//     for(let i=0;i<hours.length;i++){
//       let liElement =document.createElement('li');
//       liElement.textContent=`${hours[i]} :  ${this.cookiesSales[i]}  cookies`;
//       ulElement.appendChild(liElement);
//     }
//     const litotal=document.createElement('li');
//     litotal.textContent=`Total     :     ${this.total} Cookies`;
//     ulElement.appendChild(litotal);


//   }
// };


// Lima.getCookies();
// Lima.render();


