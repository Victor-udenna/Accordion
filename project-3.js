// Variable

const accordion = document.getElementsByClassName('content-container');
// calls accordion...add event listener

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
  })  
};
// loops trough the contents