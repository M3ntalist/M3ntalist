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
