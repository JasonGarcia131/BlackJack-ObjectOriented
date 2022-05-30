let deckObject = [
    {   
       // name: 'ace',
        img: './img/aceHeart.png',
        value: 1

    },
    {
       // name: 'ace',
        img: './img/aceDiamonds.png',
        value: 1
    },
    {
       // name: 'ace',
        img: './img/aceClubs.png',
        value: 1
    },
    {
       // name: 'ace',
        img: './img/aceSpades.png',
        value: 1
    }
    ,
    {
        img: './img/twoHearts.png',
        value: 2
    },
    {
        img: './img/twoDiamonds.png',
        value: 2
    },
    {
        img: './img/twoClubs.png',
        value: 2
    },
    {
        img: './img/twoSpades.png',
        value: 2
    },
    {
        img: './img/threeHearts.png', 
        value: 3
    },
    {
        img: './img/threeDiamonds.png',
        value: 3
    },
    {
        img: './img/threeClubs.png',
        value: 3
    },
    {
        img: './img/threeSpades.png',
        value: 3
    },
    {
        img: './img/fourHearts.png',
        value: 4
    },
    {
        img: './img/fourDiamonds.png',
        value: 4
    },
    {
        img: './img/fourClubs.png',
        value: 4
    },
    {
        img: './img/fourSpades.png',
        value: 4
    },
    {
        img: './img/fiveHearts.png',
        value: 5
    },
    {
        img: './img/fiveDiamonds.png',
        value: 5
    },
    {
        img: './img/fiveClubs.png',
        value: 5
    },
    {
        img: './img/fiveSpades.png',
        value: 5
    },
    {
        img: './img/sixHearts.png',
        value: 6
    },
    {
        img: './img/sixDiamond.png',
        value: 6
    },
    {
        img: './img/sixClubs.png',
        value: 6
    },
    {
        img: './img/sixSpades.png',
        value: 6
    },
    {
        img: './img/sevenHearts.png',
        value: 7
    },
    {
        img: './img/sevenDiamonds.png',
        value: 7
    },
    {
        img: './img/sevenClubs.png',
        value: 7
    },
    {
        img: './img/sevenSpades.png',
        value: 7
    },
    {
        img: './img/eightHearts.png',
        value: 8
    },
    {
        img: './img/eightDiamonds.png',
        value: 8
    },
    {
        img: './img/eightClubs.png',
        value: 8
    },
    {
        img: './img/eightSpades.png',
        value: 8
    },
    {
        img: './img/nineHearts.png',
        value: 9
    },
    {
        img: './img/nineDiamonds.png',
        value: 9
    },
    {
        img: './img/nineClubs.png',
        value: 9
    },
    {
        img: './img/nineSpades.png',
        value: 9
    },
    {
        img: './img/tenHearts.png',
        value: 10
    },
    {
        img: './img/tenDiamonds.png',
        value: 10
    },
    {
        img: './img/tenClubs.png',
        value: 10
    },
    {
        img: './img/tenSpades.png',
        value: 10
    },
    {
        img: './img/jHearts.png',
        value: 10
    },
    {
        img: './img/jDiamonds.png',
        value: 10
    },
    {
        img: './img/jClubs.png',
        value: 10
    },
    {
        img: './img/jSpades.png',
        value: 10
    },
    {
        img: './img/qHearts.png',
        value: 10
    },
    {
        img: './img/qDiamonds.png',
        value: 10
    },
    {
        img: './img/qClubs.png',
        value: 10
    },
    {
        img: './img/qSpades.png',
        value: 10
    },
    {
        img: './img/kHearts.png',
        value: 10
    },
    {
        img: './img/kDiamond.png',
        value: 10
    },
    {
        img: './img/kClubs.png',
        value: 10
    },
    {
        img: './img/kSpades.png',
        value: 10
     }
]
const playerCardContainer = document.getElementById('playerCardContainer');
const dealerCardContainer = document.getElementById('dealerCardContainer');
const playerOptionButtons = document.querySelectorAll('.playerOptionButton');
let playerWallet = document.querySelector('#yourWallet');
let yourHandDisplay = document.querySelector('#yourHandDisplay');
let winLoseMessage = document.getElementById('winLoseMessage');
let popUp = document.querySelector('#messagePopUp'); 
let dealersTurn = false;


class Hand {
    constructor(){
        this.handArray = [];
        this.playerCash = 100;
    }

    deal(){
        const dealtCard = deckObject[Math.floor(Math.random()*deckObject.length)];
        this.handArray.push(dealtCard);
        this.flipCard(dealtCard.img)
        return this;
    }
    
    flipCard(img){
        let div = document.createElement('div');
        div.classList.add('cards');
        div.style.backgroundImage = `url('${img}')`;
        if(!dealersTurn){
            playerCardContainer.append(div);
        }
        else{
            console.log('false')
            dealerCardContainer.append(div);
        }

    }
   
    getHand(){
        console.log('Player Hand', this.handArray);
        return this;
    }

    getSum(){
        let totalHandSum = 0;
        for(let i = 0; i < this.handArray.length; i++){
            totalHandSum += this.handArray[i].value;
        }
        yourHandDisplay.textContent = `Your Hand: ${totalHandSum}`
        this.check(totalHandSum);
        return totalHandSum;
    }

    check(totalHandSum){
        if(totalHandSum < 21){
            console.log('keep going!');
            return this;
        }
        else if(totalHandSum == 21){
            popUpMessage('You Win!', 'green');
            return this;
        }
        else{
            this.playerCash-=1;
            console.log('busted. your cash: ', this.playerCash);
            popUpMessage('You Lose!', 'red');
            this.getNewRound();
            return this;
        }
    }

    getNewRound(){
        clearInterval();
          popUp.style.display = 'none'; //hides the pop up div.
    hitStayButton('inline-block');
        dealersTurn = false;
        this.handArray = [];
        while (playerCardContainer.lastChild) {
            playerCardContainer.removeChild(playerCardContainer.lastChild);
        }
        while (dealerCardContainer.lastChild) {
            dealerCardContainer.removeChild(dealerCardContainer.lastChild);
        }
        onStart();
        console.log('-------New Round-------');
    }
} 

const playerHand = new Hand();
const dealerHand = new Hand();

function onStart(){
    console.log('--------Start Game--------')
    playerHand.deal().deal().getHand().getSum();

}

function hit(){
    console.log('------------Hit-------------')
    playerHand.deal().getHand().getSum();
}

let dealerCounter = 0;

function hideHomepage(){    //1. This function runs when user clicks start on the homepage.
    let homepage = document.querySelector('#home-navigation');
    homepage.style.display = 'none';
    gameContainer.style.display = 'inline-block';
    onStart(); 
}

function popUpMessage(message, color){
    popUp.style.display = 'inline-block';
    popUp.style.backgroundColor = color;
    winLoseMessage.textContent = message;
    hitStayButton('none');
    
}

function hitStayButton(noneOrInline){
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display = noneOrInline;
    }
}

function dealerTurn(){
    for(let i = 0; i < playerOptionButtons.length; i++){
        playerOptionButtons[i].style.display = 'none';
    }
    dealersTurn = true;
    console.log('--------dealersturn----------');
    console.log('playerHand: ', playerHand.getSum())
    console.log('dealerHand', dealerHand.getSum())
    dealerHand.deal().deal().getSum();
   
    if(dealerHand.getSum() < playerHand.getSum()){
        console.log('dealer hand 1 < playerHand')
        setTimeout(()=>dealerHand.deal().getSum(), 6000)
        if(dealerHand.getSum() < playerHand.getSum()){
            console.log('dealer hand 2 < playerHand')
            setTimeout(()=>dealerHand.deal().getSum(), 8000)
              if(dealerHand.getSum() < playerHand.getSum()){
                 console.log('dealer hand 3 < playerHand')
                 setTimeout(()=>dealerHand.deal().getSum(), 10000)
            } clearInterval();
        } clearInterval();
    } clearInterval();
}
