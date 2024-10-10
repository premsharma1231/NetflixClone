let insideLanguageHindi = document.querySelector('.insideLanguageHindi');
let insideLanguageHindiBelow = document.querySelector('.insideLanguageHindiBelow');


insideLanguageHindi.addEventListener('mouseover', ()=>{
    if(selectLanguageClassHindi.style.display = 'none'){
        selectLanguageClassHindi.style.display = 'flex';
    }
});
document.body.addEventListener('click',()=>{
    if(selectLanguageClassHindi.style.display = 'flex'){
        selectLanguageClassHindi.style.display = 'none';
    }
});
insideLanguageHindiBelow.addEventListener('mouseover', ()=>{
    if(selectLanguageClassHindiBelow.style.display = 'none'){
        selectLanguageClassHindiBelow.style.display = 'flex';
    }
});
document.body.addEventListener('click',()=>{
    if(selectLanguageClassHindiBelow.style.display = 'flex'){
        selectLanguageClassHindiBelow.style.display = 'none';
    }
});