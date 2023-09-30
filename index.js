document.querySelector('form').addEventListener('submit',myfunction)

var arrJob = JSON.parse(localStorage.getItem('appliedJob'))||[]
function myfunction(){
    event.preventDefault()

    var jobObj={
        name : document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        role : document.querySelector('#role').value,
        salary : document.querySelector('#salary').value,
    }

    arrJob.push(jobObj)

    localStorage.setItem('appliedJob',JSON.stringify(arrJob))
}
