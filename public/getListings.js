let body = document.body;
let container = document.createElement('div');
let cardRow = document.createElement('div');

container.classList.add('container-fluid');
cardRow.classList.add('row', 'justify-content-center');

let idCount = 1;
function addCards(cards) {
    cards.forEach(card => {

        //Raw HTML content for card
        let div = document.createElement('div');
        div.classList.add("col-lg-3","col-md-4","col-sm-6", "my-2");
        div.innerHTML = `
                <div class="card">
                    <img src= "${card.path}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title text-center">Property Details</h5>
                        <p class="card-text lead">Owner Name: ${card.oname}</p>
                        <p class="card-text lead">Owner Age: ${card.oage}</p>
                        <p class="card-text lead">Owner Contact: ${card.ono}</p>
                        <p class="card-text lead">Price (AUD): ${card.price}</p>
                        <p class="card-text lead">House No: ${card.hno}</p>
                        <p class="card-text lead">Street: ${card.street}</p>
                        <p class="card-text lead">Suburb: ${card.suburb}</p>
                        <p class="card-text lead">State: ${card.state}</p>
                        <p class="card-text lead">Area Code: ${card.acode}</p>
                        <p class="card-text lead">Description: ${card.description}</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#listing${idCount}">
                            Click Me for Details
                        </button>
                    </div>
                </div>
        `;
        cardRow.appendChild(div);
        offCanvas(idCount++, card.oname, card.oage, card.description);
    });
}

container.appendChild(cardRow);

function offCanvas(ID, oname, oage, description) {
    let offcanvas = document.createElement('div');
    offcanvas.innerHTML = `
        <div class="offcanvas offcanvas-start" tabindex="-1" id="listing${ID}">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title">Listed by: ${oname} (${oage})</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
                ${description}
            </div>
        </div>
    `;
    container.appendChild(offcanvas);
}

body.appendChild(container);
const getCards = () => {
    $.get('/listings/', (response) => {
        if (response.statusCode == 200) {
            checkEmptyListings(response.data);
        }
    })
}
function checkEmptyListings(data) {
    if (data == "") {
        alert("Sorry! No listings yet!\nSTAYED TUNED FOR UPDATES");
        location.replace("./home.html");
    }
    else {
        addCards(data);
    }
}
const filterListings = () => {
    const filterValue = document.getElementById('filter').value
    console.log(filterValue)
    let price, gt;
    let query = '';
    let url = '/listings/'

    switch (filterValue) {
        case '1':
            price = 100000;
            gt = true;
            query = `?gt=${gt}&price=${price}`
            break;
        case '2':
            price = 50000;
            gt = true;
            query = `?gt=${gt}&price=${price}`
            break;
        case '3':
            price = 50000;
            gt = false;
            query = `?gt=${gt}&price=${price}`
            break;
        default:
            break;
    }

    url += query;
    $.get(url, (response) => {
        if (response.statusCode === 200) {
            cardRow.replaceChildren()
            addCards(response.data)
        }
    })
}

$(document).ready(function () {
    getCards();
    $("#filter-btn").click(() => {
        filterListings();
    });
});