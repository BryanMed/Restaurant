import { menuContent } from './menu';
import { contactContent } from './contact';
import './style.css';
import chef from './chefPP.jpg';

const content = document.querySelector('#content');

function headerContent(){
 
  const header = document.createElement('header');
  const divTitle = document.createElement('div');
  const h1 = document.createElement('h1');
  
  const navigation = document.createElement('div');
  navigation.classList.add('navigation');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');

  divTitle.classList.add('title');
  h1.textContent = 'Bryantaurante';
  divTitle.appendChild(h1);
  header.appendChild(divTitle);

  a2.innerText = 'Menu';
  a1.innerText = 'Home';
  a3.innerText = 'Contact';

  a1.href = 'http://#';
  a2.href = 'http://#';
  a3.href = 'http://#';
  
  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  navigation.appendChild(ul);

  header.appendChild(navigation);
  content.appendChild(header);
}

function mainContent(){

  const main = document.createElement('main');
  const div = document.createElement('div')

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  
  const imgProfile = document.createElement('img');
  imgProfile.src = chef;
  imgProfile.classList.add('profile-pic');

  p1.textContent = 'Comidini riquini';
  p2.textContent = 'Made with passion since 1995';
  p3.textContent = 'Order online or visit us!';

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(imgProfile);
  div.appendChild(p3);
  main.appendChild(div);
  content.appendChild(main);

}

function footerContent(){
  const footer = document.createElement('footer');

  const p = document.createElement('p');
  p.textContent = 'Made with 💜 by ';

  const a = document.createElement('a');
  a.innerText = 'Bryan';
  a.href = 'http://#';

  p.appendChild(a);
  footer.appendChild(p);
  content.appendChild(footer);
}


headerContent();
mainContent();
footerContent();  
menuContent();
contactContent();