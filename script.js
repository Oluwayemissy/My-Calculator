let display = document.getElementById ('display');
let key = Array.from(document.getElementsByClassName ('number'))

key.map ( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
                display.innerText = '';
                break;
            case '%':
               display.innerText= (display.innerText/100);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '⌫':
                if (display.innerText){
                  display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;

        }
    });
    
})