document.addEventListener("DOMContentLoaded", function(){
    var myButton = document.getElementsByClassName("mySubmitButton")[0];
    myButton.addEventListener('click', function(e) {
        console.log(e);
        alert('Thank you for your RSVP! We look forward to seeing you at our wedding.')
    })
})