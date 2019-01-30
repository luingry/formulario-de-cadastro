$(function(){
	$(".side-menu").on("click", function(e){
		if ($(e.target).hasClass("side-menu-toggle") || $(e.target).parent().hasClass("side-menu-toggle")){
			$(".side-menu").toggleClass("side-menu-decreased")
		}
	})
})
