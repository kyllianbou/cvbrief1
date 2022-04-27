function setMode(oEvent){
  document.body.classList.replace(aModes[Number(!this.checked)],aModes[Number(this.checked)]);
  localStorage.setItem('mode',aModes[Number(this.checked)]);
  this.parentNode.nextElementSibling.innerHTML = (this.checked)? "Dark mode":"White mode"
}

function loadMode(){
  let sMode = localStorage.getItem('mode');
  document.forms["mytheme"]["theme-mode"].checked = sMode == aModes[1];
  setMode.call(document.forms["mytheme"]["theme-mode"])
}
let aModes = ["mode-white", "mode-dark"];
document.addEventListener('DOMContentLoaded',function(){
  document.body.classList.add(aModes[0]);
  document.forms["mytheme"]["theme-mode"].addEventListener('click', setMode);
  loadMode()
});
/* Sélection des éléments HTML */
let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.querySelector('ul');
let nav = document.querySelector('nav');
let liens = document.querySelector('.liens');
/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open');
  ul.classList.toggle('open');
})