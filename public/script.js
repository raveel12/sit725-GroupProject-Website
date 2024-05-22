let body = document.body;
let container = document.createElement('div');
let cardRow = document.createElement('div');

container.classList.add('container-fluid');
cardRow.classList.add('row', 'justify-content-center');

function addCards(cards) {
    cards.forEach(card => {

        //Raw HTML content for card
        let div = document.createElement('div');
        div.classList.add("col-lg-4", "col-sm-5", "my-2");
        div.innerHTML = `
                <div class="card text-center">
                    <img src= "${card.path}" alt="Image${i++}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Property Details</h5>
                        <p class="card-text lead">${card.hno}</p>
                        <p class="card-text lead">${card.street}</p>
                        <p class="card-text lead">${card.suburb}</p>
                        <p class="card-text lead">${card.state}</p>
                        <p class="card-text lead">${card.code}</p>
                    </div>
                </div>
        `;
        cardRow.appendChild(div);
    });
}
function submitForm() {
    let formData = {
        oname: document.getElementById('oname').value,
        oage: document.getElementById('oage').value,
        path: document.getElementById('img_path').value,
        hno: document.getElementById('hnumber').value,
        street: document.getElementById('street').value,
        suburb: document.getElementById('suburb').value,
        state: document.getElementById('state').value,
        acode: document.getElementById('acode').value
    };
    console.log("Form Submitted: ", formData);
    postListing(formData);
};

const getCards = () => {
    $.get('/api/listings/', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}
const postListing = (formData) => {
    $.post('/api/listings/', formData);
}
//Append Everything at the end
container.appendChild(cardRow);
body.appendChild(container);

$(document).ready(function () {
    $("#submit").click((event) => {
    event.preventDefault();
    submitForm();
    });
    getCards();
});