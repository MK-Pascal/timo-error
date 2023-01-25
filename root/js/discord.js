const axios = require('axios'); //make sure you have this library installed
const webhookUrl = 'https://discord.com/api/webhooks/1066856242213027850/otDpfNj0uiF0joka8bmS3lnTgzKKaKrleHLk-p55SqXwUeqSvRUiRMuw4QUUwHuimnGN'; //replace with your webhook url

const form = document.getElementById('myForm');
form.addEventListener('submit', sendMessage);

function sendMessage(event) {
  event.preventDefault();
  const message = document.getElementById('message').value;
  axios.post(webhookUrl, { content: message })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}


