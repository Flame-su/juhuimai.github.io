//	搜索宝贝和店铺转换
	$(".search_cowry").on("click","li",function(){
		
		$(this).addClass("search_bj").siblings().removeClass("search_bj")
	})
	
	$.ajax({
		type:"get",
		url:"json/seach.json",
		async:true,
		success:function(res){
			var sth= res.search
			var html=""
			for(var i in sth ){
				
				html+=`<a href="#">${sth[i]}</a>`
			}
			$(".z-search").html(html)
		}
		
	})
	
	/*-----------------------三级目录-------------------------------*/
	$.ajax({
		type:"get",
		url:"json/nav.json",
		async:true,
		success:function(res){
			var html="";
			var str=""
			for(var i in res ){
				var html1=""

				var str1=""
				for(var j in res[i]){
					html1+=`<a href="#">${j}</a>`
					var str2=""
					for(var m in res[i][j]){
						str2+=`<a href="">${res[i][j][m]}</a>`
					}
					str1+=`<li><div class="box2"><a href="">${j}</a></div><div class="box3">`+str2+`</div></li>`
				}
				str+=`<ul>`+str1+`</ul>`
				
				
				html+=`<li>
							<span>${i}</span>
							<div>`+html1+`</div>
						</li>`
			}
			$(".nav2").html(str)
			$(".all_nav_box").html(html)
			
			
 		   
 		  $(".all_nav_box>li").mouseenter(function(){
 		  	var index=$(this).index();
 		  	$(this).css({"background":"#E54F66"})
 		  	$(".all_nav_box>li span").eq(index).css("color","#fff")
 		  	
 		  	var h=index*60+190
 		  	   $(".nav2").css("top",h)
               $(".nav2").show()
               $(".nav2>ul").eq(index).show()
                                 .siblings().hide()
              
 		  })
	      $(".all_nav_box>li").mouseleave(function(){
	      		$(this).css({"background":""})
	      		$(".all_nav_box>li span").css({"color":""})
	      	 $(".nav2").hide()
	      })
			
			
		}
	})
	/*-----------------------轮播图-------------------------------*/
	for(var i=1 ;i<=8;i++){
		var pic="img/banner"+i+".jpg"
		
		$(".wrapper ul li").eq(i-1).attr("style","background:url("+pic+") no-repeat 50% 50%")
	}
	
	
	$(function(){
		var timer = setInterval(auto,3000);
		var index = 0;
		function auto(){
			index++;
			if( index == $("ol li").size() ){
				index = 0;
			}
			$(".wrapper ul li").eq(index-1).fadeIn(500).siblings().fadeOut(500);
			$(".wrapper ol li").eq(index-1).addClass("current").siblings().removeClass("current");
		}
		$(".wrapper ol").on("click","li",function(){
			clearInterval(timer)
			index=$(this).index()
			auto();
			
		})
		
		$(".wrapper ol").on("mouseout","li",function(){
			clearInterval(timer)
			timer = setInterval(auto,3000);
			
		})
	})
	
	$(".all_nav").mouseover(function(){
		$(".all_nav_box").css("display","block")
	})
	
	
	$(".nav2").mouseover(function(){
		
		$(this).css("display","block")
	})
	$(".nav2").mouseout(function(){
		$(".all_nav").mouseout(function(){
		$(".all_nav_box").css("display","none")
	})
		$(this).css("display","none")
	})
//右侧固定栏
	
/*----------------------登录----------------------------*/
	$(".tx").mouseover(function(){
		
		$(".aside form").css("display","block")
	})
	$(".tx").mouseout(function(){
		$(".aside form").css("display","none")
	})
	$(".aside form").mouseover(function(){
		$(".aside  form").css("display","block")
	})
	$(".aside form").mouseout(function(){
		$(".aside form").css("display","none")
	})
	
/*----------------------销售----------------------------*/	
	$(".onload").mouseover(function(){
	$(".onload_box").css("display","block")
	})
	$(".onload").mouseout(function(){
		$(".onload_box").css("display","none")
	})
	$(".onload_box").mouseover(function(){
		$(".onload_box").css("display","block")
	})
	$(".onload_box").mouseout(function(){
		$(".onload_box").css("display","none")
	})

/*----------------------购物车----------------------------*/
	$(".aside_shop").mouseover(function(){
		$(this).css("background","#C40000")
	})
	$(".aside_shop").mouseout(function(){
		$(this).css("background","#333333")
	})
	
/*----------------------关注，收藏同意行为----------------------------*/	
	$(".aside_box").mouseover(function(){
		$(this).children(".aside_bg").stop().animate({"margin-top":-60},200)
	})
	$(".aside_box").mouseout(function(){
		$(this).children(".aside_bg").stop().animate({"margin-top":-5},200)
	})
/*----------------------二维码----------------------------*/		
	$(".aside_app").mouseover(function(){
		$(".app2").css("display","block")	
			$(".app_bg").stop().animate({"margin-top":-60},200)
	})
	$(".aside_app").mouseout(function(){
		$(".app2").css("display","none")
			$(".app_bg").stop().animate({"margin-top":-5},200)
	})
	$(".app2").mouseover(function(){
		$(".app2").css("display","block")
	})
	$(".app2").mouseout(function(){
		$(".app2").css("display","none")
	})
/*----------------------回到顶部----------------------------*/	
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		if(sTop>100){
			$(".top").css("display","block")
			$(".top").mouseover(function(){
				$(".top_bg").stop().animate({"margin-top":-60},200)
			})
			$(".top").mouseout(function(){
				$(".top_bg").stop().animate({"margin-top":-5},200)
			})
			
		}else{
			$(".top").css("display","none")
		}
	})
	$(".top").click(function(){
				$("body,html").animate({"scrollTop":0},1000)
			})




/*----------------------子页面内容----------------------------*/	

	var str = location.href;
	var arr = str.split("?");
	var cname = arr[1].split("=")[1];
	
	$.ajax({
		type:"get",
		url:"json/1F.json",
		success:function(glist){
			var html = "";
			var txt="";
			var suggest=""
			var new_price=""
			var str ="";
			var old_price=""
			for (var i = 0 ; i < glist.one_f.length ; i++) {
				var pro = glist.one_f[i];
				if(cname == pro.src){
					html = `<img src="img/${pro.src}" alt="" />
						`;
					txt=`${pro.name}`
					suggest=`${pro.suggest}`
					new_price=`${pro.new_price}`
					old_price=`${pro.old_price}
					<span style="display:none" class="str" data-name=${pro.name} data-src=${pro.src} data-price=${pro.new_price}></span>`
					
					break
				}
			}
			
			$(".content_middle h4").html(old_price)
			$(".content_middle h1").html(new_price)
			$(".content_middle h3").html(suggest)
			$(".content_middle>p").html(txt)
			$(".content_nav>span").html(txt)
			$(".content_pic").html(html);
		}
	});
			$(function(){
				
			var sum= $("#txt").val()
			var sum1=parseInt(sum)
			                                                                                                                                                                                                                                                                                                                                                                                                                  
				$(".minus").click(function(){
					if(sum1>=2){
						sum1--
						$("#txt").val(sum1)
					new1=parseFloat($(".content_center h1").html())
					new1=new1*sum1
					console.log(new1)
					}
				})
				$(".add").click(function(){
						sum1++
						$("#txt").val(sum1)
					new1=parseFloat($(".content_center h1").html())
					new2=10
					new1=new2*sum1
					console.log(new1)
				$(".content_center h1").html(new1)
				})
			})
			
			
		$(".add_shop").click(function(){
			var arr = [];//用来存储某些个商品对象
			var flag = true;//值为true  表示要向cookie中添加新商品了
			//json对象存储某个商品信息
			var d = {
				
				"name":$(".str").data("name"),
				"src":$(".str").data("src"),
				"price":$(".str").data("price"),
				"count":1  //用来记录该商品添加了几次,
				
			};
			
			//为了解决再次点击添加购物车按钮时，商品被覆盖 ， 先将购物车中的数据取出来，存放到数组中；；；；；然后在将当前点击的商品对象添加到数组中
		//取出购物车的数据 就是将cookie的信息取出来 
		oldCookie = getCookie("shoplist");
		console.log(typeof oldCookie)
		if( oldCookie.length !=  0 ){
			arr = oldCookie;//将cookie信息存入到数组中
			//遍历arr数组中的数据  判断当前添加的商品在数组中是否存在  如果存在就让count值++
			for(var i = 0 ; i <arr.length ; i++){
				if( d.src == arr[i].src ){
					arr[i].count++;
					flag = false;//此时flag为false关掉下面的if语句
					break;	
				}
			}
		}
		
		//将获取的商品存入到`1数组（1）没有旧cookie直接存
		//（2）有旧cookie，但不相等，此时flag已变为true，可以存
		if(flag){
			arr.push(d);
		}
		
		//将数组信息存入到购物车中  cookie
		setCookie("shoplist",JSON.stringify(arr));
		
		console.log( document.cookie );
		})
		
		$(".aside_shop").click(function(){
			location="shopcar.html"
		})