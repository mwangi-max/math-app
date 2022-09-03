const form = document.querySelector('.form');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('.answer');
const submit = document.getElementById('submit');
const input = document.getElementById('input');



form.addEventListener('submit', (e)=>{
   e.preventDefault();
    mathApp();
})
mathApp();


function mathApp(){
    let num1 = Math.floor(Math.random()*10);
    let num2 = Math.floor(Math.random()*10);

    h1.innerHTML = `What is ${num1} multiplied by ${num2}?`

    const product = +(num1*num2);
    

    const answer = +(input.value);

    

       
   submit.addEventListener('click', ()=>{

        if(product === answer){
          addClass('You got that one right! Congratulations!', 'success')
        }
        else if(answer === ''){
            addClass('empty value', 'success')
        }
        else{
            addClass(`One down, sorry. The correct answer is ${product}`, 'danger');
           
        }

        // product === answer ? h3.innerHTML = `You got that one right! Congratulations!`: h3.innerHTML = `One down, sorry. The correct answer is ${product}`
       
       setTimeout(()=>{
        h3.innerHTML = '';
       },3000);
   


   

   setBackToDefault();
  
    }); 
    
}

function setBackToDefault(){
    input.value = '';
}
function addClass(text,action){
    h3.innerHTML = text;
    h3.classList.add(`${action}`);
}