const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
function background1(){
    document.querySelector('body').style.background = "url('./dwinanda-nurhanif-mujito-pKT5Mg16w_w-unsplash.jpg') center center / cover";
};
function background2(){
    document.querySelector('body').style.background = "url('./pantai bali.jpg') center center / cover";
}