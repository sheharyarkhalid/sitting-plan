$(document).ready(function() {

    $('#record_data_tabel').DataTable({
    lengthMenu: [
        [2, 10, 50, -1],
        [2, 10, 50, 200 , 'All'],
    ],
});

oTable = $('#record_data_tabel').DataTable();  
$('#custom_datatable_search_field').keyup(function(){
      oTable.search($(this).val()).draw() ;
});



//     jQuery(function ($) {
//     var $question = $(".single-sidebar-menu-list");
//     var $answer = $(".single-menu-data-box");
//     $question.click(function () {

//       // Hide all answers
//       $answer.slideUp();
//       // Check if this answer is already open
//       if ($(this).hasClass("open")) {

//         // If already open, remove 'open' class and hide answer
//         $(this).removeClass("open").next($answer).slideUp();
//         // If it is not open...
//       } else {
//         // Remove 'open' class from all other questions
//         $question.removeClass("open");
//         // Open this answer and add 'open' class
//         $(this).addClass("open").next($answer).slideDown();
//       }
//     });
// });

  $(".hamburger_img").click(function () {
    $(".dashboard-sidebar").toggleClass("active");
    $(".content-section").toggleClass("active");
  });

});

// function NewsletteronSubmit(token) {
//     $("submit_form").submit();
// }

function validate_signupForm(event) {
    event.preventDefault();

    $("#submit_signup_form").validate({
        rules: {

            user_name: {
                required: true,
            },   
            email: {
                required: true,
                email: true,
            },  
            password: {
                required: true,
            },
            phone_number: {
                required: true,
            }, 
            department: {
                required: true,
            },               
        }

    });

     if ($('#submit_signup_form').valid()) {
        $("#submit_signup_form").submit();
     }

}

function onload_signup() {

    var element = document.getElementById('signupForm');
    element.onclick = validate_signupForm;
}


function validate_login_Form(event) {
    event.preventDefault();

    $("#submit_login_form").validate({
        rules: {

            user_name: {
                required: true,
            },   
            email: {
                required: true,
                email: true,
            },  
            password: {
                required: true,
            },
                        
        }

    });

     if ($('#submit_login_form').valid()) {
        $("#submit_login_form").submit();
     }

}

function onload_login() {

    var element = document.getElementById('LoginForm');
    element.onclick = validate_login_Form;
}