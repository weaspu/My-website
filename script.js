function changeNavBg(){
    let navigation = document.getElementById('navigation');
    let scrollValue =window.scrollY;
    if(scrollValue < 10){
        navigation.classList.remove('navBg');
    }else{
        navigation.classList.add('navBg');
    }
}

window.addEventListener('scroll', changeNavBg);