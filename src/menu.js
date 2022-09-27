import avena from './images/avena.jpg';
import hotCakes from './images/hot-cakes.jpg';
import huevoPonchado from './images/huevo_ponchado.jpg';
import huevo from './images/huevo.jpg';
import kiwi from './images/kiwi-fresa.jpg';
import pancakes from './images/pancakes.jpg';

const content = document.querySelector('#content');

const createCard = (inputImg, dishName, dishDescription) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  const img = document.createElement('img');
  img.src = inputImg;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  
  const h4 = document.createElement('h4');
  h4.textContent = dishName;

  const description = document.createElement('p');
  description.textContent = dishDescription; 

  cardHeader.appendChild(img);
  cardBody.appendChild(h4);
  cardBody.appendChild(description);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  return card;
}

function menuContent(){
  const menu = document.createElement('div');
  menu.classList.add('menu');
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Menu';

  const container = document.createElement('div');
  container.classList.add('container');


  // const dishes = [avena, hotCakes, huevoPonchado, huevo, kiwi, pancakes];

  const dishes = [
    {
      'name': 'Avena',
      'img': avena,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      'name': 'Hot Cakes',
      'img': hotCakes,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
      'name': 'Huevos Benedictos',
      'img': huevoPonchado,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      'name': 'Buebito',
      'img': huevo,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
      'name': 'Kiwi Fresona',
      'img': kiwi,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. sit amet no no no el moño no.'
    },
    {
      'name': 'Panquequeees',
      'img': pancakes,
      'description': 'Unos ricos panqueques para que te alivianes'
    }
  ];

  dishes.forEach(dish => {
    let dishCard = createCard(dish.img, dish.name, dish.description);
    container.appendChild(dishCard);
  });




  menu.appendChild(h2);
  menu.appendChild(container);
  content.appendChild(menu);


}

export{menuContent};