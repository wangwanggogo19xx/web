$(function () {
	$(".nav>li").on('click',  function(event) {
		$(".nav>li").removeClass('active');
		$(this).addClass('active');
		$(".content").addClass('hidden');
		id = "#archives_"+$(this).attr('id') + "_content";
		$(id).removeClass('hidden');
	});

})