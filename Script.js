'use strict' ;
// defining secret number 
let secretNumber = Math.trunc(Math.random()*20)


// defining ll the elements nessesery
let score = 20 ;
let highscore = 0 ;
let number = document.querySelector('.number').innerHTML
let inputBox = document.querySelector('.guess').value

// function for decreasing the score 
function decreaseScore (){
    score = score-1 ; 
    document.querySelector('.score').innerHTML  = (score) ;
} ; 


// check button working 
let  check = document.querySelector('.check')
check.addEventListener('click', function(){
    let inputBox = document.querySelector('.guess').value
    // console.log(inputBox)
    


// when the guess is not correct
if(inputBox===''){
 document.querySelector('.message').innerHTML= "not a number "
//  when the number is too low 
}else if(inputBox<secretNumber){  document.querySelector('.message').innerHTML= "too low "
decreaseScore()

// when thye number is too high 
}else if(inputBox>secretNumber){  document.querySelector('.message').innerHTML= "too high "
 decreaseScore ()
}
//  when the number is correct 
else if (inputBox==secretNumber){ document.querySelector('.message').innerHTML= " correct number  "
document.querySelector('.number').style.width ='30rem';
document.querySelector('.number').innerHTML=secretNumber
document.querySelector('body').style.backgroundColor = "green";
if (score>highscore){
    highscore = score
   document.querySelector('.highscore').innerHTML= highscore 
}
}
else {document.querySelector('.message').innerHTML= "type correct number"}


}

)

// working with again button

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.number').style.width ='15rem';
document.querySelector('.number').innerHTML= '?'
document.querySelector('body').style.backgroundColor = "#222";
document.querySelector('.message').innerHTML= "startin guessing" ;
score = 20 ;
document.querySelector('.score').innerHTML  = score ;
document.querySelector('.guess').value='' ;
secretNumber = Math.trunc(Math.random()*20)
})



console.log(document.querySelector('.again').innerHTML)
console.log('hello world')




