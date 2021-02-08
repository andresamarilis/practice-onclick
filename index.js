

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

//code to hide the paragraph in card 3
let buttonChangeText3 = document.querySelector('.button3'); 

buttonChangeText3.addEventListener('click', () => {
    document.getElementById("p3").hidden = true; 
})


//code to remove paragraph 2 from card 4




//code to remove the child nodes (h5 and p tags, and even the button) of div class p5 in card 5
let buttonChangeText5 = document.querySelector('.button5'); 

buttonChangeText5.addEventListener('click', () => {
    var list = document.getElementById("p5"); 
    list.removeChild(list.childNodes[0]);   

})



//code to remove the card




