// let body = document.body;
// let container = document.createElement('div');
// let cardRow = document.createElement('div');

// container.classList.add('container-fluid');
// cardRow.classList.add('row', 'justify-content-center');

// function addCards(cards) {
//     cards.forEach(card => {

//         //Raw HTML content for card
//         let div = document.createElement('div');
//         div.classList.add("col-lg-4", "col-sm-5", "my-2");
//         div.innerHTML = `
//                 <div class="card text-center">
//                     <img src= "${card.path}" class="card-img-top">
//                     <div class="card-body">
//                         <h5 class="card-title">Property Details</h5>
//                         <p class="card-text lead">Owner Name: ${card.oname}</p>
//                         <p class="card-text lead">Owner Age: ${card.oage}</p>
//                         <p class="card-text lead">House No: ${card.hno}</p>
//                         <p class="card-text lead">Street: ${card.street}</p>
//                         <p class="card-text lead">Suburb: ${card.suburb}</p>
//                         <p class="card-text lead">State: ${card.state}</p>
//                         <p class="card-text lead">Area Code: ${card.acode}</p>
//                     </div>
//                 </div>
//         `;
//         cardRow.appendChild(div);
//     });
// }
// //Append Everything at the end
// container.appendChild(cardRow);
// body.appendChild(container);

// const getCards = () => {
//     $.get('/listings/', (response) => {
//         if (response.statusCode == 200) {
//             addCards(response.data);
//         }
//     })
// }

// $(document).ready(function () {
//     getCards();
// });

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
        div.classList.add("col-lg-4", "col-sm-5", "my-2");
        div.innerHTML = `
                <div class="card">
                    <img src= "${card.path}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title text-center">Property Details</h5>
                        <p class="card-text lead">Owner Name: ${card.oname}</p>
                        <p class="card-text lead">Owner Age: ${card.oage}</p>
                        <p class="card-text lead">House No: ${card.hno}</p>
                        <p class="card-text lead">Street: ${card.street}</p>
                        <p class="card-text lead">Suburb: ${card.suburb}</p>
                        <p class="card-text lead">State: ${card.state}</p>
                        <p class="card-text lead">Area Code: ${card.acode}</p>
                        <p class="card-text lead">Price (AUD): ${card.price}</p>

                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#listing${idCount}">
                            Click Me for Details
                        </button>
                    </div>
                </div>
        `;
        cardRow.appendChild(div);
        offCanvas(idCount++, card.oname, card.oage, "Some Description of lsiting");
    });
}

container.appendChild(cardRow);

function offCanvas(ID, oname, oage, description){
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
            addCards(response.data);
        }
    })
}

const filterListings = () => {
    const filterValue = document.getElementById('filter').value
    console.log(filterValue)
    const gt = filterValue === '2';
    const price = 40000;
    const query = `?gt=${gt}&price=${price}`
    let url = '/listings/'

    // append query if user has selected above or below 40k
    if (filterValue === '1' || filterValue === '2') { 
        url += query
    } 
    $.get(url, (response)=>  {
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