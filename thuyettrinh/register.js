function register(){
    event.preventDefault();
    const email=document.getElementsByClassName('email')
    const name=document.getElementsByClassName('name')
    const password=document.getElementsByClassName('password')
    const repassword=document.getElementsByClassName('repassword')

    if(password.value == repassword.value){
       const test=document.getElementById('valid-text')
       test.innerHTML='Validation';
       test.style.display = 'inline';
       test.style.color ='green';
       saveUserToLocalstorage(email.value, name.value, password.value);
    }
    else{
       const test=document.getElementById('valid-text')
       test.innerHTML='Wrong repassword please input again';
       test.style.display='inline';
       test.style.color='red';
       console.log('not correct')
    }
}

const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', register);


function saveUserToLocalstorage(email,name,password){
    const arrayUsers=localStorage.getItem('users')
    if(arrayUsers === null){
        const newarrayUsers=[
        {
            email: email,
            name: name,
            password: password,
        },
    ]
        localStorage.setItem('users', JSON.stringify(newarrayUsers));
        location.replace('login.html')
    }else{
        const newarrayUsers=JSON.parse(arrayUsers)
        const finduser=newarrayUsers.findIndex(function(user){
            return user.email === email;
        })
        if(finduser === 1){
            newarrayUsers.push({
                email: email,
                name: name,
                password: password,
            })
            localStorage.setItem('users', JSON.stringify(newarrayUsers))
            location.replace('login.html')
        }else{
            const test=document.getElementById('valid-text')
            test.innerHTML='email existed';
            test.style.display='inline';
            test.style.color='red';
        }
    }
}

