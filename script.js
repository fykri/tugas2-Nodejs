const button = document.getElementById('ambil');
button.addEventListener('click', displayData)

async function displayData() {
    try {
        const response = await fetch('https://reqres.in/api/users')
        const {data} = await response.json()
        showData(data)
    } catch(error) {
        console.log(error.message);
        displayError(error)
    }
}

function showData (data) {
    const showData = document.getElementById('tampilkanData')
    for(let d of data) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <img src="${d.avatar}" alt="mantap">
            <h2>${d.first_name.toUpperCase()}</h2>
            <p>${d.last_name}
            <p>${d.email}`
        showData.appendChild(card) 
    }
}

function displayError(error) {
    const errTag = document.querySelector('p.error')
    console.log(errTag);
    errTag.textContent = `${error}`;
}






