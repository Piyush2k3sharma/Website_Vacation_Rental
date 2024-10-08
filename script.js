function handleNameSubmit(event){
    event.preventDefault()
    let name = document.getElementById('name').value.trim();
    let NameErrormsg = document.getElementById('NameErrorMsg');
    NameErrormsg.innerHTML = '';
    // let message = document.getElementById('message').value.trim();
    var usernameRegex = /^[a-zA-Z]+$/;
    if (name ===""){
        NameErrormsg.innerHTML = '! Please enter your name';
        NameErrormsg.style.color = 'red';
    }
    else if(!usernameRegex.test(name)){
        NameErrormsg.innerHTML = '! Please enter Valid Name';
        NameErrormsg.style.color = 'red';
    }
}

function handleEmailSubmit(event){
    event.preventDefault()
    let email = document.getElementById('email').value.trim();
    let EmailErrorMsg = document.getElementById('EmailErrorMsg');
    EmailErrorMsg.innerHTML = ''
    var emailRegex = /\S+@gmail\S+\.\S+/;
    if (email ===''){
        EmailErrorMsg.innerHTML = "! Enter a email.";
        EmailErrorMsg.style.color = 'red';
    }
    else if(!emailRegex.test(email)){
        EmailErrorMsg.innerHTML = "! Enter a valid email";
        EmailErrorMsg.style.color = 'red';
    }
}

function handleSubjectSubmit(event){
    event.preventDefault()
    let subject = document.getElementById('Subject').value.trim();
    let SubErrorMsg = document.getElementById('SubErrorMsg');
    var SubRegex = /([A-Za-z])\w+/;
    SubErrorMsg.innerHTML = ''
    if (subject ===''){
        SubErrorMsg.innerHTML = "! Enter a Subject.";
        SubErrorMsg.style.color = 'red';
    }
    else if(!SubRegex.test(subject)){
        SubErrorMsg.innerHTML = "! Enter a valid Subject";
        SubErrorMsg.style.color = 'red';
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// try the regex for subject and message