$(".bc").on('click',function(){
	var clk = $(this).data("target");
	if($("#complete" + clk).is(':hidden')){
		$(this).text("view less...");
	}else{
		$(this).text("view more...");
	}
	$("#complete" + clk).slideToggle();
});