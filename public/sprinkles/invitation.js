$(document).ready(function() {
    $('#comingNo').click(function() {
        $('#yesForm').addClass('hide');
        $('#regretsForm').removeClass('hide');
    });
    $('#comingYes').click(function() {
        $('#regretsForm').addClass('hide');
        $('#yesForm').removeClass('hide');
    });
    $('#numberOfGuests').bind('keyup mouseup mousewheel', function() {
        var newVal = $('#numberOfGuests').val();
        if (newVal) {
            $('#guestNames').removeClass('hide');
        } else {
            $('#guestNames').addClass('hide');
        }
        var guestInputs = $('.guest_name');
        for (var i = newVal - 1; i >= 0; i--) {
            $(guestInputs[i]).removeClass('hide');
        };
        for (var i = guestInputs.length - 1; i >= newVal; i--) {
            $(guestInputs[i]).addClass('hide');
        }
    });
    $("input[type='radio'][name='StayingAtCS']").change(function() {
        var selected = $("input[type='radio'][name='StayingAtCS']:checked");
        var currentVal = selected.val();
        if (currentVal === 'StayingAtCS_Yes') {
            $('#lodgingPrefs').removeClass('hide');
        } else {
            $('#lodgingPrefs').addClass('hide');
        }
    });
});