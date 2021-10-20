const getName = document.getElementById('name');
const getEmail = document.getElementById('email');
const getPassword = document.getElementById('password');
const check = document.getElementById('check');
const submit = document.getElementById('submit');
const msg = document.getElementById('msg');
const span = document.createElement('span');

submit.addEventListener('click', function(){
    if(getName.value === '' || getEmail.value === '' || getPassword.value === ''){
        span.innerHTML = 'Please Enter All Fields !';
        span.style.color = 'red';
        span.style.fontSize = '18px';
        span.style.padding = '5px';
        span.style.fontFamily = 'cursive';
        span.style.fontWeight = '300';
        msg.appendChild(span);
        setTimeout(() => {
            msg.removeChild(span);
        },1800);
    }
})

getName.addEventListener('keyup', function(){
    if(getName.value.length > 0 && getName.value.length <= 2){
        document.getElementById('showName').innerHTML = 'Name should have at least 3 characters';
    }
    else {
        document.getElementById('showName').innerHTML = '';
    }
})
getEmail.addEventListener('keyup', function(){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    getEmail.value.length > 0 && getEmail.value.match(regexEmail) ? document.getElementById('showMail').innerHTML = ''
    : getEmail.value === '' ? document.getElementById('showMail').innerHTML = '' 
    : document.getElementById('showMail').innerHTML = 'Invalid Email';
});

getPassword.addEventListener('keyup', function(){
    getPassword.value === '' ? check.style.display = 'none' : check.style.display = 'block';
    getPassword.value.length > 0 && getPassword.value.length <= 6 ? document.getElementById('showPw').innerHTML = 'Password should have more than 6 characters' 
    : getPassword.value.length > 6 ? document.getElementById('showPw').innerHTML = 'Show Password'
    : getPassword.value.length < 1 ? document.getElementById('showPw').innerHTML = ''
    : '';

})

check.addEventListener('click', function(){
    getPassword.type === 'password' ? getPassword.type = 'text' : getPassword.type = 'password';
})


