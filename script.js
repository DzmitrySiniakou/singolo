const MENU = document.getElementById('navigation');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

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



BUTTON.addEventListener('click', () => {
   const subject = document.getElementById('name_req').value.toString();
   // const subject = document.getElementById('mail_req').value.toString();
   // const subject = document.getElementById('subj_req').value.toString();
   document.getElementById('result').innerText = subject;
   document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
   document.getElementById('result').innerText = '';
   document.getElementById('message-block').classList.add('hidden');
});