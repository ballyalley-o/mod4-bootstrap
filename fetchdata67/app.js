// document.getElementById('fetchUsers').addEventListener('click', fetchUsers);
document.getElementById('fetchPosts').addEventListener('click', fetchPosts, {once: true});
document.getElementById('fetchPosts').addEventListener('click', clearBoard);
document.getElementById('addData').addEventListener('submit', addData);
document.getElementById('reloadPage').addEventListener('click', reloadPage);


// function fetchUsers(){
//     fetch('users.json')
//     .then((res) => res.json())
//     .then((data) => {
//         let output = '<h2>Users</h2>';
//         data.forEach((user) => { output += `
//         <ul>
//             <li>ID: ${user.id}</li>
//              <li>NAME: ${user.name}</li>
//               <li>E-MAIL: ${user.email}</li>
//         </ul>`
//         });
//     document.getElementById('output').innerHTML = output;
//     })
// };

function fetchPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        let output = "<h1 class='mb-4' >Posts</h1>";
    data.forEach((post, index) => {
        if(index > 10) {
            return;
        } else { data.sort(function (a, b) {
          return a.index - b.index;
        });
        output += `
       <div class="card card-body mb-3">
            <h4>${post.title}</h4>
             <p>${post.body}</p>
        </div>
        `;
        }


    });
      document.getElementById('output').innerHTML = output;
    })
};


function addData(e) {
    e.preventDefault();

    let title = document.getElementById('title');
    let body = document.getElementById('body');

        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            Accept: "application/json, text/javascript, text/plain, */*",
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title: title.value, body: body.value }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));



    alert('Added to the API');
    document.querySelector("form").reset();


};

function clearBoard() {
    document.getElementById('output').innerHTML = '';
}

function reloadPage() {
  location.reload();
}