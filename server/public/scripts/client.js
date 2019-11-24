$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $('#submit-btn').on('click', addTask);
    $('#task-output').on('click', '.remove-btn', deleteTask);
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
            let el = $(`<tr>
            <td>${task.task}</td>
            <td>${task.status}</td>
            <td><button class="complete-btn">Complete</button></td>
            <td><button class="remove-btn">Remove</button></td>
            `);
        el.data('id', task.id);
        target.append(el);
        }
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
        displayTasks();
    }).catch(function (error) {
        console.log(error);
        alert('ERROR adding task!!!!!!!!')
    })
}

function deleteTask() {
    const id = $(this).closest('tr').data('id');
    $.ajax({
        type: 'DELETE',
        url: '/delete/' + id,
    }).then(function(response){
        displayTasks();
    }).catch(function (error) {
        alert(`DIDN'T Delete!!!!!!`)
    })
}