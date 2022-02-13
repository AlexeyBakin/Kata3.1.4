getHeader();

function getHeader() {
    fetch('http://localhost:8080/authUser')
        .then(response => response.json())
        .then(user => {
            document.getElementById("headerName").innerHTML = user.name;
        });
}