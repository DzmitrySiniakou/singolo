const MENU = document.getElementById('navigation');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const MENU_PORTFOLIO = document.getElementById('portfolio-navigation');
const ART_COLLECTION_IMGS = document.getElementsByClassName('art-colletion-img');
const ART_COLLECTION_ACTIVE = document.getElementById('art-colletion');


MENU.addEventListener('click', (event) => {
   MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation-active'));
   event.target.classList.add('navigation-active');
});

function changeSlide(id){
   document.getElementById((id == "block-one-phone") ? "block-two-phone": "block-one-phone").style.display = "none";
   document.getElementById((id == "block-one-phone") ? "block-one-phone": "block-two-phone").style.display = "flex";
   document.getElementById("block-one-phone").style.background = "#648BF0";
}

function blackPhone(){
   document.getElementById('black-background').style.display = "inline";
}

function blackPhoneHorizontal(){
   document.getElementById('black-background-horizontal').style.display = "inline";
}

MENU_PORTFOLIO.addEventListener('click', (event) => {
   MENU_PORTFOLIO.querySelectorAll('a').forEach(el => el.classList.remove('button-active'));
   event.target.classList.add('button-active');
});

ART_COLLECTION_ACTIVE.addEventListener('click', (event) => {
   ART_COLLECTION_ACTIVE.querySelectorAll('a').forEach(el => el.classList.remove('art-colleting-active'));
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
   const subject = document.getElementById('subj_req').value.toString();
   const subjectDescription = document.getElementById('subj_req').value.toString();
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
});

CLOSE_BUTTON.addEventListener('click', () => {
   event.preventDefault();
   document.getElementById('message-block').classList.add('hidden');
   document.getElementById('subj_result').innerText = '';
   document.getElementById('result_description').innerText = '';

});