makingClassAnimation = document.querySelector('.makingClassAnimation');
makingClassAnimationforPassword = document.querySelector('.makingClassAnimationforPassword');
inputPasswordinLogin = document.querySelector('#inputPasswordinLogin');
inputMail = document.querySelector('#inputMail');
emailRequired = document.querySelector('.emailRequired');
nextSeacondClick = document.querySelector('#nextSeacondClick');
passwordRequired = document.querySelector('.passwordRequired');
yehitohBaatHai = document.querySelector('.yehitohBaatHai');
boxHaiNew = document.querySelector('.boxHaiNew');
boxHai = document.querySelector('.boxHai');
var savingDataInsidePasswordonRefresh = localStorage.getItem('password');
var emailMilChukaHai = localStorage.getItem('emailhaiForSave');
sdjbnssdjk();
function sdjbnssdjk(){
    inputMail.value = emailMilChukaHai;
            inputMail.style.borderColor = 'green';
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
console.log(emailMilChukaHai);
console.log(savingDataInsidePasswordonRefresh);
let returningToIndexValue = false;
function returningToIndex(){
        returningToIndexValue = true;
        localStorage.setItem('valuehaiSavekariHuihasNai', returningToIndexValue);
}


function openLinkMajeDaar() {
    var url = "./index.html";
    window.location.href = (url);
}

function yehitohBaatHaiFunction(){
    yehitohBaatHai.classList.toggle('boxHaiNew');
    yehitohBaatHai.classList.toggle('boxHai');
}



nextSeacondClick.addEventListener('click', ()=>{
    if(inputMail.value == '' && inputPasswordinLogin.value == ''){
        $('.emailRequired').css('display', 'flex');
        $('.passwordRequired').css('display', 'flex');
        $('#inputMail').css('border-color', 'red');
        $('#inputPasswordinLogin').css('border-color', 'red');
        inputMail.focus();
    } else if(inputMail.value == ''){
        $('.emailRequired').css('display', 'flex');
        $('#inputMail').css('border-color', 'red');
    } else if(inputPasswordinLogin.value == ''){
        $('.passwordRequired').css('display', 'flex');
        $('#inputPasswordinLogin').css('border-color', 'red');
    } else{
        $('.emailRequired').css('display', 'none');
        inputMail.blur();
    }
})

nextSeacondClick.addEventListener('click', ()=>{
    if(savingDataInsidePasswordonRefresh != passwordinLogin){
        passwordRequired.innerText = 'Entered Password is Incorrect!';
        $('.passwordRequired').css('display', 'flex');
        $('#inputPasswordinLogin').css('border-color', 'red');
        $('#inputPasswordinLogin').css('background-color', '#ff000017');
    } else if (savingDataInsidePasswordonRefresh == passwordinLogin){
        passwordRequired.innerText = 'Login Completed';
        $('.passwordRequired').css('display', 'flex');
        $('.passwordRequired').css('color', 'green');
        $('#inputPasswordinLogin').css('border-color', 'green');
        $('#inputPasswordinLogin').css('background-color', '#01ff0030');
        setTimeout(openLinkMajeDaar, 2000);
        yehitohBaatHaiFunction();
        returningToIndex();
    }
});




inputMail.addEventListener('focus', ()=>{
    gsap.to(".makingClassAnimation",{
        duration: 0.1,
        fontSize: '12px',
        y:-10,
        x:-3,
    })
})
inputMail.addEventListener('blur', ()=>{
    if(inputMail.value.trim() !== ''){
        gsap.to(".makingClassAnimation",{
            duration: 0.19,
            y:-10,
            x:-3,
            fontSize: '12px',
        })  
    } else{
        gsap.to(".makingClassAnimation",{
            duration: 0.19,
            y:0,
            x:0,
            fontSize: '17px',
        })
    }
})


inputPasswordinLogin.addEventListener('focus', ()=>{
    gsap.to(".makingClassAnimationforPassword",{
        duration: 0.1,
        fontSize: '12px',
        y:-10,
        x:-3,
    })
})
inputPasswordinLogin.addEventListener('blur', ()=>{
    if(inputPasswordinLogin.value.trim() !== ''){
        gsap.to(".makingClassAnimationforPassword",{
            duration: 0.19,
            y:-10,
            x:-3,
            fontSize: '12px',
        })  
    } else{
        gsap.to(".makingClassAnimationforPassword",{
            duration: 0.19,
            y:0,
            x:0,
            fontSize: '17px',
        })
    }
})

inputMail.addEventListener('input', ()=>{
    if(!inputMail.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        emailRequired.innerText = 'Please enter a correct mail!'
        $('#inputMail').css('border-color', 'red');
        $('.emailRequired').css('display', 'flex');
        $('#mailAlertImgBelow').css('display', 'none');
        $('#mailAlertImg2Below').css('display', 'block');
    } else{
        $('#inputMail').css('background-color', 'rgb(42 52 66 / 69%)');
        $('#inputMail').css('border-color', 'green');
        $('#typingEmailBelow').css('border-color', 'green');
        $('#mailAlert2Below').css('display', 'none');
        $('.emailRequired').css('display', 'none');
        $('#mailAlertImg2Below').css('display', 'none');
        email = true;
    }
});


let passwordinLogin;
inputPasswordinLogin.addEventListener('input', ()=>{
    passwordinLogin = inputPasswordinLogin.value;
});