

let inptEl = document.querySelector('input');
let btnEl = document.querySelectorAll('button');

for(let button of btnEl){
    button.addEventListener('click', (e)=>{
        let btnText = e.target.innerText;
        if(btnText === 'AC'){
            inptEl.value = '';
        }
        else if(btnText === '='){
            try{
                inptEl.value = eval(inptEl.value);
            }
            catch(err){
                inptEl.value = 'OOPS!!'
            }
        }
        else{
            inptEl.value = inptEl.value +
            btnText;
        }


    })
}
























