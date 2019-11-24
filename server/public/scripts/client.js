$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $('#submit-btn').on('click', addTask);
    $('#task-output').on('click', '.remove-btn', deleteTask);
    $('#task-output').on('click', '.complete-btn', completeTask);
    displayTasks();
}

function displayTasks() {
    console.log('in displayTasks');
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
            if (task.status === 'Complete'){
                el.addClass('green');
            }
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
        $('#task-in').val('');
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

function completeTask() {
    let id = $(this).closest('tr').data('id');
    console.log(id);
    let status = $(this).closest('tr').children()[1].textContent;
    console.log(status);
    $.ajax({
        method: 'PUT',
        url: '/complete/' + id,
        data: {
            status: status
        }
    }).then(function(response){
        displayTasks();
    }).catch(function (error) {
        alert('ERROR completing task!!!!!!');
        console.log(error);
    })
}