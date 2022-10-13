const news = [
  { id: 1, title: "News1", content: "bla" },
  { id: 2, title: "News2", content: "ble" },
  { id: 3, title: "News3", content: "blu" },
];

let breakingNews = 
{
  id: 4,
  title: "News4",
  content: "blo",
}
;

news.push(breakingNews);

const newsPaper =  document.querySelector('#card-list');

let index = 0;

function addCard(index) { //try and use a template here instead:
  // newsPaper.innerHTML =
  //   "ID: " +
  //   news[index].id +
  //   "<br>" +
  //   "Title: " +
  //   news[index].title +
  //   "<br>" +
  //   "Content: " +
  //   news[index].content +
  //   "<br>" +
  //   "<br>" +
  //   "<br>";
  const template = document.getElementById("card-template").content.cloneNode(true);
  template.querySelector('.card-title').innerText = news[index].title;
  template.querySelector('.card-id').innerText = news[index].id;
  template.querySelector('.card-text').innerText = news[index].content;
  document.querySelector('#card-list').appendChild(template);
   
  // if (index === news.length - 1) {
  // } else {
  //   index++;
  // }
}

function displayCards() {
  console.log('printing news')
  newsPaper.innerHTML = ''
  news.forEach((news, index) => addCard(index))
}

var counter = 0;

const timer = setInterval(function(){
  counter += 1;
  if(counter == 6){
    window.location.reload();
  } else {
    displayCards() //instead display all the cards that are there on a repeating interval
  };
}, 5000);







