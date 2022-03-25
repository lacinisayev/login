function pasuser(form){
    if (form.id.value=="ulvi.m221@mail.ru"){
    if (form.pass.value=="ulvi2003"){   
    location="https://www.youtube.com/watch?v=CCx7hyxI6kU"} 
    else {message=document.getElementById("error-message2")
          message.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>Incorrect password';}}

    else {message=document.getElementById("error-message1")
          message.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>Enter an email or phone number';}}