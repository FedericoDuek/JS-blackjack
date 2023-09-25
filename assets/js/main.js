let deck = [];
//tipos de cartas 
const tipos = ['C', 'S', 'H', 'D'];
const especiales = ['J', 'Q', 'K', 'A'];

//Deck de cartas
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    //loop para dare lugar a las letras
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    //esto va a modificarse (con US hicimos que salgan los numeros random)
    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
crearDeck();

//Pedir carta
const pedirCarta = () => {
    //por si no hay mas cartas (imposible)
    if (decklength === 0) {
        throw 'No hay más cartas en el deck'
    };

    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta;
}
//pedirCarta();

//Valor de carta
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    //darle valor a las letras
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}
const valor = valorCarta(pedirCarta());
console.log({ valor });