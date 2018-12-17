$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$(function() {
$(".b1").click(function() {
    $(".krasnal, .dama, .wyznawca, .kaktus").hide();
    $(".pannica").show();
});
$(".b2").click(function() {
    $(".pannica, .dama, .wyznawca, .kaktus").hide();
    $(".krasnal").show();
});
$(".b1-1").click(function() {
    $(".pannica, .krasnal, .wyznawca, .kaktus").hide();
    $(".dama").show();
});
$(".b2-1").click(function() {
    $(".pannica, .krasnal, .dama, .kaktus").hide();
    $(".wyznawca").show();
});
$(".b1-2").click(function() {
    $(".pannica, .krasnal, .dama, .wyznawca").hide();
    $(".kaktus").show();
});
});
