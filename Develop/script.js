
var auditTime = function(textEl) {

    var time = $(textEl).find('.hour').text();
    var rowTime = moment(time, 'hA');

    $(textEl).removeClass('past present future');

    console.log(rowTime);
    console.log(moment().format('hA'));

    if (moment().isAfter(rowTime)) {
        $(textEl).addClass("past");
    } else if (moment().isSame(rowTime)) {
        $(textEl).addClass("present");
    } else {
        $(textEl).addClass("future");
    }
};





setInterval(function() {
    $(".row").each(function(index, el) {
        auditTime(el);
    });
}, 5000);