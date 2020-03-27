// header
const MENU = document.getElementById('navigation');
const MENU_BURGER = document.getElementById('burger-list');
const BURGER_BUTTON = document.getElementById('hamburger');
const BURGER_BUTTON_CLOSE = document.getElementById('Burger-menu-icon-rotate');
// slider
const CHANGE_PHONE_DISPLAY = document.getElementById('slider-iphone-left');
const CHANGE_PHONE_DISPLAY_HORIZ = document.getElementById('slider-iphone-right');
const BLACK_BACKGROUND_PHONE = document.getElementById('black-background');
const BLACK_BACKGROUND_PHONE_HORIZ = document.getElementById('black-background-horizontal');
// portfolio
const MENU_PORTFOLIO = document.getElementById('portfolio-navigation');
const ART_COLLECTION_IMGS = document.getElementsByClassName('art-colletion-img');
const ART_COLLECTION_ACTIVE = document.getElementById('art-colletion');
// form
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
   MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation-active'));
   event.target.classList.add('navigation-active');
});

MENU_BURGER.addEventListener('click', (event) => {
   MENU_BURGER.querySelectorAll('a').forEach(el => el.classList.remove('navigation-active'));
   event.target.classList.add('navigation-active');
   document.getElementById('hamburger-menu').style.display = 'none';
});

BURGER_BUTTON.addEventListener('click', () => {
   document.getElementById('hamburger-menu').style.display = 'flex';
   document.getElementById('Burger-menu-icon-rotate').style = 'transform:rotate(90deg)';
});

BURGER_BUTTON_CLOSE.addEventListener('click', () => {
   document.getElementById('hamburger-menu').style.display = 'none';
});


function changeSlideRigth(){
   const firstSlideStyle = document.getElementById("block-two-phone").style.display;
   if (firstSlideStyle != 'none') {
      document.getElementById("block-one-phone").style.background = "#648BF0";
      document.getElementById("block-one-phone").style.display = "flex";
      document.getElementById("block-two-phone").style.animation = "leaveRight 1s forwards";
      document.getElementById("block-one-phone").style.animation = "comeRight 1s forwards";
      setTimeout(() => {document.getElementById("block-two-phone").style.display = "none"}, 10);
   };
   if (firstSlideStyle == 'none') {
      
      document.getElementById("block-one-phone").style.display = "none";
      document.getElementById("block-two-phone").style.animation = "comeRight 1s forwards";
      document.getElementById("block-one-phone").style.animation = "leaveRight 1s forwards";
      setTimeout(() => {document.getElementById("block-two-phone").style.display = "flex"}, 10);
   };
};

function changeSlideLeft(){
   const firstSlideStyle = document.getElementById("block-two-phone").style.display;
   if (firstSlideStyle != 'none') {
      document.getElementById("block-one-phone").style.background = "#648BF0";
      document.getElementById("block-one-phone").style.display = "flex";
      document.getElementById("block-two-phone").style.animation = "leaveLeft 1s forwards";
      document.getElementById("block-one-phone").style.animation = "comeLeft 1s forwards";
      setTimeout(() => {document.getElementById("block-two-phone").style.display = "none"}, 10);
   };
   if (firstSlideStyle == 'none') {
      document.getElementById("block-one-phone").style.display = "none";
      document.getElementById("block-two-phone").style.animation = "comeLeft 1s forwards";
      document.getElementById("block-one-phone").style.animation = "leaveLeft 1s forwards";
      setTimeout(() => {document.getElementById("block-two-phone").style.display = "flex"}, 10);
   };
};

CHANGE_PHONE_DISPLAY.addEventListener('click', () => {
   document.getElementById('black-background').style.display = "inline";
});

CHANGE_PHONE_DISPLAY_HORIZ.addEventListener('click', () => {
   document.getElementById('black-background-horizontal').style.display = "inline";
});

BLACK_BACKGROUND_PHONE.addEventListener('click', () => {
   document.getElementById('black-background').style.display = "none";
});

BLACK_BACKGROUND_PHONE_HORIZ.addEventListener('click', () => {
   document.getElementById('black-background-horizontal').style.display = "none";
});

MENU_PORTFOLIO.addEventListener('click', (event) => {
   MENU_PORTFOLIO.querySelectorAll('a').forEach(el => el.classList.remove('button-active'));
   event.target.classList.add('button-active');
});

ART_COLLECTION_ACTIVE.addEventListener('click', (event) => {
   ART_COLLECTION_ACTIVE.querySelectorAll('img').forEach(e => {
      e.classList.remove('art-colleting-active')});
   event.target.classList.add('art-colleting-active');
});

MENU_PORTFOLIO.addEventListener('click', function sort() {
   for (let i = 0; i < ART_COLLECTION_IMGS.length - 1; i++ ){
     changePosition(i , randomOneTwe(), ART_COLLECTION_IMGS);
   };
});

function randomOneTwe(){
   return Math.round((Math.random()*11));
};

function changePosition(firstIndex, secondIndex, arr){
   const fElem = arr[firstIndex].innerHTML;
   const sElem = arr[secondIndex].innerHTML;
   arr[firstIndex].innerHTML = sElem;
   arr[secondIndex].innerHTML = fElem;
   return;
};

BUTTON.addEventListener('click', (event) => {
   event.preventDefault();
   const name = document.getElementById('name_req').value.toString();
   const mail = document.getElementById('mail_req').value.toString();
   const subject = document.getElementById('subj_req').value.toString();
   const subjectDescription = document.getElementById('subj_description').value.toString();
   if (mail !== '' && mail.includes('@')) {
      if (subject === ''){
         document.getElementById('subj_result').innerText = "Без темы";
      } else {
         document.getElementById('subj_result').innerText = subject; 
      }
      if (subjectDescription === ''){
         document.getElementById('result_description').innerText = 'Без описания';
      } else {
         document.getElementById('result_description').innerText = subjectDescription; 
      }
      document.getElementById('message-block').classList.remove('hidden');
   } 

});

CLOSE_BUTTON.addEventListener('click', (event) => {
   event.preventDefault();
   document.getElementById('message-block').classList.add('hidden');
   document.getElementById('subj_result').innerText = '';
   document.getElementById('result_description').innerText = '';

});