$(document).ready(function () {
  $('#tombol').click(function (e) {
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();

    $.ajax({
      url:'https://51018005.p-web.click/learnapp/member/login',
      method:'POST',
      data:{
        'email': email,
        'password': password
      },
      dataType:'json',
      success: function (e) {
        console.log(e);
        if (e.message=='success') {
          // document.cookie="asdsafaf";
          window.location.href="https://51018005.p-web.click/nihongo/home.html";
        } else {
          alert("Email/Password anda salah");
        }
      },
      error: function (e) {
        console.log(e);
      }
    });
  });
});
