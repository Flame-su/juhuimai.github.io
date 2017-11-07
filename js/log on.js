$(document).ready(function(){
	$('.content_left').delay(300).animate({left:0},1000);
	$('.content_right').delay(300).animate({right:0},1000);
 });
 
 
	$(".btn").click(function(){
		var uname = $(".form_txt").val();
		var upwd = $(".form_txt").val();
		var deffered = $.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				"status":"login",
				"userID":uname,
				"password":upwd
			}			
		});
		deffered.done(function(res){
			//console.log(typeof res)
				
			
			switch(res){
				case "0":alert ("用户名不存在");break;
				case "2":alert ("用户名密码不符");break;
				default :alert ("登录成功")
						setTimeout(function(){
								 location.href = "index.html";
								},500);
			}
			
			})
		})