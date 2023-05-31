let player={
    name: "Jaimy",
    chips:140
}
let sumEl=document.getElementById("sum-el")
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let msg=""
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" : $ "+player.chips
function getRandomCard(){
    let random=Math.floor(Math.random()*13)+1
    if (random===1){
        return 11
    }
    else if(random>10){
        return 10
    }
    else{
        return random
    }
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
cardsEl.textContent="Cards: "
for (let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
}
sumEl.textContent="Sum: "+sum
if (sum<=20){
    msg="Do you want to draw a new card"
}else if(sum===21) {
    msg="You've won"
    hasBlackJack=true
}else{
    msg="You've lost" 
    isAlive=false
}
messageEl.textContent=msg
}
function newCard(){
    if (isAlive===true && hasBlackJack===false){
    let newCard=getRandomCard()
    sum+=newCard
    cards.push(newCard)
    renderGame()
    }
}
