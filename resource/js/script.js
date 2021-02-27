$(document).ready(function(){
    $('#view-more-about').click(function(){
        $('#show-about').removeClass("d-none");
        $('#view-more-about').hide();
    });

    $('.view-more-benefits').click(function(){
        let snipet = $(this).data('snippet');
        if(snipet == 1) {
            $('#1').removeClass("show");
            $(this).hide();
        } else if (snipet == 2) {
            $('#2').removeClass("show");
            $(this).hide();
        } else if (snipet == 3) {
            $('#3').removeClass("show");
            $(this).hide();
        } else if (snipet == 4) {
            $('#4').removeClass("show");
            $(this).hide();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true) {
            $('.apply-filter').removeClass("disabled");
        } else if($(this).prop("checked") == false) {
            $('.apply-filter').addClass("disabled");
        }
    });

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('#back-top').addClass('show');
    } else {
        $('#back-top').removeClass('show');
    }
    });

    $('#back-top').on('click', function(e) {
        $("html, body").animate({scrollTop: 0}, 500);
    });

    $("#basic-form").validate({
        rules: {
            name : {
            required: true,
            minlength: 8
            },
            email: {
                required: true,
                email: true,
                valid_email: true
            },
            phone: {
                required: true,
                minlength: 8
            },
            file: {
                required:true,
                extension: "docx|doc|pdf"
            }
        }
    });

    $("#join-form").validate({
        rules: {
            name : {
            required: true,
            minlength: 8
            },
            email: {
                required: true,
                email: true,
                valid_email: true
            },
            phone: {
                required: false,
                minlength: 8
            },
            address: {
                required:false
            },
            company: {
                required: false
            },
            year: {
                required: false
            },
            content: {
                required: false
            },
            file: {
                required:true,
                extension: "docx|doc|pdf"
            }
        }
    });

    $("#basic-form").submit(function(){
        if($(this).valid()) {
            swal("Gửi thành công", "Thông tin của bạn đã được gửi đi !", "success");
        } else {
            swal("Thất bại", "Vui lòng nhập đúng định dạng yêu cầu", "error");
        }
    });

    $("#join-form").submit(function(){
        if($(this).valid()) {
            swal("Gửi thành công", "Thông tin của bạn đã được gửi đi !", "success");
        } else {
            swal("Thất bại", "Vui lòng nhập đúng định dạng yêu cầu", "error");
        }
    });



    
});