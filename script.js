const mainUrl = 'http://localhost:8080/http://localhost:3000/'

document.querySelector('#first').onclick = function(){
  const value = document.querySelector('#searchInput').value

  fetch(`${mainUrl}filtered_items?text=${value}`)
  .then(function (response) {
    response.json().then(function (data) {
      console.log('data.filteredItems',data.filteredItems);
      const filteredItems = data.filteredItems;
      const itemsWrapper = document.querySelector('.itemsWrapper')

      while (itemsWrapper.firstChild) {
        itemsWrapper.removeChild(itemsWrapper.firstChild);
      }

      filteredItems.forEach(item => {
        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<h1>${item.name}</h1>`;  
        itemsWrapper.append(div);
      })
    })
  })
};