// JavaScript for Modal
var modal = document.getElementById("myModal");
var closeModal = document.getElementById("closeModal");
var modalForm = document.getElementById("register-form");

if (!getCookie('modalDisplayed')) {
    modal.style.display = "block";
    setCookie('modalDisplayed', 'true', 1);
}

closeModal.onclick = function() {
    modal.style.display = "none";
};

modalForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    var formData = new FormData(modalForm);
    formData.append("submit",'submit');

    $.ajax({
        type: "POST",
        url: "register_form.php",
        data: formData,
        processData: false,
        contentType: false,
        success: function(data) {
            console.log('Success', data);

            if (data.trim() === "Success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Form Submission Successful',
                    text: 'We will get back to you soon!',
                });

                modal.style.display = "none";
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Form Submission Failed',
                    text: 'There was an error submitting the form. Please try again later.',
                });
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX error:', error);
        }
    });
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
