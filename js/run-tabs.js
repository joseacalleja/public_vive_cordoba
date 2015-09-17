$(document).ready(function () {

//TABS
	$('.tab-content').hide().first().show();
    $('.inner-nav li:first').addClass("active");

    $('.inner-nav a').on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass("active").siblings().removeClass("active");
        $($(this).attr('href')).show().siblings('.tab-content').hide();
		var currentTab = $(this).attr("href");
		if (currentTab == "#location")
		initialize();
    });

    var hash = $.trim( window.location.hash );
    if (hash) $('.inner-nav a[href$="'+hash+'"]').trigger('click');



});