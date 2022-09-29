
  const carData = 
  [
  {title: 'Audi', description: 'Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.'},

  {title: 'Mercedes-Benz', description: 'Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand.'},

  {title: 'BMW', description: 'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.'}
  ];
  
const carTemp = carData.forEach(function (car) {

function addCard() {
  const template =
  document.getElementById("card-template").content.cloneNode(true);
  template.querySelector('.card-title').innerText = `${car.title}`;
  template.querySelector('.card-text').innerText = `${car.description}`;
  document.querySelector('#card-list').appendChild(template);
}

if ('content' in document.createElement('template')) {
addCard();
}

});


