// tady je místo pro náš program


const address = {
    streetname: 'Zwaluwstraat',
    number: 31,
    city: 'Haarlem',
    postalCode: '2025VM',
}

/*let vstupUzivatel = prompt("Zadej spravne cislo domu");
address.number = Number(vstupUzivatel);*/

const user1 = {
    fullName: 'Barbora Vesela',
    login: 'beja',
    address: {
        streetname: 'Zwaluwstraat',
        number: 31,
        city: 'Haarlem',
        postalCode: '2025VM',
    },
    cartItems: 1
}

const product = {
    name: 'Mlynek na kavu',
    price: 50,
    currency: 'EUR'
}

const {name, price, currency} = product

/* stejne jako 
const name = product.name
const price = product.price
const currency = product.currency
*/