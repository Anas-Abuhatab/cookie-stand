'use strict';

const seattle = {
  name : 'Seattle' ,
  minPH :23 ,
  maxPH :65 ,
  avgPH : 6.3,
  numberofcustomersPH :0 ,
  cookiespurchasedPH : [this.numberofcustomersPH *this.avgPH ],
  hours : ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'],

  getnumberofcustomersPH : function (minPH, maxPH) {
    this.numberofcustomersPH= Math.floor(Math.random() * (maxPH - minPH) + minPH);
    return this.numberofcustomersPH;
  },

//   render: function() {

//     let articleElement = document.createElement('article');
//     kittenProfiles.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let pElement = document.createElement('p');
//     pElement.textContent = this.name + ' is ' +  this.age +  ' months  old, he is ' +  this.breed;
//     articleElement.appendChild(pElement);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     for(let i = 0; i < this.likes.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = this.likes[i];
//       ulElement.appendChild(liElement);
//     }
    
//     let imgElement =  document.createElement('img');
//     imgElement.src = this.imageSrc;
//     // imgElement.setAttribute('src', this.imageSrc)
//     articleElement.appendChild(imgElement);
//   }

};
console.log(seattle);
console.log(seattle.getnumberofcustomersPH(seattle.minPH,seattle.maxPH));
console.log(seattle.minPH,seattle.maxPH);
seattle.getnumberofcustomersPH(seattle.minPH,seattle.maxPH);
