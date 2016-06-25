$(document).ready(function() {
    $('#comingNo').click(function() {
        $('#yesForm').addClass('hide');
        $('#regretsForm').removeClass('hide');
    });
    $('#comingYes').click(function() {
        $('#regretsForm').addClass('hide');
        $('#yesForm').removeClass('hide');
    });
});