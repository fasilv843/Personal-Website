const form = document.getElementById('submit-form');
const message = document.getElementById('message');
const messageErr = document.getElementById('message-validation');
const username= document.getElementById('name');
const nameErr= document.getElementById('name-validation');
const subject = document.getElementById('subject');
const subjectErr= document.getElementById('subject-validation');

form.addEventListener('submit', (e) => {
    
    if(username.value.trim() == ""){

        e.preventDefault();
        nameErr.innerHTML = "name cannot be blank";

    }else if(subject.value.trim() == ""){

        
        subjectErr.innerHTML = "subject cannot be blank";
        e.preventDefault();

    }else if(message.value.length <= 20 ){

        e.preventDefault();
        messageErr.innerHTML = "message must have atlest 20 characters";
       
    }
    else{
        return true;
    }

    
})