$(document).ready(function() {
    $('#comingNo').click(function() {
        $('#yesForm').addClass('hide');
        $('#regretsForm').removeClass('hide');
    });
    $('#comingYes').click(function() {
        $('#regretsForm').addClass('hide');
        $('#yesForm').removeClass('hide');
    });
    $('#numberOfGuests').keyup(function() {
        var newVal = $('#numberOfGuests').val();
        var guestInputs = $('.guest_name');
        for (var i = newVal - 1; i >= 0; i--) {
            $(guestInputs[i]).removeClass('hide');
        };
        for (var i = guestInputs.length - 1; i >= newVal; i--) {
            $(guestInputs[i]).addClass('hide');
        }
    });
});