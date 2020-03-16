const MENU = document.getElementById('navigation');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const MENU_PORTFOLIO = document.getElementById('portfolio-navigation');
const ART_COLLECTION_IMGS = document.getElementsByClassName('art-colletion-img');


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

MENU_PORTFOLIO.addEventListener('click', function sort() {
   // ART_COLLECTION_IMGS.forEach((element, index) => {
   //    changePosition(index, randomOneTwe(), ART_COLLECTION_IMGS)
   // });
   abs(ART_COLLECTION_IMGS)
   
 });

function abs (element, index) {
   return changePosition(index, randomOneTwe(), ART_COLLECTION_IMGS);
}

function randomOneTwe(){
   Math.ceil(Math.random()*12);
}

function changePosition(firstIndex, secondIndex, arr){
   const fElem = arr[firstIndex];
   const sElem = arr[secondIndex];
   arr[firstIndex] = sElem;
   arr[secondIndex] = fElem;
}

BUTTON.addEventListener('click', () => {
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
   document.getElementById('message-block').classList.add('hidden');
   document.getElementById('subj_result').innerText = '';
   document.getElementById('result_description').innerText = '';

});