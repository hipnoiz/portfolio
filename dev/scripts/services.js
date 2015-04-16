$( "#services a" ).click(function(e) {
	e.preventDefault()
  $(this).parent().children(".text").slideToggle( "slow", function(e) {

   	 ($(this).parent().children("#services a").text() === "rozwiń \u02C5") ? $(this).parent().children("#services a").text("zwiń \u02C4") : $(this).parent().children("#services a").text("rozwiń \u02C5");
  });
});