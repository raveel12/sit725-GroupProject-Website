const socket = io();
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
        description: document.getElementById('description').value,
    };
    console.log("Form Submitted: ", formData);
    alert("Property Listing Submitted Successfully!");
    postListing(formData);
    location.replace("./buy.html")
};
function validateForm() {
    var valid = true;

    var name = document.getElementById('oname');
    var age = document.getElementById('oage');
    var phone = document.getElementById('ono');
    var price = document.getElementById('price');
    var description = document.getElementById('description');
    var houseNumber = document.getElementById('hnumber');
    var street = document.getElementById('street');
    var suburb = document.getElementById('suburb');
    var state = document.getElementById('state');
    var areaCode = document.getElementById('acode');
    var img_path = document.getElementById('img_path');

    // Regular expressions for validation
    var nameRegex = /\S+/;
    var ageRegex = /^\d{1,2}$/;
    var phoneRegex = /^\d{10}$/;
    var priceRegex = /^(10000|[1-9]\d{4,5}|1000000)$/;
    var houseNumberRegex = /^(1?\d|20)$/;
    var streetRegex = /^[^0-9]+$/;
    var suburbRegex = /^[^\d]+$/;
    var stateRegex = /^[^\d]+$/;
    var areaCodeRegex = /^\d{4}$/;

    // Validation for name
    if (!nameRegex.test(name.value.trim())) {
        name.classList.add('is-invalid');
        valid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    // Validation for age
    if (!ageRegex.test(age.value.trim()) || age.value.trim() < 1 || age.value.trim() > 99) {
        age.classList.add('is-invalid');
        valid = false;
    } else {
        age.classList.remove('is-invalid');
    }

    // Validation for phone
    if (!phoneRegex.test(phone.value.trim())) {
        phone.classList.add('is-invalid');
        valid = false;
    } else {
        phone.classList.remove('is-invalid');
    }

    // Validation for price
    if (!priceRegex.test(price.value.trim())) {
        price.classList.add('is-invalid');
        valid = false;
    } else {
        price.classList.remove('is-invalid');
    }

    // Validation for description
    if ((description.value.trim()) == "") {
        description.classList.add('is-invalid');
        valid = false;
    }
    else {
        description.classList.remove('is-invalid');
    }

    // Validation for houseNumber
    if (!houseNumberRegex.test(houseNumber.value.trim())) {
        houseNumber.classList.add('is-invalid');
        valid = false;
    } else {
        houseNumber.classList.remove('is-invalid');
    }

    // Validation for street
    if (!streetRegex.test(street.value.trim())) {
        street.classList.add('is-invalid');
        valid = false;
    } else {
        street.classList.remove('is-invalid');
    }

    // Validation for suburb
    if (!suburbRegex.test(suburb.value.trim())) {
        suburb.classList.add('is-invalid');
        valid = false;
    } else {
        suburb.classList.remove('is-invalid');
    }

    // Validation for state
    if (!stateRegex.test(state.value.trim())) {
        state.classList.add('is-invalid');
        valid = false;
    } else {
        state.classList.remove('is-invalid');
    }

    // Validation for areaCode
    if (!areaCodeRegex.test(areaCode.value.trim())) {
        areaCode.classList.add('is-invalid');
        valid = false;
    } else {
        areaCode.classList.remove('is-invalid');
    }
    //Validation for img_path
    if ((img_path.value.trim()) == "") {
        img_path.classList.add('is-invalid');
        valid = false;
    }
    else {
        img_path.classList.remove('is-invalid');
    }
    // Return overall validation result
    return valid;
}
function validateAndSubmitForm() {
    if (validateForm()) { // If validation is successful
        submitForm(); // Submit the form
        return true; // Allow the form submission to proceed
    } else {
        return false; // Prevent the form submission if validation fails
    }
}
const sellPage = `\nYou're on Sell Page`
socket.on('success', (msg) => {
    console.log('Server Said: ' + msg + sellPage);
})
const postListing = (formData) => {
    $.post('/listings/', formData);
}