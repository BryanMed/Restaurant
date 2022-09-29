import tangamanga from './tangamanga.png';

const content = document.querySelector('#content');

function contactContent(){
  const container = document.createElement('div');
  container.classList.add('contact-container');
  const h4 = document.createElement('h4');
  h4.textContent = 'Visit us';

  const div = document.createElement('div');
  const phonemsg = document.createElement('p'); 
  const phone = document.createElement('a');
  phone.href = '#';
  phone.innerText = '+52 123 4567 89 10';
  phonemsg.textContent = 'Call us at: ';
  phonemsg.appendChild(phone);

  const direction = document.createElement('p');
  direction.textContent = 'Av Manuel J. Clouthier 263, Tangamanga, 78269 San Luis, S.L.P.';
  const img = document.createElement('img');
  img.src = tangamanga;

  div.appendChild(phonemsg);
  div.appendChild(direction);
  div.appendChild(img);

  container.appendChild(h4);
  container.appendChild(div);
  
  content.appendChild(container);
}

export {contactContent};