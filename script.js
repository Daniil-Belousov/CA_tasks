document.querySelector('#first').onclick = function(){
  document.querySelector('#text').classList.remove('secondOption', 'thirdOption');
  document.querySelector('#text').classList.add('firstOption');
}

document.querySelector('#second').onclick = function(){
  document.querySelector('#text').classList.remove('firstOption', 'thirdOption');
  document.querySelector('#text').classList.add('secondOption');
}

document.querySelector('#third').onclick = function(){
  document.querySelector('#text').classList.remove('firstOption', 'secondOption');
  document.querySelector('#text').classList.add('thirdOption');
}