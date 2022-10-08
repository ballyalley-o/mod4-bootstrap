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

function addCard() {
  newsPaper.innerHTML =
    "ID: " +
    news[index].id +
    "<br>" +
    "Title: " +
    news[index].title +
    "<br>" +
    "Content: " +
    news[index].content +
    "<br>" +
    "<br>" +
    "<br>";

   
  if (index === news.length - 1) {
  } else {
    index++;
  }
}

var counter = 0;


const timer = setInterval(function(){
  counter += 1;
  if(counter == 6){
    window.location.reload();
  } else {
    addCard()
  };
}, 5000);







