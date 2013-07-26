//  // exercises 13 through 23
// $('h1');
// $('div');
// $('div')[0];
// $('.profilepic');
// $('.nav-items');
// $('#rufous-sandbox');
// $('*');
// $('.p-nickname');
// $('ol li:first');
// $('li:first');
// $('#twitter-widget-0').hide();
// $(".card").hide();
// $(".main").show();
// $("p").html('Are you kidding me?').append(' I am MakerSquare.');
// $("p").append("<p>Yup.</p>");
// $('#twitter-widget-0').remove();

// // number 24
// var blog =$(".nav-items > div:contains('Blog')");
// blog.remove();
// $('.nav').append(blog);

// // number 25
// $('.nav').clone().appendTo('.main')

// //number 26
// $('.profilepic').width(20);

// //number 27
// $('#twitter-widget-0').hide();
// $('#twitter-widget-0').show(500);

// number 32
// $(document).ready(function(){
	
// 	$('.nav-item').click(function(){
// 		$('.main').hide();
// 	});

// });

// number 35
// $(document).ready(function(){
	
// 	$('.nav-item').click(function(){
// 		$('.main').hide();
// 		alert('You clicked About Me')
// 	});

// });

// number 36
// $(document).ready(function(){
	
// 	$('.nav-item').click(function(){
// 		$('.main').hide();
// 		$(this).append('!');
// 	});

// });

// number 37
// $('body').click(function(){
//   $(this).css({'background-color':'red'});
// })

// number 39
// $(document).ready(function(){
// 	$("div:contains('About Me')").click(function(){
// 		$(this).clone().appendTo(this);
// 	});
// });

// number 40
// $(document).ready(function(){
// 	// $('.main').click(function(){
// 	$('.right-sidebar').scroll(function(){
// 		$(this).css({'background-color':'red'});
// 	});
// 	// });
// });


//form validation
$(document).ready(function(){
		// var x=document.forms["form1"]["email"].value;
		// var atpos=x.indexOf("@");
		// var dotpos=x.lastIndexOf(".");
		// if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		  
		//   $('.submit').click(function(event){
		//   	event.preventDefault();
		//   	alert("Not a valid e-mail address");
		//   });
		// }

		

	$('.submit').click(function(event){
	  	event.preventDefault();	
	  	$('.error_div').remove();
	  	var email = document.getElementById('email').value;
	  	var password = document.getElementById('password').value;
	  	if (password.length < 8){
	  		$('.form').prepend('<div class="error_div">Your password must contain 8 characters</div>');
	  	};
	  // console.log($(document).forms["form1"]["email"].value);
	  	if(email.length < 8){
	  		$('.form').prepend('<div class="error_div">Your e-mail address must contain 8 characters</div>');
	  	};

	  	if(email.indexOf('@') === -1 || email.indexOf('.') === -1 ){
		  $('.form').prepend('<div class="error_div">Please enter a valid e-mail address with an "@" and a "."</div>');
		};


	});
	
});


















	