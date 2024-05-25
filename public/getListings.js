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
                    <img src= "${card.path}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Property Details</h5>
                        <p class="card-text lead">Owner Name: ${card.oname}</p>
                        <p class="card-text lead">Owner Age: ${card.oage}</p>
                        <p class="card-text lead">House No: ${card.hno}</p>
                        <p class="card-text lead">Street: ${card.street}</p>
                        <p class="card-text lead">Suburb: ${card.suburb}</p>
                        <p class="card-text lead">State: ${card.state}</p>
                        <p class="card-text lead">Area Code: ${card.acode}</p>
                    </div>
                </div>
        `;
        cardRow.appendChild(div);
    });
}

const getCards = () => {
    $.get('/listings/', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}
//Append Everything at the end
container.appendChild(cardRow);
body.appendChild(container);

$(document).ready(function () {
    getCards();
});