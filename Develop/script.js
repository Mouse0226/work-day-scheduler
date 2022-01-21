
var setCurrentDay = function() {
    var dateText = moment().format('dddd, MMMM D, YYYY');    
    var dateEl = $('<p>').addClass('lead').text(dateText);

    $('#currentDay').append(dateEl);
}

var auditTime = function(textEl) {

    var time = $(textEl).find('.hour').text();
    var rowTime = moment(time, 'hA');
    var textBox = $(textEl).find('.description')

    $(textEl).removeClass('past present future');

    if (moment().isAfter(rowTime)) {
        $(textBox).addClass("past");
    } else if (moment().isSame(rowTime)) {
        $(textBox).addClass("present");
    } else {
        $(textBox).addClass("future");
    }
};

setCurrentDay();

setInterval(function() {
    $(".row").each(function(index, el) {
        auditTime(el);
    });
}, 5000);