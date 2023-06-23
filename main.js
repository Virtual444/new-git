console.log("BOOKING APPOINTMENT APP");
document.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/521a558fd18041db9f89fc0255cdba72/appointmentData')
    .then(response => {
        console.log(response);
        for(let i=0 ; i<response.data.length ; i++){
            displayUserOnScreen(response.data[i])
        }
    })
    .catch(err => {
        console.log(err);
    })
})

function addUser(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const userDetails = {
        name: name,
        email: email,
        phone: phone
    }
    axios.post('https://crudcrud.com/api/521a558fd18041db9f89fc0255cdba72/appointmentData', userDetails)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}

function displayUserOnScreen(userObj){
    const parentElement = document.getElementById('data');

    const li = document.createElement('li');
    li.id = userObj._id;
    li.textContent = `${userObj.name} => ${userObj.email} , ${userObj.phone}`;

    const button = document.createElement('button');
    button.textContent = "DELETE";
    button.onclick = deleteUser;

    li.appendChild(button)

    parentElement.appendChild(li);
}

function deleteUser(event){
    let id = event.target.parentElement.id;
    console.log("ID OF THIS LI ", id);

    axios.delete(`https://crudcrud.com/api/521a558fd18041db9f89fc0255cdba72/appointmentData/${id}`)
    .then(res => {
        console.log(res);
        location.reload();
    })
    .catch(err => {
        console.log("Error while deleting", err);
    })
}