let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';

fetch(url)
  .then(res => res.json())
  .then(out =>
    console.log('Checkout this JSON! ', out))
  .catch(err => { throw err });



  