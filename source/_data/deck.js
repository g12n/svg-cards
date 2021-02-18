let values = ["Ace", "Deuce", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
let sets =["Clubs", "Diamonds","Hearts","Spades"]

const {diamonds} = require('../models/diamonds');


let deck = []

sets.map(set =>{
    values.map((value,i) =>{
        
        let numberValue = i+1;

        let hue= Math.floor(Math.random()*360);
        let background = `hsl(${hue},50%, 15%)`

        deck.push({
            title:`${value} of ${set}`,
            filename:`${set.toLowerCase()}-${numberValue}`, 
            viewBox: [0,0,500,800],
            background:background,
            layers: diamonds(numberValue)
        })

    })
})

module.exports = deck;