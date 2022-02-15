function addNewUser() {

    let form = window.formNewUser.nRoles;
    let newUserRoles = [];

    let rolesList = document.createElement('ul');

    for (let i = 0; i < form.length; i++) {
        let option = form.options[i];
        if (option.selected) {
            newUserRoles.push(option.value);
        }
    }

    fetch('http://localhost:8080/admin/create?newRoles=' + newUserRoles, {
        method: 'POST',
        body: JSON.stringify({
            username: window.formNewUser.nUsername.value,
            password: window.formNewUser.nPassword.value,
            name: window.formNewUser.nName.value,
            lastname: window.formNewUser.nLastname.value,
            email: window.formNewUser.nEmail.value,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => {
            window.formNewUser.nUsername.value = "";
            window.formNewUser.nPassword.value = "";
            window.formNewUser.nName.value = "";
            window.formNewUser.nLastname.value = "";
            window.formNewUser.nEmail.value = "";
            window.formNewUser.nRoles.value = "";
        });

    let tBody = document.getElementById("tBody");
    tBody.innerHTML = "";
    fetch('http://localhost:8080/admin/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(function (user) {
                let row = tBody.insertRow();
                row.setAttribute("id", user.id);
                let cell0 = row.insertCell();
                cell0.innerHTML = user.id;
                let cell1 = row.insertCell();
                cell1.innerHTML = user.username;
                let cell11 = row.insertCell();
                cell11.innerHTML = user.name;
                let cell2 = row.insertCell();
                cell2.innerHTML = user.lastname;
                let cell3 = row.insertCell();
                cell3.innerHTML = user.email;
                let cell5 = row.insertCell();
                cell5.innerHTML = getRoleList(user).textContent.replaceAll("ROLE_", "");
                let cell6 = row.insertCell();
                cell6.innerHTML =
                    '<button type="button" onclick="getModalEdit(' + user.id + ')" '
                    + 'class="btn btn-info">Edit</button>';
                let cell7 = row.insertCell();
                cell7.innerHTML =
                    '<button type="button" onclick="getModalDelete(' + user.id + ')" '
                    + 'class="btn btn-danger">Delete</button>';
            })
        });
        // .then(response => response.json())
        // .then(user => {
        //     const users_table = document.getElementById("usersTab");
        //     const new_user = document.getElementById("newUser");
        //     new_user.classList.remove("active");
        //     users_table.classList.add("active");
        //
        //     const users_table_main = document.getElementById("users_table");
        //     const new_user_main = document.getElementById("new_user");
        //     new_user_main.classList.remove("active", "show");
        //     users_table_main.classList.add("active", "show");
        //
        //     window.getAllUsers()
        //
        //     $('#tBody tr:last').after('<tr id=' + user.id + '>' +
        //         '<td>' + user.id + '</td>' +
        //         '<td>' + window.formNewUser.nUsername.value + '</td>' +
        //         '<td>' + window.formNewUser.nName.value + '</td>' +
        //         '<td>' + window.formNewUser.nLastname.value + '</td>' +
        //         '<td>' + window.formNewUser.nEmail.value + '</td>' +
        //         '<td>' + rolesList.textContent + '</td>' +
        //         '<td> <button type="button" onclick="getModalEdit(' + user.id + ')" ' +
        //         'class="btn btn-info">Edit</button> </td>' +
        //         '<td> <button type="button" onclick="getModalDelete(' + user.id + ')" ' +
        //         'class="btn btn-danger">Delete</button> </td>' +
        //         '</tr>');
        //
        //     window.formNewUser.nUsername.value = "";
        //     window.formNewUser.nPassword.value = "";
        //     window.formNewUser.nName.value = "";
        //     window.formNewUser.nLastname.value = "";
        //     window.formNewUser.nEmail.value = "";
        //     window.formNewUser.nRoles.value = "";
        // });
}