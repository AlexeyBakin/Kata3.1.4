async function request(url, method = 'GET') {
    const options = {method, headers: {"Content-type": "application/json", "Accept": "application/json"}}
    const response = await fetch(url, options)
    if (!response.ok) {
        alert("Ошибка HTTP: " + response.status)
        throw Error("Ошибка HTTP: " + response.status)
    }
    return await response.json()
}

window.onload = async function () {
    const currentUser = await request('http://localhost:8080/authUser')
    renderCurrentUser(currentUser)
}

function renderCurrentUser(user) {
    document.getElementById('headerName').innerText = user.username
}