const news = [
  { id: 1, title: 'News1', content: "bla" },
  { id: 2, title: 'News2', content: "ble" },
  { id: 3, title: 'News3', content: "blu" }
];

const newsCards = news.forEach(function(info) {
  
    function addCard() {

      const template =
        document.getElementById("card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = `${info.title}`;
        template.querySelector('.card-text').innerText = `${info.content}`;
        document.querySelector('#card-list').appendChild(template);
    }

  if ('content' in document.createElement('template')) {
    addCard();  
  }
});

function doInterval() {
for (let i = 0; i < news.length; i++) {
  setInterval(newsCards, 5000)
}}

// const newsThing = news.forEach(function(balita) {

// function addCard(){
    
//       const template =

//         document.getElementById("card-template").content.cloneNode(true);
//         template.querySelector('.card-title').innerText = `${balita.title}`;
//         template.querySelector('.card-text').innerText = `${balita.content}`;
//         document.querySelector('#card-list').appendChild(template);
//     }
//     addCard();

// });



//the idea is to run a for loop over the array to get out the details and use them to fill a <template>, so after running you would have 3 clones of that template, displaying the three objects in the array
// and then use setInterval to call your function with the for loop in it, so that it clears the HTML ID and re - fills it every 5 seconds