function fetchUser() {
    fetch('https://randomuser.me/api')
        .then((result) => result.json())
        .then((data) => loadingUsers(data.results[0]))
}

function loadingUsers(user) {
    const mainImage = document.querySelector('.main-image');
    const img = document.querySelector('img')
    if (user.gender === 'female') {
        img.style.border = '10px solid #ffafcc'
    } else {
        img.style.border = '10px solid #a2d2ff'
    }

    img.src = `${user.picture.large}`;
    mainImage.appendChild(img)

    const card = document.querySelector('.card')

    const name = document.querySelector('.name');
    name.innerHTML = `Name: ${user.name.first}, ${user.name.last}`;
    card.appendChild(name);

    const email = document.querySelector('.email');
    email.innerHTML = `Email: ${user.email}`;
    card.appendChild(email);

    const age = document.querySelector('.age');
    age.innerHTML = `Age: ${user.dob.age}`;
    card.appendChild(age);


    const location = document.querySelector('.location');
    location.innerHTML = `Location: ${user.location.city}, ${user.location.country}`;
    card.appendChild(location);
}


document.querySelector('DOMContentLoaded', fetchUser)
document.querySelector('.btn').addEventListener('click', fetchUser)
fetchUser()