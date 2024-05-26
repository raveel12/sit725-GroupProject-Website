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
        div.classList.add("col-lg-3", "col-md-4", "col-sm-6", "my-2");
        // div.innerHTML = `
        //         <div class="card">
        //             <img src= "${card.path}" class="card-img-top">
        //             <div class="card-body">
        //                 <h5 class="card-title text-center">Property Details</h5>
        //                 <p class="card-text lead">Owner Name: ${card.oname}</p>
        //                 <p class="card-text lead">Owner Age: ${card.oage}</p>
        //                 <p class="card-text lead">Owner Contact: ${card.ono}</p>
        //                 <p class="card-text lead">Price (AUD): ${card.price}</p>
        //                 <p class="card-text lead">House No: ${card.hno}</p>
        //                 <p class="card-text lead">Street: ${card.street}</p>
        //                 <p class="card-text lead">Suburb: ${card.suburb}</p>
        //                 <p class="card-text lead">State: ${card.state}</p>
        //                 <p class="card-text lead">Area Code: ${card.acode}</p>
        //                 <p class="card-text lead">Description: ${card.description}</p>

        //             </div>
        //         </div>
        // `;
        div.innerHTML = `<div class="card">
                <img src= "${card.path}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text lead fst-italic">${card.suburb}, ${card.state}</p>
                    <p class="card-text fs-4 fw-bold">Price (AUD): ${card.price}/-</p>
                    <p class="card-text lead">"${card.description}"</p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#listing${idCount}">
                        Show Details
                    </button>
                    <div class="collapse" id="listing${idCount}">
                    <div class="card card-body details">
                        <p class="card-text lead">Posted by: ${card.oname} (${card.oage})</p>
                        <p class="card-text lead">Contact: ${card.ono}</p>
                        <p class="card-text lead fs-3">Address</p>
                        <p class="card-text lead">House No: ${card.hno}</p>
                        <p class="card-text lead">Street: ${card.street}</p>
                        <p class="card-text lead">Suburb: ${card.suburb}</p>
                        <p class="card-text lead">State: ${card.state}</p>
                        <p class="card-text lead">Area Code: ${card.acode}</p>
                    </div>
                    </div>
                </div>
            </div>
        `;
        cardRow.appendChild(div);
        idCount++;
        // cardRow.appendChild(div);
    });
}

container.appendChild(cardRow);

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