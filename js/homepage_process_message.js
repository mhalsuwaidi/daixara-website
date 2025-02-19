$(document).ready(function() {
    
 
    $("#homepage-form").submit(function (event) {
             event.preventDefault();
              var formData = $("#homepage-form").serialize();
            $.ajax({
              type: "POST",
              url: "process-homepage-message.php",
              data: formData,
      
            }).done(function (data) {
              console.log('Success',data);
              $("#homepage-form")[0].reset()
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
