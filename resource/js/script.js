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
            'name': {
            required: true,
            minlength: 6,
            maxlength: 50
          },
          'email': {
            required: true,
            minlength: 6,
            maxlength: 255,
            email: true
          },
          'phone': {
              required: true,
              digits: true
          },
          'file': {
              required: true
          }
        },
        messages: {
            'name': {
            required: "Tên không thể trống",
            minlength: "Tên phải từ 6 - 50 ký tự",
            maxlength: "Tên phải từ 6 - 50 ký tự",
          },
          'email': {
            required: "Email không thể trống",
            email: "Email không đúng định dạng",
            minlength: "Email phải từ 6 - 255 ký tự",
            maxlength: "Email phải từ 6 - 255 ký tự"
          },
          'phone': {
              required: "Số điện thoại không thể trống",
              digits: "Số điện thoại sai định dạng"
          },
          'file': {
            required: "Chưa chọn file"
          }
        }
    });

    $("#join-form").validate({
        rules: {
            'name': {
            required: true,
            minlength: 6,
            maxlength: 50
          },
          'email': {
            required: true,
            minlength: 6,
            maxlength: 255,
            email: true
          },
          'phone': {
              required: true,
              digits: true
          },
          'file': {
              required: true
          }
        },
        messages: {
            'name': {
            required: "Tên không thể trống",
            minlength: "Tên phải từ 6 - 50 ký tự",
            maxlength: "Tên phải từ 6 - 50 ký tự",
          },
          'email': {
            required: "Email không thể trống",
            email: "Email không đúng định dạng",
            minlength: "Email phải từ 6 - 255 ký tự",
            maxlength: "Email phải từ 6 - 255 ký tự"
          },
          'phone': {
              required: "Số điện thoại không thể trống",
              digits: "Số điện thoại sai định dạng"
          },
          'file': {
            required: "Chưa chọn file"
          }
        }
    });

    $("#basic-form").submit(function(){
        if($(this).valid()) {
            swal({
                icon: 'success',
                title: 'Gửi thành công',
                text: 'Thông tin của bạn đã được gửi đi !',
                timer: 1500,
                button: false
            });
        } else {
            swal({
                icon: 'error',
                title: 'Thất bại',
                text: 'Vui lòng nhập đúng định dạng',
                timer: 1500,
                button: false
            });
        }
    });

    $("#join-form").submit(function(){
        if($(this).valid()) {
            swal({
                icon: 'success',
                title: 'Gửi thành công',
                text: 'Thông tin của bạn đã được gửi đi !',
                timer: 1500,
                button: false
            });
        } else {
            swal({
                icon: 'error',
                title: 'Thất bại',
                text: 'Vui lòng nhập đúng định dạng',
                timer: 1500,
                button: false
            });
        }
    });

    $('#file').change(function() {
        $('.upload strong').text( " :" + this.value);
    });

});