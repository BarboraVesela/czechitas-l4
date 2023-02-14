// tady je místo pro náš program

let text1 = 'Sem si pisu svuj Delsi TEXT'.toUpperCase()
let text2 = 'Sem si pisu svuj Delsi TEXT'.toLowerCase()
let text3 = 'Sem si pisu svuj Delsi TEXT'.length
let text4 = 'Sem si pisu svuj Delsi TEXT'.trim() // odstrani na zacatku a konci prazdne misto/bile znaky
let text5 = 'Sem si pisu svuj Delsi TEXT'.slice(0,6)
let text6 = 'Sem si pisu svuj Delsi TEXT cz'.indexOf('cz')

let text7 = '20'.padStart(8,'0')
let text8 = '20'.padEnd(6,'1')

const order = {
	id: 37214,
	product: 'pěnová matrace',
	delivery: '21.8.2021',
  };
  
  const { id, product, delivery } = order;

  let text_order = 'ID: ' + id + ' Produkt: ' + product + ' Doruceni do: ' + delivery
  let text_order2 = `<p>Zbozi ${product} bude doruceno ${delivery}.</p>`

//alternativne jiny zapis

document.body.innerHTML = (
	'<h2>Objednávka: ' + id + '</h2>' +
	'<p>Zboží ' + product + ' bude doručeno ' + delivery + '.</p>'
  );


  
  let delsiHtml = 
  `<header> Nadpis </header> 
  <p> muj text </p>
  `