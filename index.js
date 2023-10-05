const names = ["Guadalupe", "Ollie", "Aki"];
let cards = [];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return cards;
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}