let cardsContainer = document.createElement('div');
let singleCard = document.createElement('div');
let image = document.createElement('img');
let cardDescription = document.createElement('div');
let tedName = document.createElement('h2');
let tedPrice = document.createElement('p');
let viewBtn = document.createElement('a');
const cards = document.getElementById('cards');

cardsContainer.className = "cards__container";
singleCard.className = 'single__card';
tedName.className = 'ted__name';
tedPrice.className = 'ted__price';
viewBtn.className = 'view__btn';
image.className = 'card__img';
cardDescription.className = 'card__description';

singleCard.setAttribute('href', 'pages/product.html');
viewBtn.setAttribute('href', 'pages/product.html');
image.setAttribute('alt','Photo TeddyBear');

viewBtn.innerText = 'Voir';

cards.appendChild(cardsContainer);
cardsContainer.appendChild(singleCard);
singleCard.append(image,cardDescription);
cardDescription.append(tedName,tedPrice, viewBtn);

const url = "http://localhost:3000/api/teddies";
fetch(url)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value){
    console.log(value);
    PushTeddies(value);
})
.catch(function(error){});

let teddies = [[0],[1],[2],[3],[4]];
teddies.push(``)
  
    function pushTeddies(){
      let ListOfteddies ='';
      pushTeddies.forEach(ted => listOfteddies += ``)
      for(let teddies of ListOfTeddies){
      cards.appendChild(singleCard);
    }
  }
 
pushTeddies ()


  
      
     

