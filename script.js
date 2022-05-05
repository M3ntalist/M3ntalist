let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'https://codepen.io/Letlala/pen/RwKrgLK');
new_a.innerText = 'Code Your Future';

new_li.appendChild(new_a);
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://www.linkedin.com/in/michael-letlala-3274a236/');
new_a2.innerText = 'LinkedIn';

new_li2.appendChild(new_a2);

new_li.appendChild(new_li2);
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.setAttribute("href", 'https://www.freecodecamp.org/certification/fcc8e94f329-2699-4818-a3cf-daf3a13580a4/responsive-web-design');
new_a3.innerText = 'FreeCodeCamp';

new_li3.appendChild(new_a3);

new_li.appendChild(new_li3);

element_list.appendChild(new_li);

var socials;


socials = ['Instagram', 'Facebook', 'Twitter'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!socials.length) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = socials.shift();

    element_list.appendChild(new_li);
  }

});

var images, numbers;


images = ['https://saspecialist.southafrica.net/uploads/user_uploads/Mike.jpg', 'https://img4.travelagenciesfinder.com/522/383/399144435223836.jpg', 'https://image-prod.iol.co.za/resize/650x366/Michael-Letlala-Chief-Guide-and-Operations-Manager-Coffeebeans-Routes?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/6699856c-e307-5d22-ad86-b5f7f8891be8&operation=CROP&offset=0x46&resize=850x478', 'https://i.pinimg.com/736x/13/db/72/13db72aaf0527b793ad34393a50d6e1d.jpg'];
numbers = [1, 2, 3, 4];
let element_number = document.getElementById('number');
element_number.innerText = numbers[0];
let element_images = document.getElementById('images');
element_images.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  numbers.push(numbers.shift());
  images.push(images.shift());
  let element_number2 = document.getElementById('number');
  element_number2.innerText = numbers[0];
  let element_images2 = document.getElementById('images');
  element_images2.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  numbers.unshift(numbers.pop());
  images.unshift(images.pop());
  let element_images3 = document.getElementById('images');
  element_images3.setAttribute("src", images[0]);
  let element_number3 = document.getElementById('number');
  element_number3.innerText = numbers[0];

});