

//code to change the paragraph in card 1
const buttonChangeText = document.querySelector('.button1'); 

buttonChangeText.addEventListener('click', () => {
    document.getElementById("p1").innerHTML = "New text!"; 
})

//code to change the title in card 2
const buttonChangeTitle = document.querySelector('.button2'); 

buttonChangeTitle.addEventListener('click', () => {
    document.getElementById("h2").innerHTML = "New Title!"; 
})

//code to hide and unhide the paragraph in card 3. 
// Might change this 
let buttonChangeText3 = document.querySelector('.button3'); 


buttonChangeText3.addEventListener('click', () => {
    document.getElementById("p3").hidden = true;

    buttonChangeText3.addEventListener('click', () => {
        document.getElementById("p3").hidden = false;
         
    })

})


//code to remove paragraph 2 from card 4

let buttonChangeText4 = document.querySelector('.button4'); 

buttonChangeText4.addEventListener('click', () => {
    var list = document.getElementById("p4"); 
    list.removeChild(list.childNodes[2]);  
    

})


//code to remove the card

let deleteCard = document.querySelectorAll('.buttonDelete'); 

for(let i = 0; i < deleteCard.length; i++) {
    deleteCard[i].addEventListener('click', () => {
        deleteCard[i].parentElement.parentElement.remove()
    })
}





