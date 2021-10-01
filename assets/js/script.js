window.setInterval(function () {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);


function timeSatus() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

$(".saveBtn").on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});

function getStoredData() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if(currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan);
        }
    });
}

timeSatus();
getStoredData();