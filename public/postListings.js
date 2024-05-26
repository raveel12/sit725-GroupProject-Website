function submitForm() {
    let formData = {
        oname: document.getElementById('oname').value,
        oage: document.getElementById('oage').value,
        ono: document.getElementById('ono').value,
        price: document.getElementById('price').value,
        path: document.getElementById('img_path').value,
        hno: document.getElementById('hnumber').value,
        street: document.getElementById('street').value,
        suburb: document.getElementById('suburb').value,
        state: document.getElementById('state').value,
        acode: document.getElementById('acode').value,
        description: document.getElementById('description').value
    };
    console.log("Form Submitted: ", formData);
    alert("Property Listing Submitted Successfully!");
    postListing(formData);
    location.replace("./buy.html")
};

const postListing = (formData) => {
    $.post('/listings/', formData);
}

$(document).ready(function () {
    $("#submit").click((event) => {
        event.preventDefault();
        submitForm();
    });
});