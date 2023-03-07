const mainUrl = 'http://localhost:8080/http://localhost:3000/'
const Form = document.getElementById('form');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const TEL_REGEXP = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;

function createMessage (text) {
  const messageBlock = document.querySelector('#messageBlock');

  while (messageBlock.firstChild) {
    messageBlock.removeChild(messageBlock.firstChild);
  }

  let div = document.createElement('div');

  div.className = 'wrap';
  div.innerHTML = `<h1>${text}</h1>`;  
  messageBlock.append(div);
}

async function handleFormSubmit(event) {
  event.preventDefault();
  let breakCondition = false;
  const data = new FormData(Form);
  Array.from(data.entries()).forEach(item => {
    const [name, value] = item;

    if(!value || !value.trim().length) {
      createMessage('Заполните все поля');
      condition = true;
    }

    if(name === 'email' && !validation(EMAIL_REGEXP, value)) {
      createMessage('Введите валидный email, пример: example@gmail.com')
      condition = true;
    }
    if(name === 'tel' && !validation(TEL_REGEXP, value)) {
      createMessage('Введите валидный номер телефона, пример: +7-999-999-99-99')
      condition = true;
    }


  });
  if(breakCondition) {
    return;
  }
  const response = await sendData(data);
  
  if(response.status === 200) {
      createMessage('Данные отправленны успешно');
  } else {
      createMessage('Что-то пошло не так')
  }
}

async function sendData(data) {
  return await fetch(mainUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  })
}

function validation(regexp, value) {
  return regexp.test(value);
}

Form.addEventListener('submit', handleFormSubmit)