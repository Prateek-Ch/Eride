var scrollTop = $("body").scrollTop(),
elementOffset = $('.romana_donation_area').offset().top,
distance      = (elementOffset - scrollTop);

if(scrollTop > distance+600){
	$(".bot").fadeIn();
}else{
	$(".bot").fadeOut();
}

$("body").on("scroll", function(){
	var scrollTop1 = $("body").scrollTop(),
	elementOffset1 = $('.romana_donation_area').offset().top,
	distance1      = (elementOffset1 - scrollTop1);
	if(distance1+600 < 0){
		$(".bot").fadeIn(750);
	}else{
		$(".bot").fadeOut(750);
	}
});

$(".bot").on("click", function(){
	$("body").animate({scrollTop: '0px'});
});

$(".poping i").on("click", function(){
	$(".poping").slideUp();
});

$(".poping").slideDown(1500);

$(".zoros input").on("click", function(){
	$(".poping").slideUp();
	if($("input[name='email']").val().length > 0){
		$.post("signupsql.php", {
			email: $("input[name='email']").val()
		}, function(data, status){
			switch(data){
				case "1":
					alert("Subscription successfull.");
					break;
				default:
					alert("Something went wrong. Try again later.");
					break;
			}
		});
	}else{
		alert("Please type your email id.");
	}
});