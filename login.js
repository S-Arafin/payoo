// login functionality 
document.getElementById('loginBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = '01979817736';
    const pinNumber = '2310';
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const pinValue = document.getElementById('pin').value
    if (mobileNumberValue === mobileNumber && pinValue === pinNumber) {
        window.location.href = "home.html"
    }
    else {
        alert("invalid credentials")
        
    }

})