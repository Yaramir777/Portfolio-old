const form = document.querySelector('.form-input');

form.addEventListener('submit', (event) => {

const nameIn = document.querySelector('#in-name');
const mail = document.querySelector('#in-mail');
const mess = document.querySelector('#message');

const oldMsg = form.querySelector('.form-msg')
if(oldMsg) oldMsg.remove()

if(!nameIn.value || !mail.value || !mess.value) {
    event.preventDefault();
    const div = document.createElement('div');
    div.classList.add('form-msg', 'form-msg-error');
    div.textContent = 'Заполните поля для отправки';
    form.appendChild(div);
    return;
    }
});

if (window.location.search.includes('success=1')) {
    const div2 = document.createElement('div');
    div2.classList.add('form-msg', 'form-msg-success')
    div2.textContent = 'Сообщение отправлено';
    form.appendChild(div2);
    nameIn.value = '';
    mail.value = '';
    mess.value = '';
}