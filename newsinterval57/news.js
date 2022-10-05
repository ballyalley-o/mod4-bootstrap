const news = [
  { id: 1, title: "News1", content: "bla" },
  { id: 2, title: "News2", content: "ble" },
  { id: 3, title: "News3", content: "blu" },
];

const news2 = [
  { id: 4, title: "News4", content: "blo" },
  { id: 5, title: "News5", content: "blo" },
  { id: 6, title: "News6", content: "blx" },
];

function getNews(){
  return news;
}

function addCard() {
  
getNews().forEach(function templateCard(info) {


  const template =
    document.getElementById("card-template").content.cloneNode(true);
    template.querySelector(".card-id").innerText = `${info.id}`;
    template.querySelector(".card-title").innerText = `${info.title}`;
    template.querySelector(".card-text").innerText = `${info.content}`;
    document.querySelector("#card-list").prepend(template);
  });
}

if ("content" in document.createElement("template")) {
  
  const timer = setInterval(function () {
    addCard();
    clearInterval(timer);
  }, 5000);
}



const newsCards2 = news2.forEach(function templateCard2 (info2) {
  function addCard2() {

    var template =
    document.getElementById("card-template").content.cloneNode(true);
    template.querySelector(".card-id").innerText = `${info2.id}`;
    template.querySelector(".card-title").innerText = `${info2.title}`;
    template.querySelector(".card-text").innerText = `${info2.content}`;
    document.querySelector("#card-list").prepend(template);

  }
  if ("content" in document.createElement("template")) {
    setTimeout(addCard2, 10000);
  }
});

setTimeout(function reloadCard() {
  window.location.reload();
}, 15000);

// const timeWatch = document.querySelector('#checkSecs');


// const nd = new Date();
// let seconds = nd.getMilliseconds();
// let interval = null;

// function getMs () {
//   seconds++;

//   let secs = seconds;



//   timeWatch.innerText = `${secs}`;

// }

// function start() {
//   setInterval(getMs, 0);
// }

// start()


