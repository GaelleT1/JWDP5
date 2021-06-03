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


fetch ("http://localhost:3000/api/teddies")
  .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
  .then(function(value){
        console.log(value);
        teddies(value);
    })
  .catch(function(error){});

  teddies.push(``)
  let teddies =[[0],[1],[2],[3],[4] ];
    function pushTeddies(){
      let ListOfteddies ='';
      teddies.forEach(ted => listOfteddies += ``)
      const cards = document.getElementById('cards');
      for(let teddies of ListOfTeddies){
      let newItem = document.createElement('li');
      newItem.textContent = "teddies"
      cards.appendChild('newItem');
    }
  }
 
pushTeddies ()


  
      
     

