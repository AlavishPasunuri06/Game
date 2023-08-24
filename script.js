const cardArray = [  // creating 12 cards for grid ( array containing objects )
    {
        name: 'mcd',
        img: "images/mcd.png"  
    },
    {
        name: 'coke',
        img: "images/coke.png"
    },
    {
        name: 'apple',
        img: "images/apple.png"
    },
    {
        name: 'google',
        img: "images/google.png"
    },
    {
        name: 'benz',
        img: "images/benz.png"
    },
    {
        name: 'hyundai',
        img: "images/hyundai.png"
    },
    {
        name: 'mcd',
        img: "images/mcd.png"
    },
    {
        name: 'coke',
        img: "images/coke.png"
    },
    {
        name: 'apple',
        img: "images/apple.png"
    },
    {
        name: 'google',
        img: "images/google.png"
    },
    {
        name: 'benz',
        img: "images/benz.png"
    },
    {
        name: 'hyundai',
        img: "images/hyundai.png"
    }
]

// to get in random order for every game.
cardArray.sort(() => 0.5 - Math.random()) //  creating random values and sorting them (using sort method to sort randomly using Math.random())

const grid = document.getElementById('grid') // grabbing grid id
const result = document.getElementById('result') 
let selectedCards = []
let selectedCardIds = []
const cardsMatched = []

function createBoard() {
    for(let i=0;i<cardArray.length;i++) {
        const card = document.createElement('img')
        card.setAttribute('src','images/design.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)  // flipCard is a callback here
        grid.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img') // saving all images

    if (selectedCardIds[0]==selectedCardIds[1]) { // if the user clicks on same card for 2 times
        cards[selectedCardIds[0]].setAttribute('src','images/design.png')
        cards[selectedCardIds[1]].setAttribute('src','images/design.png')
        alert('You clicked the same card!') 
    }

    else if (selectedCards[0]==selectedCards[1]) { // if the user clicks on 2 different cards and finds a match
        alert('You found a match!')
        cards[selectedCardIds[0]].setAttribute('img',selectedCardIds[0].img)
        cards[selectedCardIds[1]].setAttribute('img',selectedCardIds[1].img)
        cards[selectedCardIds[0]].removeEventListener('click',flipCard)
        cards[selectedCardIds[1]].removeEventListener('click',flipCard)
        cardsMatched.push(selectedCards)
    }
    else {  // if the user clicks on 2 different cards and doesn't find a match
        cards[selectedCardIds[0]].setAttribute('src','images/design.png')
        cards[selectedCardIds[1]].setAttribute('src','images/design.png')
        alert('Sorry, try again!')
    }
    selectedCards = []
    selectedCardIds = []

    result.innerHTML = cardsMatched.length

    if (cardsMatched.length === cardArray.length/2) {
        result.innerHTML = "Congratulations, you found them all"
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id') // using this keywordto interact with the element we clicked.
    selectedCards.push(cardArray[cardId].name)
    selectedCardIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img) // assigning card image.

    if(selectedCards.length===2) {
        setTimeout(checkMatch,300)
    }
}

