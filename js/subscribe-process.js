$(document).ready(function() {
    
 
    $("#subscribe-form").submit(function (event) {
         event.preventDefault();
              var formData = $("#subscribe-form").serialize();
            $.ajax({
              type: "POST",
              url: "subscribe-process-meesage.php",
              data: formData,
      
            }).done(function (data) {
              console.log('Success',data);
              $("#subscribe-form")[0].reset()
               if (data === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Form Submission Successful',
                        text: 'We will get back to you soon!',
                    });
                } else {
                    // Display a SweetAlert2 error message
                    Swal.fire({
                        icon: 'error',
                        title: 'Form Submission Failed',
                        text: 'There was an error submitting the form. Please try again later.',
                    });

                    // Output a debugging message to the console
                    console.error('Form submission failed:', response);
                }
            });
        
           
      });

});
