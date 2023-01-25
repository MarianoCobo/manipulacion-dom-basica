/* HASTA EL VIDEO 10 

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input});
 
 h1.innerHTML = 'patito <br> feo';
 h1.innerText = 'patito <br> feo'; 
 console.log(h1.getAttribute ('class'));
 h1.setAttribute ('class','rojo');
 h1.classList.add('fucccsia');

 input.value = 'pon algo aqui';

 const img = document.createElement('img');
 img.setAttribute('src', 'https://indiehoy.com/wp-content/uploads/2022/05/naruto.jpg')
 console.log(img);

 pid.append(img);*/

                        
 
 /* VIDEO 10*/
 const h1 = document.querySelector('h1')
 const form = document.querySelector('#form')
 const input1 = document.querySelector('#calculo1')
 const input2 = document.querySelector('#calculo2')
 const btn = document.querySelector('#btncalcular')
 const pResult = document.querySelector('#result')
 
 form.addEventListener ('submit', sumarinputsvarios);
 
 function sumarinputsvarios(event) { 
     console.log({event});
     event.preventDefault();
     const sumaInputs = input1.value + input2.value;
     pResult.innerText = "Resultado " + sumaInputs;
 } 
 
 