const usersData = [];

function saveUserData(event) {

    event.preventDefault();

    const idNumber = document.getElementById('idNumber').value;
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const birthday = document.getElementById('birthday').value;

    if (!idNumber || !firstName || !lastName || !gender || !birthday) {
        alert("Please fill in all required fields (ID, First Name, Last Name, Gender, Birthday).");
        return;
    }


    const newUser = {
        id: idNumber,
        first: firstName,
        middle: middleName || 'N/A',
        last: lastName,
        gender: gender,
        bday: birthday
    };

    usersData.push(newUser);

    updateTableDisplay();

    document.getElementById('signUpForm').reset();
}

function updateTableDisplay() {
    const tableBody = document.getElementById('userDataBody');
    tableBody.innerHTML = '';

    usersData.forEach(user => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = user.id;
        row.insertCell().textContent = user.first;
        row.insertCell().textContent = user.middle;
        row.insertCell().textContent = user.last;
        row.insertCell().textContent = user.gender;
        row.insertCell().textContent = user.bday;
    });
}

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('mouseover', () => {
    saveButton.style.backgroundColor = '#2ecc71';
    saveButton.addEventListener('mouseout', () => {
        saveButton.style.backgroundColor = '#5cb85c';
    });


    const form = document.getElementById('signUpForm');
    form.addEventListener('submit', saveUserData);