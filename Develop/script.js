
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
    var saveTask = {
        time: taskTime,
        text: taskText
    }

    var storeTask = JSON.parse(localStorage.getItem("tasks")) || [];

    storeTask.push(saveTask);
    localStorage.setItem("tasks", JSON.stringify(storeTask));
}

setCurrentDay();

// Prime Time Slots
$(".row").each(function(index, el) {
    auditTime(el)
})

// Refresh time slots at intervals
setInterval(function() {
    $(".row").each(function(index, el) {
        auditTime(el);
    });
}, 60 * 1000);