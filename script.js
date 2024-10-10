let emailVeriySwitch = document.querySelector('#emailVeriySwitch');
let emailVeriySwitchBelow = document.querySelector('#emailVeriySwitchBelow');
let typingEmail = document.querySelector('#typingEmail');
let typingEmailBelow = document.querySelector('#typingEmailBelow');
let mailAlertImg  = document.querySelector('#mailAlertImg');
let mailAlertImgBelow  = document.querySelector('#mailAlertImgBelow');
let mailAlertImg2  = document.querySelector('#mailAlertImg2');
let mailAlertImg2Below  = document.querySelector('#mailAlertImg2Below');
let mailAlert = document.querySelector('#mailAlert');
let mailAlertBelow = document.querySelector('#mailAlertBelow');
let mailAlert2 = document.querySelector('#mailAlert2');
let mailAlert2Below = document.querySelector('#mailAlert2Below');
let phai = document.querySelector('.faqkaphaiyeisiliyep');
let paravaliId = document.querySelector('.paravaliId');
var faq = document.querySelectorAll('.faq');
let verifyGmail = document.querySelector('.verifyGmail');
let selectLanguage = document.querySelector('#selectLanguage');
let selectLanguageBelow = document.querySelector('#selectLanguageBelow');
let selectLanguageHindi = document.querySelector('#selectLanguageHindi');
let selectLanguageHindiBelow = document.querySelector('#selectLanguageHindiBelow');
let selectLanguageClass = document.querySelector('.selectLanguage');
let selectLanguageClassBelow = document.querySelector('.selectLanguageBelow');
let selectLanguageClassHindi = document.querySelector('.selectLanguageHindi');
let selectLanguageClassHindiBelow = document.querySelector('.selectLanguageHindiBelow');
let insideLanguage = document.querySelector('.insideLanguage');
let insideLanguageBelow = document.querySelector('.insideLanguageBelow');
let call = document.querySelector('.insideNumberofQuestion');
let beforeEmail = document.querySelector('.beforeEmail');
let faq1hai = document.querySelector('.faq1hai');
let faq2hai = document.querySelector('.faq2hai');
let faq3hai = document.querySelector('.faq3hai');
let faq4hai = document.querySelector('.faq4hai');
let faq5hai = document.querySelector('.faq5hai');
let faq6hai = document.querySelector('.faq6hai');
var faqh1withimg = document.querySelector('.faqh1withimg');
var faqkaphaiyeisiliyep1 = document.querySelector('.faqkaphaiyeisiliyep1');
var faqkaphaiyeisiliyep2 = document.querySelector('.faqkaphaiyeisiliyep2');
var faqkaphaiyeisiliyep3 = document.querySelector('.faqkaphaiyeisiliyep3');
var faqkaphaiyeisiliyep4 = document.querySelector('.faqkaphaiyeisiliyep4');
var faqkaphaiyeisiliyep5 = document.querySelector('.faqkaphaiyeisiliyep5');
var faqkaphaiyeisiliyep6 = document.querySelector('.faqkaphaiyeisiliyep6');
var faqImage1 = document.querySelector('.faqImage1');
var faqImage2 = document.querySelector('.faqImage2');
var faqImage3 = document.querySelector('.faqImage3');
var faqImage4 = document.querySelector('.faqImage4');
var faqImage5 = document.querySelector('.faqImage5');
var faqImage6 = document.querySelector('.faqImage6');
let signInButton = document.querySelector('.sign_inButton')
var verifyGmailBelow = document.querySelector('.verifyGmailBelow');
var email;
var savingDataInsideEmailonRefresh = localStorage.getItem('emailhaiForSave');
var savedDatafromLoginPage = localStorage.getItem('valuehaiSavekariHuihasNai');
let loginButtonAfterSignin = document.querySelector('.loginButtonAfterSignin');
let loginButtonAfterSigninBelow = document.querySelector('.loginButtonAfterSigninBelow');
let lkzbgsdjbsdljbsdkjb = document.querySelector('.lkzbgsdjbsdljbsdkjb');
let majehimaje = document.querySelector('.majehimaje');
console.log(savedDatafromLoginPage);
abdekhkitnaAachaLagegaBhai();

function ksjdbgdjvbsjb(){
    $('.verifyGmail').css('display', 'flex');
            $('.verifyGmailBelow').css('display', 'flex');
            lkzbgsdjbsdljbsdkjb.classList.toggle('majehimaje');
            $('.toanimateAfterLogin').css('display', 'block');
            $('.beforepage3').css('display', 'block');
            $('.loginButtonAfterSignin').css('display', 'none');
            $('.loginButtonAfterSigninBelow').css('display', 'none');
            signInButton.innerText = 'Sign In';
            $('.sign_inButton').css('color', 'white');
}

// localStorage.getItem('valuehaiSavekariHuihasNai');
signInButton.addEventListener('click', ()=>{
    if(signInButton.innerText == 'Sign Out'){
        valuehaiSavekariHuihasNai = false;
        lkzbgsdjbsdljbsdkjb.classList.toggle('majehimaje');
        setTimeout(ksjdbgdjvbsjb, 2000);
    } else if(signInButton.innerText == 'Sign In'){
        openLink();
    }
})
function openLinkAfterLoggingInWala() {
    var urlHaiDhyan = "https://www.netflix.com/signup/planform";
    window.location.href = (urlHaiDhyan);
}

loginButtonAfterSignin.addEventListener('click', ()=>{
    openLinkAfterLoggingInWala();
})
loginButtonAfterSigninBelow.addEventListener('click', ()=>{
    openLinkAfterLoggingInWala();
})


function abdekhkitnaAachaLagegaBhai(){
    if(savedDatafromLoginPage == 'true'){
        $('.verifyGmail').css('display', 'none');
        $('.verifyGmailBelow').css('display', 'none');
        $('.toanimateAfterLogin').css('display', 'none');
        $('.beforepage3').css('display', 'none');
        $('.loginButtonAfterSignin').css('display', 'block');
        $('.loginButtonAfterSigninBelow').css('display', 'block');
        signInButton.innerText = 'Sign Out';
        $('.sign_inButton').css('color', 'white');
    }
}





savingData();
openAndCloseWalagame();
function savingData(){
    if(typingEmail.value == ''){
        typingEmailBelow.style.borderColor = 'none';    
        gsap.to(".beforeEmailBelow",{
            duration: 0.1,
            fontSize: '17px',
            y:0,
            x:5,
            function(){
                typingEmail.blur();
            }
        })
        typingEmail.style.borderColor = 'none';    
        gsap.to(".beforeEmail",{
            duration: 0.1,
            fontSize: '17px',
            y:0,
            x:5,
            function(){
                typingEmail.blur();
            }
        })
    }
    typingEmail.value = savingDataInsideEmailonRefresh;
    typingEmailBelow.value = savingDataInsideEmailonRefresh;
    typingEmailBelow.style.borderColor = 'green';
    gsap.to(".beforeEmailBelow",{
        duration: 0.1,
        fontSize: '13px',
        y:-10,
        x:-5,
        function(){
            typingEmail.focus();
        }
    })
    typingEmail.style.borderColor = 'green';
    gsap.to(".beforeEmail",{
        duration: 0.1,
        fontSize: '13px',
        y:-10,
        x:-5,
        function(){
            typingEmail.focus();
        }
    })
}


function openLink() {
    var url = "./signin..html";
    window.location.href = (url);
}
function openLinkBelow() {
    var url = "./signin..html";
    window.location.href = (url);
}
function getStartedback(){
    emailVeriySwitch.innerText = 'Get Started >';
}
function getStartedbackBelow(){
    emailVeriySwitchBelow.innerText = 'Get Started >';
}


typingEmail.addEventListener('focus', ()=>{
    gsap.to(".beforeEmail",{
        duration: 0.1,
        fontSize: '13px',
        y:-10,
        x:-5,
    })
})
typingEmail.addEventListener('blur', ()=>{
    if(typingEmail.value.trim() !== ''){
        gsap.to(".beforeEmail",{
            duration: 0.19,
            y:-10,
            x:-5,
            fontSize: '13px',
        })  
    } else{
        gsap.to(".beforeEmail",{
            duration: 0.19,
            y:0,
            x:0,
            fontSize: '17px',
        })
    }
})
typingEmailBelow.addEventListener('focus', ()=>{
    gsap.to(".beforeEmailBelow",{
        duration: 0.1,
        fontSize: '13px',
        y:-10,
        x:-5,
    })
})
typingEmailBelow.addEventListener('blur', ()=>{
    if(typingEmailBelow.value.trim() !== ''){
        gsap.to(".beforeEmailBelow",{
            duration: 0.19,
            y:-10,
            x:-5,
            fontSize: '13px',
        })  
    } else{
        gsap.to(".beforeEmailBelow",{
            duration: 0.19,
            y:0,
            x:5,
            fontSize: '17px',
        })
    }
})


// All Events Performing For Email Verify Button As (Get Started).
emailVeriySwitch.addEventListener('click', ()=>{
    if(typingEmail.value == ''){
        $('#typingEmail').css('border-color', 'red');
        $('#mailAlert').css('display', 'block');
        $('#mailAlertImg').css('display', 'block');
        $('#mailAlertImg2').css('display', 'none');
        $('#typingEmail').css('mailAlert2', 'none');
    } else if(email == true){
        setTimeout(openLink, 2000);
        setTimeout(getStartedback, 4000);
        emailVeriySwitch.innerText = '';
        localStorage.setItem('emailhaiForSave', typingEmail.value);
        $('#emailVeriySwitch').css('background-color', 'rgb(123 0 0 / 49%)');
        verifyGmail.classList.toggle('verifyGmailAnimation');
    } else{
        $('#typingEmail').css('border-color', 'none');
        $('#mailAlert').css('display', 'none');
        $('#mailAlertImg').css('display', 'none');
        $('#emailVeriySwitch').css('border-color', 'green');
    }
    
    window.scrollTo(0, 100);
});



// This is the event listener for button in email next
emailVeriySwitchBelow.addEventListener('click', ()=>{
    if(typingEmailBelow.value == ''){
        $('#mailAlertImgBelow').css('display', 'block');
        $('#mailAlertBelow').css('display', 'block');
        $('#mailAlert2').css('display', 'none');
        $('#mailAlertImg2').css('display', 'none');
        $('#typingEmailBelow').css('border-color', 'red');
    } else if(email == true){
        setTimeout(openLinkBelow, 2000);
        setTimeout(getStartedbackBelow, 4000);
        emailVeriySwitchBelow.innerText = '';
        $('#emailVeriySwitchBelow').css('background-color', 'rgb(123 0 0 / 49%)');
        verifyGmailBelow.classList.toggle('makinganAnimation');
    }  else{
        $('#mailAlertImgBelow').css('display', 'none');
        $('#mailAlertBelow').css('border-color', 'none');
        $('#typingEmailBelow').css('border-color', 'none');
    }
});


// This is the function to check the written email is correct or not || To check the format of email for email available in main page
typingEmail.addEventListener('input', ()=>{
    if(!typingEmail.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        $('#typingEmail').css('border-color', 'red');
        $('#mailAlert').css('display', 'none');
        $('#mailAlert2').css('display', 'block');
        $('#mailAlertImg').css('display', 'none');
        $('#mailAlertImg2').css('display', 'block');
    } else{
        $('#typingEmail').css('border-color', 'green');
        $('#mailAlert2').css('display', 'none');
        $('#mailAlertImg2').css('display', 'none');
        email = true;
    }
});


// This is the function to check the written email is correct or not || To check the format of email for email available in footer
typingEmailBelow.addEventListener('input', ()=>{
    if(!typingEmailBelow.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        $('#typingEmailBelow').css('border-color', 'red');
        $('#mailAlertBelow').css('display', 'none');
        $('#mailAlert2Below').css('display', 'block');
        $('#mailAlertImgBelow').css('display', 'none');
        $('#mailAlertImg2Below').css('display', 'block');
    } else{
        $('#typingEmailBelow').css('border-color', 'green');
        $('#mailAlert2Below').css('display', 'none');
        $('#mailAlertImg2Below').css('display', 'none');
        email = true;
    }
});


// This Function Runs When You Click On Phone Number
call.addEventListener('click', ()=>{
    alert(`Open Whatsapp?\n https://www.netflix.com wants to open this application.`)
});


// This eventListener Is Used For Language Picker
insideLanguage.addEventListener('mouseover', ()=>{
    if(selectLanguageClass.style.display = 'none'){
        selectLanguageClass.style.display = 'flex';
    }
});
document.body.addEventListener('click',()=>{
    if(selectLanguageClass.style.display = 'flex'){
        selectLanguageClass.style.display = 'none';
    }
});
insideLanguageBelow.addEventListener('mouseover', ()=>{
    if(selectLanguageClassBelow.style.display = 'none'){
        selectLanguageClassBelow.style.display = 'flex';
    }
});
document.body.addEventListener('click',()=>{
    if(selectLanguageClassBelow.style.display = 'flex'){
        selectLanguageClassBelow.style.display = 'none';
    }
});






function openAndCloseWalagame(){
    faq1hai.addEventListener('click', ()=>{
        openandclose1();
    })
    faq2hai.addEventListener('click', ()=>{
        openandclose2();
    })
    faq3hai.addEventListener('click', ()=>{
        openandclose3();
    })
    faq4hai.addEventListener('click', ()=>{
        openandclose4();
    })
    faq5hai.addEventListener('click', ()=>{
        openandclose5();
    })
    faq6hai.addEventListener('click', ()=>{
        openandclose6();
    })

let closed = document.querySelector('.closed');
let opened = document.querySelector('.opened');
const contentHeight1 = faqkaphaiyeisiliyep1.scrollHeight;
const contentHeight2 = faqkaphaiyeisiliyep2.scrollHeight;
const contentHeight3 = faqkaphaiyeisiliyep3.scrollHeight;
const contentHeight4 = faqkaphaiyeisiliyep4.scrollHeight;
const contentHeight5 = faqkaphaiyeisiliyep5.scrollHeight;
const contentHeight6 = faqkaphaiyeisiliyep6.scrollHeight;
let isOpen1 = false;
let isOpen2 = false;
let isOpen3 = false;
let isOpen4 = false;
let isOpen5 = false;
let isOpen6 = false;
function openBox1() {
        gsap.fromTo('.faqkaphaiyeisiliyep1', {
            height: '0px',
            padding: '0px 25px 0px 25px',
            opacity: 0,
         }, {
            height: '250px',
            padding: '25px 25px 25px 25px',
            duration: 0.055,
            ease: "power2.out",
            opacity: 1,
         });
        gsap.to('.faqImage1',{
            rotate: '45deg',
            duration: 0.05,
        })
        isOpen1 = true;
    }
            function closeBox1() {
                    gsap.to('.faqkaphaiyeisiliyep1', {
                        duration: 0.1,
                        height: '0px',
                        padding: '0px 25px 0px 25px',
                        ease: "power2.out",
                        onComplete: function() {
                        isOpen1 = false;
                    }
                });
                gsap.to('.faqImage1',{
                    rotate: '0deg',
                    duration: 0.05,
                })
                }
    
    function openBox2() {
        gsap.fromTo('.faqkaphaiyeisiliyep2', {
            height: '0px',
            padding: '0px 25px 0px 25px',
            opacity: 0,
        }, {
            height: '125px',
            padding: '25px 25px 25px 25px',
            duration: 0.1,
            ease: "power2.out",
            opacity: 1,
        });
         gsap.to('.faqImage2',{
            rotate: '45deg',
            duration: 0.05,
        })
        isOpen2 = true;
    }
            function closeBox2() {
                    gsap.to('.faqkaphaiyeisiliyep2', {
                        duration: 0.1,
                        height: '0px',
                        padding: '0px 25px 0px 25px',
                        ease: "power2.out",
                        onComplete: function() {
                            isOpen2 = false;
                        }
                    });
                gsap.to('.faqImage2',{
                    rotate: '0deg',
                    duration: 0.05,
                })
                }
    
    function openBox3() {
        gsap.fromTo('.faqkaphaiyeisiliyep3', {
            height: '0px',
            padding: '0px 25px 0px 25px',
            opacity: 0,
         }, {
            height: '295px',
            padding: '25px 25px 25px 25px',
            duration: 0.055,
            ease: "power2.out",
            opacity: 1,
         });
         gsap.to('.faqImage3',{
            rotate: '45deg',
            duration: 0.05,
        })
        isOpen3 = true;
    }
            function closeBox3() {
                    gsap.to('.faqkaphaiyeisiliyep3', {
                        duration: 0.1,
                        height: '0px',
                        padding: '0px 25px 0px 25px',
                        ease: "power2.out",
                        onComplete: function() {
                        isOpen3 = false;
                    }
                });
                gsap.to('.faqImage3',{
                    rotate: '0deg',
                    duration: 0.05,
                })
                }
    
    function openBox4() {
        gsap.fromTo('.faqkaphaiyeisiliyep4', {
            height: '0px',
            padding: '0px 25px 0px 25px',
            opacity: 0,
        }, {
            height: '130px',
            padding: '25px 25px 25px 25px',
            duration: 0.055,
            ease: "power2.out",
            opacity: 1,
        });
         gsap.to('.faqImage4',{
            rotate: '45deg',
            duration: 0.05,
        })
        isOpen4 = true;
    }
            function closeBox4() {
                    gsap.to('.faqkaphaiyeisiliyep4', {
                        duration: 0.1,
                        height: '0px',
                        padding: '0px 25px 0px 25px',
                        ease: "power2.out",
                        onComplete: function() {
                        isOpen4 = false;
                    }
                });
                gsap.to('.faqImage4',{
                    rotate: '0deg',
                    duration: 0.05,
                })
                }
    
    function openBox5() {
        gsap.fromTo('.faqkaphaiyeisiliyep5', {
            height: '0px',
            padding: '0px 25px 0px 25px',
            opacity: 0,
         }, {
             height: '130px',
            padding: '25px 25px 25px 25px',
            duration: 0.055,
            ease: "power2.out",
            opacity: 1,
        });
         gsap.to('.faqImage5',{
            rotate: '45deg',
            duration: 0.05,
        })
        isOpen5 = true;
    }
            function closeBox5() {
                    gsap.to('.faqkaphaiyeisiliyep5', {
                        duration: 0.1,
                        height: '0px',
                        padding: '0px 25px 0px 25px',
                        ease: "power2.out",
                        onComplete: function() {
                        isOpen5 = false;
                    }
                });
                gsap.to('.faqImage5',{
                    rotate: '0deg',
                    duration: 0.05,
                })
                }
    function openBox6() {
        gsap.fromTo('.faqkaphaiyeisiliyep6', {
            height: '0px',
            padding: '0px 25px 0px 25px',
            opacity: 0,
         }, {
             height: '240px',
            padding: '25px 25px 25px 25px',
            duration: 0.055,
            ease: "power2.out",
            opacity: 1,
         });
         gsap.to('.faqImage6',{
            rotate: '45deg',
            duration: 0.05,
        })
        isOpen6 = true;
    }
            function closeBox6() {
                    gsap.to('.faqkaphaiyeisiliyep6', {
                        duration: 0.1,
                        height: '0px',
                        padding: '0px 25px 0px 25px',
                        ease: "power2.out",
                        onComplete: function() {
                        isOpen6 = false;
                    }
                });
                gsap.to('.faqImage6',{
                    rotate: '0deg',
                    duration: 0.05,
                })
                }                
                
// Event listener for button click
function openandclose1() {
    if (!isOpen1) {
        openBox1();
        closeBox2();
        closeBox3();
        closeBox4();
        closeBox5();
        closeBox6();
      } else {
        closeBox1();
    }
}
function openandclose2() {
    if (!isOpen2) {
        openBox2();
        closeBox1();
        closeBox3();
        closeBox4();
        closeBox5();
        closeBox6();
    } else {
        closeBox2();
    }
}
function openandclose3() {
    if (!isOpen3) {
        openBox3();
        closeBox1();
        closeBox2();
        closeBox4();
        closeBox5();
        closeBox6();
    } else {
        closeBox3();
    }
}
function openandclose4() {
    if (!isOpen4) {
        openBox4();
        closeBox1();
        closeBox2();
        closeBox3();
        closeBox5();
        closeBox6();
    } else {
        closeBox4();
    }
}
function openandclose5() {
    if (!isOpen5) {
        openBox5();
        closeBox1();
        closeBox2();
        closeBox3();
        closeBox4();
        closeBox6();
    } else {
        closeBox5();
    }
}
function openandclose6() {
    if (!isOpen6) {
        openBox6();
        closeBox1();
        closeBox2();
        closeBox3();
        closeBox4();
        closeBox5();
    } else {
        closeBox6();
    }
};
}   
