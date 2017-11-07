




 $(document).ready(function(){
	$('.content_left').delay(300).animate({left:0},1000);
	$('.content_right').delay(300).animate({right:0},1000);
});
	
/*------------------------标题更换----------------------------*/
	fn(".one")
	$(".content_right h2 li").click(function(){
		
		fn(this)
		
	})
	function fn(a){
		$(a).addClass("yanshi").siblings().removeClass("yanshi")
	}
	
	
	function ss(id){
		return document.getElementById(id);
	}
	
	
	var flagUname = false; //表示不成功
	ss("uname").onblur = function(){
		//如果成功  flagName = true
		
		//用户名验证 ： 用户名只能由字母或数字或下划线组成的3--8位字符
		var reg = /^1[3578]\d{9}$/;
		var uname = ss("uname").value;
		if( reg.test(uname) ){
			ss("s1").innerHTML = "* 可以注册";
			ss("s1").style.cssText="color:green"
			flagUname = true;
		}else{
			if(uname.length==0){
				ss("s1").innerHTML = "- 手机号码不能为空";
			}else{
				ss("s1").innerHTML = "- 手机号码不是一个有效号码";
			}
			ss("s1").style.cssText="color: rgb(153, 0, 0)"
			flagUname = false;
		}
	}
	
	
	var flagUpwd = false;
	ss("upwd").onblur = function(){
		//密码  密码不能少于6位
		var reg = /^.{6,}$/;
		var upwd = ss("upwd").value;
		if( reg.test(upwd) ){
			ss("s2").innerHTML = "";
			ss("stronge").style.display="block";
			flagUpwd = true;
		}else{
			ss("stronge").style.display="none";			
			ss("s2").innerHTML = "密码不能少于6位";
			ss("s2").style.cssText="color: rgb(153, 0, 0)"
			flagUpwd = false;
		}
	}
	
	//确认密码
	var flagQpwd = false;
	ss("qpwd").onblur = function(){
		if( ss("upwd").value != ss("qpwd").value ){
			ss("s3").innerHTML="- 两次输入密码不一致"
			ss("s3").style.cssText="color: rgb(153, 0, 0)"
			flagQpwd = false;
		}else{
			ss("s3").innerHTML = "* 可以注册";
			ss("s3").style.cssText="color:green"
			flagQpwd = true;
		}
	}
	ss("btn2").onclick=function(){
		if(flagUname&&flagQpwd&&flagUpwd){
			
			/*location="log on.html"*/
			fn()
			
		}else{
			alert("注册失败")
		}
	}
	
	
function fn(){
		var uname = ss("uname").value;
		var upwd = ss("upwd").value;
		var deffered = $.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				"status":"register",
				"userID":uname,
				"password":upwd
			}			
		});
		deffered.done(function(res){
			//console.log(typeof res)
			switch(res){
				case "0":alert("用户名重名了");break;
				case "1":alert("注册成功了，您的页面将在3秒钟后跳转到登录页面");
						setTimeout(function(){
						 location.href = "log on.html";
						},3000)
						 break;
				case "2": alert("注册失败，电脑当机了，来生再试吧");		
			}
		})
	}