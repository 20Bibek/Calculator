let input = document.getElementById('inputdisplay');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.innerText = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.innerText = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.innerText = string;
        }
        else{
            string += e.target.innerHTML;
            input.innerText = string;
        }
        
    })
})

// let LightTheme = true;
// const themebtn = document.querySelector(".themebtn")



// function bg(){
//     if(LightTheme){
//         themebtn.innerText = "Light"
//         document.body.style.backgroundColor = "black"
//         document.body.style.color = "white"
        

//     }
//     else{
//         themebtn.innerText = "Dark"
//         document.body.style.backgroundColor = "white"
//         document.body.style.color = "black"
        


//     }
//     LightTheme = !LightTheme;
// }