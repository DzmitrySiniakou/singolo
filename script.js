function changeSlide(id){
   document.getElementById((id == "block-one-phone") ? "block-two-phone": "block-one-phone").style.display = "none";
   document.getElementById((id == "block-one-phone") ? "block-one-phone": "block-two-phone").style.display = "flex";
   document.getElementById("block-one-phone").style.background = "#648BF0";
}
