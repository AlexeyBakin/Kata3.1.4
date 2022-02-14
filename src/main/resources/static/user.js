const url = 'http://localhost:8080/authUser';

const headerName = document.querySelector('.headerForm');

fetch(url)
    .then(res => res.json())
    .then(data => {
       console.log(data.name);
    });









//
// getHeader();
//
// function getHeader() {
//     fetch('http://localhost:8080/authUser')
//         .then(response => response.json())
//         .then(user => {
//             document.getElementById("headerName").innerHTML = user.name;
//         });
// }