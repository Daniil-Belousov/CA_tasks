document.querySelector("#btn").onclick = function(){
  document.querySelectorAll(".currentItem").length && document.querySelector(".currentItem").classList.remove('currentItem');
  
  const items = document.querySelectorAll('.item');
  const random = Math.round(Math.random() * (items.length - 1 - 0) + 0);
  items[random].classList.add('currentItem');
}