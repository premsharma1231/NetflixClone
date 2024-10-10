nextButton = document.getElementById('nextButton');
center = document.querySelector('.center');
center2 = document.querySelector('.center2');
center3 = document.querySelector('.center3');
buttonNext = document.querySelector('#buttonNext')
nextSeacondClick = document.querySelector('#nextSeacondClick');
inputmail = document.querySelector('#inputMail');
inputPassword = document.querySelector('#inputPassword');
emailRequired = document.querySelector('.emailRequired');
passwordRequired = document.querySelector('.passwordRequired');
emailVeriySwitch = document.querySelector('#emailVeriySwitch');
typingEmail = document.querySelector('#typingEmail');
var savingDataInsideEmailonRefresh = localStorage.getItem('emailhaiForSave');

buttonNext.addEventListener('click', ()=>{
    lshdbgsdkjlbsdlgkjb();
})
    function lshdbgsdkjlbsdlgkjb() {
        var url = "https://www.netflix.com/signup/planform";
        window.location.href = (url);
    }






savingData();
    
    function savingData(){
        inputmail.value = savingDataInsideEmailonRefresh;
        inputmail.style.borderColor = 'green';
        gsap.to(".makingClassAnimation",{
            duration: 0.19,
            y:-11,
            x:-3,
            fontSize: '13px',
            function(){
                inputmail.focus();
            }
        })
    }
    


nextButton.addEventListener('click', ()=>{
    gsap.to(".center", { 
        duration: 0.31,
        x: -100,
        opacity: 0,
        display:"none",
      });
});
nextButton.addEventListener('click', ()=>{
    gsap.from('.center2',{
        x: 200,
        y: 0,
        display: 'none',
        duration: 0.5,
    })
    gsap.to('.center2',{
          x: 0,
          y: 0,
          display: 'flex',
          delay: 0.31,
          duration: 0.5,
    })
});

nextSeacondClick.addEventListener('click', ()=>{
    if((inputmail.value === '' && inputPassword.value === '')){
        gsap.to(".makingClassAnimationforPassword",{
            duration: 0.1,
            top: '282px',
        })
        emailRequired.style.display = 'flex';
        passwordRequired.style.display = 'flex';
        inputmail.style.borderColor = 'rgb(187, 4, 4)';
        inputPassword.style.borderColor = 'rgb(187, 4, 4)';
    } else if(inputmail.value === ''){
        emailRequired.style.display = 'flex';
    } else if(inputPassword.value === ''){
        inputPassword.style.display = 'flex';
    } else{ 
        inputPassword.style.display = 'none';
        emailRequired.style.display = 'none';
        gsap.to(".center2", { 
        duration: 0.31,
        x: -100,
        opacity: 0,
        display:"none",
    });
    gsap.from('.center3',{
        x: 200,
        y: 0,
        display: 'none',
        duration: 0.5,
    })
    gsap.to('.center3',{
          x: 0,
          y: 0,
          display: 'flex',
          delay: 0.31,
          duration: 0.5,
        })
    }
})

inputMail.addEventListener('focus', ()=>{
    gsap.to(".makingClassAnimation",{
        duration: 0.19,
        y:-11,
        x:-3,
        fontSize: '13px',
    })
});
inputMail.addEventListener('blur', ()=>{
    if(inputMail.value == ''){
        gsap.to(".makingClassAnimation",{
            duration: 0.19,
            y:0,
            x:0,
            fontSize: '17px',
        })
    }
});

inputPassword.addEventListener('focus', ()=>{
    gsap.to(".makingClassAnimationforPassword",{
        duration: 0.19,
        y:-11,
        x:-3,
        fontSize: '13px',
    })
});
inputPassword.addEventListener('blur', ()=>{
    if(inputPassword.value == ''){
        gsap.to(".makingClassAnimationforPassword",{
            duration: 0.19,
            y:0,
            x:0,
            fontSize: '17px',
        })
    }
});

let email;
inputmail.addEventListener('input', ()=>{
    if(!inputmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailRequired.innerText = 'Please enter a valid mail!'
        gsap.to(".emailRequired", {
            display: "flex",
            y:-5,
            duration: 0.2,
        })
        gsap.to(".makingClassAnimationforPassword",{
            duration: 0.1,
            top: '282px',
        })
    } else{
        email = inputmail.value;
        localStorage.setItem("email", email);
        emailRequired.innerText = 'Email & password is required!'
        gsap.to(".emailRequired", {
            display: "none",
            y:-5,
            duration: 0.2,
        })
        gsap.to(".makingClassAnimationforPassword",{
            duration: 0.1,
            top: '263px',
        })
        inputmail.style.borderColor = 'green';
    }
})


let password;
inputPassword.addEventListener('input', ()=>{
    password = inputPassword.value;
    var integerCount = password.replace(/[^0-9]/g, "").length;
    if ((password.length >= 12 && integerCount >= 4)) {
        passwordRequired.innerText = 'Password is required!'
        passwordRequired.style.display = 'none';
        localStorage.setItem("password", password);
    } else {
        passwordRequired.innerText = 'Password should contain 8 character & 4 integer!'
        passwordRequired.style.display = 'flex';
        inputPassword.style.borderColor = 'green';
        localStorage.setItem("password", password);
    }
});