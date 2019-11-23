$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $('#submit-btn').on('click', addTask);
    displayTasks();
}

function displayTasks() {
    console.log('in getTasks');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function(response){
    let target = $('#task-output');
    target.empty();
        for (let i = 0; i<response.length; i++) {
            let task = response[i];
            target.append(`<tr>
            <td>${task.task}</td>
            <td>${task.status}</td>
            <button class="complete-btn">Complete</button>
            <button class="remove-btn">Remove</button>
            `)}
        }).catch(function (error) {
            alert('ERROR getting tasks!!!!!!!!')
            console.log(error);
    })
}

function addTask() {
    console.log('in addTask');
    let objectToSend = {
        task: $('#task-in').val()
    }
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: objectToSend
    }).then(function (response) {
        
    }).catch(function (error) {
        console.log(error);
        alert('ERROR adding task!!!!!!!!')
    })
}