
var setCurrentDay = function() {
    var dateText = moment().format('dddd, MMMM D, YYYY');    
    var dateEl = $('<p>').addClass('lead').text(dateText);

    $('#currentDay').append(dateEl);
}

var auditTime = function(textEl) {

    var time = $(textEl).find('.hour').text();
    var rowTime = moment(time, 'hA');
    var textBox = $(textEl).find('.time-block');

    $(textEl).removeClass('past present future');

    if (rowTime.isBefore(moment(moment().hour(), 'hA'))) {
        $(textBox).addClass("past");
    } else if (rowTime.isSame(moment(moment().hour(), 'hA'))) {
        $(textBox).addClass("present");
    } else {
        $(textBox).addClass("future");
    }
};

var loadData = function() {
    savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (!savedTasks) {
        return false;
    }

    for (var i = 0; i < savedTasks.length; i++) {
        populateData(savedTasks[i]);
    }
}

var populateData = function(saveTaskObj) {
    switch (saveTaskObj.time) {
        case "9AM":
            $('#text-9am').val(saveTaskObj.text);
            break;
        case "10AM":
            $('#text-10am').val(saveTaskObj.text);
            break;
        case "11AM":
            $('#text-11am').val(saveTaskObj.text);
            break;
        case "12PM":
            $('#text-12pm').val(saveTaskObj.text);
            break;
        case "1PM":
            $('#text-1pm').val(saveTaskObj.text);
            break;
        case "2PM":
            $('#text-2pm').val(saveTaskObj.text);
            break;
        case "3PM":
            $('#text-3pm').val(saveTaskObj.text);
            break;
        case "4PM":
            $('#text-4pm').val(saveTaskObj.text);
            break;
        case "5PM":
            $('#text-5pm').val(saveTaskObj.text);
            break;
        default:
            break;
    }
}

$(".container #save-9").click(function() {
    var taskTime = "9AM"
    var taskText = ($("#text-9am").val());
    savetext(taskTime, taskText);
})

$(".container #save-10").click(function() {
    var taskTime = "10AM"
    var taskText = ($("#text-10am").val());
    savetext(taskTime, taskText);
})

$(".container #save-11").click(function() {
    var taskTime = "11AM"
    var taskText = ($("#text-11am").val());
    savetext(taskTime, taskText);
})

$(".container #save-12").click(function() {
    var taskTime = "12PM"
    var taskText = ($("#text-12pm").val());
    savetext(taskTime, taskText);
})

$(".container #save-1").click(function() {
    var taskTime = "1PM"
    var taskText = ($("#text-1pm").val());
    savetext(taskTime, taskText);
})

$(".container #save-2").click(function() {
    var taskTime = "2PM"
    var taskText = ($("#text-2pm").val());
    savetext(taskTime, taskText);
})

$(".container #save-3").click(function() {
    var taskTime = "3PM"
    var taskText = ($("#text-3pm").val());
    savetext(taskTime, taskText);
})

$(".container #save-4").click(function() {
    var taskTime = "4PM"
    var taskText = ($("#text-4pm").val());
    savetext(taskTime, taskText);
})

$(".container #save-5").click(function() {
    var taskTime = "5PM"
    var taskText = ($("#text-5pm").val());
    savetext(taskTime, taskText);
})

var savetext = function(taskTime, taskText) {
    var saveTaskObj = {
        time: taskTime,
        text: taskText
    }

    var storeTask = JSON.parse(localStorage.getItem("tasks")) || [];

    storeTask.push(saveTaskObj);
    localStorage.setItem("tasks", JSON.stringify(storeTask));
}

// Set day in Jumbotron
setCurrentDay();

// Prime Time Slots
$(".row").each(function(index, el) {
    auditTime(el)
})

// Load and populate tasks from local storage
loadData();

// Refresh time slots at intervals
setInterval(function() {
    $(".row").each(function(index, el) {
        auditTime(el);
    });
}, 60 * 1000);