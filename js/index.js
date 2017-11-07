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
	
	$(".nav2").mouseover(function(){
		
		$(this).css("display","block")
	})
	$(".nav2").mouseout(function(){
		$(this).css("display","none")
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
		var top1 = $(".banner").offset().top;
		if(sTop>top1){
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

//	content第一栏,图片滑过	
	$.ajax({
		type:"get",
		url:"json/wine.json",
		async:true,
		success:function(res){
			var html="";
			var html1="";
			var html2="";
				for(var j=0;j<res.one.length;j++){
					
						html+=`<li><img src="img/${res.one[j]}" alt="" /></li>`		
				}
				$(".bai").html(html)
				for(var j=0;j<res.two.length;j++){
					
						html1+=`<li><img src="img/${res.two[j]}" alt="" /></li>`		
				}
				$(".yang").html(html1)
				for(var j=0;j<res.three.length;j++){
					
						html2+=`<li><img src="img/${res.three[j]}" alt="" /></li>`		
				}
				$(".hong").html(html2)
		}
	})
			$(".wine_box").on("mouseover","img", function(){
				$(this).stop().animate({"margin-left":-100},1000)
			})
			$(".wine_box").on("mouseout","img",function(){
				
				$(this).stop().animate({"margin-left":0},1000)
			})
			$(".wine li").mouseover(function(){
				$(this).css("color","red").siblings().css("color","")
				
				$(".wine_box>div").eq($(this).index()).css("display","block").siblings().css("display","none")
			})
			
//	content第二栏,图片跳动	
	for(var i=0;i<24;i++){
		oli=document.createElement("li")
		oli.className="xwstyle"
		oli.innerHTML=`<img src="img/xw.jpg" alt="" />`
		document.getElementById("content_two_cp").appendChild(oli) 
	}
	
	
//	content第三栏,选择卡
	$.ajax({
		type:"get",
		url:"json/choose.json",
		async:true,
		success:function(res){
			var html="";
			for(var j = 0 ; j < res.list.length ; j++){
					var child = res.list[j];
					html += `<li>
								<div>
									<img src="img/${child.src}" alt="" />
								</div>
								<a>${child.name}</a>
								<p>${child.shop}: <span>${child.price}</span></p>
							</li>`;
				}
			$(".content_three_box1").html(html);
			
		}
	})
	$(".content_three_nav li").mouseover(function(){
		$(".content_three_box>div").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	
	
/*------------------------------1F----------------------------------------*/		
	
	//	1F中间选择卡边
	$(function(){
		//改变标题边框
		
		f_one(1)
		$(".content_1f_nav ul li").mouseover(function(){
			//index为页码
			index=$(this).index()+1
			console.log(index)
			$(this).addClass("color_bd").siblings().removeClass("color_bd")
			f_one(index)
			//改变内部内容

		})
	})
	
	
	
//	1F 左侧圆形选择框
	$(".content_1f_left_bj>a").mouseover(function(){
		$(this).addClass("round").siblings().removeClass("round")
	})
	$(".content_1f_left_bj>a").mouseout(function(){
		$(this).removeClass("round")
	})
	
	
	
	function f_one(index){
			$.ajax({
				type:"get",
				url:"json/1F.json",
				success:function(res){
					var html=""
						//每页显示个数
					pageNum = 8
					for(var i=(index-1)*pageNum;i<index*pageNum;i++){
						
						var src=res.one_f[i].src
						var old=res.one_f[i].old_price
						var new_1=res.one_f[i].new_price
						var name=res.one_f[i].name
						html+=`
							<li>
								<a href="children.html?pid=${src}">
									<img src="img/${src}" alt="" />
									<p>${name}</p>
									<p>a${old}</p>
									<p>${new_1}</p>
									<span>
										
									</span>
								</a>
							</li>
						`
					}
					$(".content_1f_content").html(html)
						index=$(this).index()
			}
		})
	}

	/*------------------------------1楼层下的滑过-----------------------------------------------*/
	$.ajax({
		type:"get",
		url:"json/nv_bottom.json",
		success:function(res){
			html=""
			for(var i=0;i<res.img.length;i++){
				var pic=res.img[i]
				html+=`
					<a>
						<img src="img/${pic}" alt="" />
					</a>
				`
			}
			$(".nv1_bottom ul").html(html)
		}
	})
	
	$(".nv1_bottom").mouseover(function(){
		$(".nv1_left").addClass("block")
		$(".nv1_right").addClass("block")
	})
	
	$(".nv1_bottom").mouseout(function(){
		$(".nv1_left").removeClass("block")
		$(".nv1_right").removeClass("block")
	
	})
	
	
	$(".nv1_right").click(function(){
		if(i<744){
			i+=120
		}
		
			$(".nv1_bottom ul").animate({"left":24-i},200)
		console.log(i)	
	})
	
	$(".nv1_left").click(function(){
		if(i>24){
			i-=120
		}
		console.log(i)	
			
			$(".nv1_bottom>ul").animate({"left":24-i},200)
			
	})
/*------------------------------2F----------------------------------------*/	
	
//	2F 左侧圆形选择框
	$(".content_2f_left_bj>a").mouseover(function(){
		$(this).addClass("round2").siblings().removeClass("round2")
	})
	$(".content_2f_left_bj>a").mouseout(function(){
		$(this).removeClass("round2")
	})
	//	2F中间选择卡边
	$(function(){
		//改变标题边框
		
		f_two(1)
		$(".content_2f_nav ul li").mouseover(function(){
			//index为页码
			index=$(this).index()+1
			console.log(index)
			$(this).addClass("color_bd2").siblings().removeClass("color_bd2")
			f_two(index)
			//改变内部内容

		})
	})
	
	function f_two(index){
			$.ajax({
				type:"get",
				url:"json/1F.json",
				success:function(res){
					var html=""
						//每页显示个数
					pageNum = 8
					for(var i=(index-1)*pageNum;i<index*pageNum;i++){
						
						var src=res.one_f[i].src
						var old=res.one_f[i].old_price
						var new_1=res.one_f[i].new_price
						var name=res.one_f[i].name
						html+=`
							<li>
								<a href="children.html?pid=${src}">
								
									<img src="img/${src}" alt="" />
									<p>${name}</p>
									<p>a${old}</p>
									<p>${new_1}</p>
									<span>
										
									</span>
								</a>
							</li>
						`
					}
					$(".content_2f_content").html(html)
						index=$(this).index()
			}
		})
	}

	$.ajax({
		type:"get",
		url:"json/nv_bottom.json",
		success:function(res){
			html=""
			for(var i=0;i<res.img.length;i++){
				var pic=res.img[i]
				html+=`
					<a>
						<img src="img/${pic}" alt="" />
					</a>
				`
			}
			$(".nv2_bottom ul").html(html)
		}
	})
	
	$(".nv2_bottom").mouseover(function(){
			$(".nv2_left").css("display","block")
		$(".nv2_right").css("display","block")
	})
	
	$(".nv2_bottom").mouseout(function(){
		$(".nv2_left").css("display","none")
		$(".nv2_right").css("display","none")
	
	})
	
	
	
	$(".nv2_right").click(function(){
		if(i<744){
			i+=120
		}
		
			$(".nv2_bottom ul").animate({"left":24-i},200)
		console.log(i)	
	})
	
	$(".nv2_left").click(function(){
		if(i>24){
			i-=120
		}
		console.log(i)	
			
			$(".nv2_bottom>ul").animate({"left":24-i},200)
			
	})
/*------------------------------3F----------------------------------------*/	
	
//	3F 左侧圆形选择框
	$(".content_3f_left_bj>a").mouseover(function(){
		$(this).addClass("round3").siblings().removeClass("round3")
	})
	$(".content_3f_left_bj>a").mouseout(function(){
		$(this).removeClass("round3")
	})
	//	3F中间选择卡边
	$(function(){
		//改变标题边框
		
		f_three(1)
		$(".content_3f_nav ul li").mouseover(function(){
			//index为页码
			index=$(this).index()+1
			console.log(index)
			$(this).addClass("color_bd3").siblings().removeClass("color_bd3")
			f_three(index)
			//改变内部内容

		})
	})
	
	function f_three(index){
			$.ajax({
				type:"get",
				url:"json/1F.json",
				success:function(res){
					var html=""
						//每页显示个数
					pageNum = 8
					for(var i=(index-1)*pageNum;i<index*pageNum;i++){
						
						var src=res.one_f[i].src
						var old=res.one_f[i].old_price
						var new_1=res.one_f[i].new_price
						var name=res.one_f[i].name
						html+=`
							<li>
								<a href="children.html?pid=${src}">
								
									<img src="img/${src}" alt="" />
									<p>${name}</p>
									<p>a${old}</p>
									<p>${new_1}</p>
									<span>
										
									</span>
								</a>
							</li>
						`
					}
					$(".content_3f_content").html(html)
						index=$(this).index()
			}
		})
	}

	$.ajax({
		type:"get",
		url:"json/nv_bottom.json",
		success:function(res){
			html=""
			for(var i=0;i<res.img.length;i++){
				var pic=res.img[i]
				html+=`
					<a>
						<img src="img/${pic}" alt="" />
					</a>
				`
			}
			$(".nv3_bottom ul").html(html)
		}
	})
	
	$(".nv3_bottom").mouseover(function(){
			$(".nv3_left").css("display","block")
		$(".nv3_right").css("display","block")
	})
	
	$(".nv3_bottom").mouseout(function(){
		$(".nv3_left").css("display","none")
		$(".nv3_right").css("display","none")
	
	})
	
	
	
	$(".nv3_right").click(function(){
		if(i<744){
			i+=120
		}
		
			$(".nv3_bottom ul").animate({"left":24-i},200)
		console.log(i)	
	})
	
	$(".nv3_left").click(function(){
		if(i>24){
			i-=120
		}
		console.log(i)	
			
			$(".nv3_bottom>ul").animate({"left":24-i},200)
			
	})
	/*------------------------------4F----------------------------------------*/	
	
//	4F 左侧圆形选择框
	$(".content_4f_left_bj>a").mouseover(function(){
		$(this).addClass("round4").siblings().removeClass("round4")
	})
	$(".content_4f_left_bj>a").mouseout(function(){
		$(this).removeClass("round4")
	})
	//	4F中间选择卡边
	$(function(){
		//改变标题边框
		
		f_four(1)
		$(".content_4f_nav ul li").mouseover(function(){
			//index为页码
			index=$(this).index()+1
			$(this).addClass("color_bd4").siblings().removeClass("color_bd4")
			f_four(index)
			//改变内部内容

		})
	})
	
	function f_four(index){
			$.ajax({
				type:"get",
				url:"json/1F.json",
				success:function(res){
					var html=""
						//每页显示个数
					pageNum = 8
					for(var i=(index-1)*pageNum;i<index*pageNum;i++){
						
						var src=res.one_f[i].src
						var old=res.one_f[i].old_price
						var new_1=res.one_f[i].new_price
						var name=res.one_f[i].name
						html+=`
							<li>
								<a href="children.html?pid=${src}">
								
									<img src="img/${src}" alt="" />
									<p>${name}</p>
									<p>a${old}</p>
									<p>${new_1}</p>
									<span>
										
									</span>
								</a>
							</li>
						`
					}
					$(".content_4f_content").html(html)
						index=$(this).index()
			}
		})
	}

	$.ajax({
		type:"get",
		url:"json/nv_bottom.json",
		success:function(res){
			html=""
			for(var i=0;i<res.img.length;i++){
				var pic=res.img[i]
				html+=`
					<a>
						<img src="img/${pic}" alt="" />
					</a>
				`
			}
			$(".nv4_bottom ul").html(html)
		}
	})
	
	$(".nv4_bottom").mouseover(function(){
			$(".nv4_left").css("display","block")
		$(".nv4_right").css("display","block")
	})
	
	$(".nv4_bottom").mouseout(function(){
		$(".nv4_left").css("display","none")
		$(".nv4_right").css("display","none")
	
	})
	
	
	
	$(".nv4_right").click(function(){
		if(i<744){
			i+=120
		}
		
			$(".nv4_bottom ul").animate({"left":24-i},200)
		console.log(i)	
	})
	
	$(".nv4_left").click(function(){
		if(i>24){
			i-=120
		}
		console.log(i)	
			
			$(".nv4_bottom>ul").animate({"left":24-i},200)
			
	})
/*------------------------------5F----------------------------------------*/	
	
//	5F 左侧圆形选择框
	$(".content_5f_left_bj>a").mouseover(function(){
		$(this).addClass("round5").siblings().removeClass("round5")
	})
	$(".content_5f_left_bj>a").mouseout(function(){
		$(this).removeClass("round5")
	})
	//	5F中间选择卡边
	$(function(){
		//改变标题边框
		
		f_five(1)
		$(".content_5f_nav ul li").mouseover(function(){
			//index为页码
			index=$(this).index()+1
			console.log(index)
			$(this).addClass("color_bd5").siblings().removeClass("color_bd5")
			f_five(index)
			//改变内部内容

		})
	})
	
	function f_five(index){
			$.ajax({
				type:"get",
				url:"json/1F.json",
				success:function(res){
					var html=""
						//每页显示个数
					pageNum = 8
					for(var i=(index-1)*pageNum;i<index*pageNum;i++){
						
						var src=res.one_f[i].src
						var old=res.one_f[i].old_price
						var new_1=res.one_f[i].new_price
						var name=res.one_f[i].name
						html+=`
							<li>
								<a href="children.html?pid=${src}">
								
									<img src="img/${src}" alt="" />
									<p>${name}</p>
									<p>a${old}</p>
									<p>${new_1}</p>
									<span>
										
									</span>
								</a>
							</li>
						`
					}
					$(".content_5f_content").html(html)
						index=$(this).index()
			}
		})
	}
	
	$.ajax({
		type:"get",
		url:"json/nv_bottom.json",
		success:function(res){
			html=""
			for(var i=0;i<res.img.length;i++){
				var pic=res.img[i]
				html+=`
					<a>
						<img src="img/${pic}" alt="" />
					</a>
				`
			}
			$(".nv5_bottom ul").html(html)
		}
	})
	
	$(".nv5_bottom").mouseover(function(){
			$(".nv5_left").css("display","block")
		$(".nv5_right").css("display","block")
	})
	
	$(".nv5_bottom").mouseout(function(){
		$(".nv5_left").css("display","none")
		$(".nv5_right").css("display","none")
	
	})
	
	
	
	$(".nv5_right").click(function(){
		if(i<744){
			i+=120
		}
		
			$(".nv5_bottom ul").animate({"left":24-i},200)
		console.log(i)	
	})
	
	$(".nv5_left").click(function(){
		if(i>24){
			i-=120
		}
		console.log(i)	
			
			$(".nv5_bottom>ul").animate({"left":24-i},200)
			
	})
	
	/*------------------------------6F----------------------------------------*/	
	
//	5F 左侧圆形选择框
	$(".content_6f_left_bj>a").mouseover(function(){
		$(this).addClass("round6").siblings().removeClass("round6")
	})
	$(".content_6f_left_bj>a").mouseout(function(){
		$(this).removeClass("round6")
	})
	//	5F中间选择卡边
	$(function(){
		//改变标题边框
		
		f_six(1)
		$(".content_6f_nav ul li").mouseover(function(){
			//index为页码
			index=$(this).index()+1
			console.log(index)
			$(this).addClass("color_bd6").siblings().removeClass("color_bd6")
			f_six(index)
			//改变内部内容

		})
	})
	
	function f_six(index){
			$.ajax({
				type:"get",
				url:"json/1F.json",
				success:function(res){
					var html=""
						//每页显示个数
					pageNum = 8
					for(var i=(index-1)*pageNum;i<index*pageNum;i++){
						
						var src=res.one_f[i].src
						var old=res.one_f[i].old_price
						var new_1=res.one_f[i].new_price
						var name=res.one_f[i].name
						html+=`
							<li>
								<a href="#">
								
									<img src="img/${src}" alt="" />
									<p>${name}</p>
									<p>a${old}</p>
									<p>${new_1}</p>
									<span>
										
									</span>
								</a>
							</li>
						`
					}
					$(".content_6f_content").html(html)
						index=$(this).index()
			}
		})
	}
	
	$.ajax({
		type:"get",
		url:"json/nv_bottom.json",
		success:function(res){
			html=""
			for(var i=0;i<res.img.length;i++){
				var pic=res.img[i]
				html+=`
					<a>
						<img src="img/${pic}" alt="" />
					</a>
				`
			}
			$(".nv6_bottom ul").html(html)
		}
	})
	
	$(".nv6_bottom").mouseover(function(){
			$(".nv6_left").css("display","block")
		$(".nv6_right").css("display","block")
	})
	
	$(".nv6_bottom").mouseout(function(){
		$(".nv6_left").css("display","none")
		$(".nv6_right").css("display","none")
	
	})
	
	
	
	$(".nv6_right").click(function(){
		if(i<744){
			i+=120
		}
		
			$(".nv6_bottom ul").animate({"left":24-i},200)
		console.log(i)	
	})
	
	$(".nv6_left").click(function(){
		if(i>24){
			i-=120
		}
		console.log(i)	
			
			$(".nv5_bottom>ul").animate({"left":24-i},200)
			
	})
	
	/*------------------------------7F----------------------------------------*/	
	
//	5F 左侧圆形选择框
	$(".content_7f_left_bj>a").mouseover(function(){
		$(this).addClass("round7").siblings().removeClass("round7")
	})
	$(".content_7f_left_bj>a").mouseout(function(){
		$(this).removeClass("round7")
	})
	//	5F中间选择卡边
	$(function(){
		//改变标题边框
		
		f_seven(1)
		$(".content_7f_nav ul li").mouseover(function(){
			//index为页码
			index=$(this).index()+1
			console.log(index)
			$(this).addClass("color_bd7").siblings().removeClass("color_bd7")
			f_seven(index)
			//改变内部内容

		})
	})
	
	function f_seven(index){
			$.ajax({
				type:"get",
				url:"json/1F.json",
				success:function(res){
					var html=""
						//每页显示个数
					pageNum = 8
					for(var i=(index-1)*pageNum;i<index*pageNum;i++){
						
						var src=res.one_f[i].src
						var old=res.one_f[i].old_price
						var new_1=res.one_f[i].new_price
						var name=res.one_f[i].name
						html+=`
							<li>
								<a href="#">
								
									<img src="img/${src}" alt="" />
									<p>${name}</p>
									<p>a${old}</p>
									<p>${new_1}</p>
									<span>
										
									</span>
								</a>
							</li>
						`
					}
					$(".content_7f_content").html(html)
						index=$(this).index()
			}
		})
	}
	
	$.ajax({
		type:"get",
		url:"json/nv_bottom.json",
		success:function(res){
			html=""
			for(var i=0;i<res.img.length;i++){
				var pic=res.img[i]
				html+=`
					<a>
						<img src="img/${pic}" alt="" />
					</a>
				`
			}
			$(".nv7_bottom ul").html(html)
		}
	})
	
	$(".nv7_bottom").mouseover(function(){
			$(".nv7_left").css("display","block")
		$(".nv7_right").css("display","block")
	})
	
	$(".nv7_bottom").mouseout(function(){
		$(".nv7_left").css("display","none")
		$(".nv7_right").css("display","none")
	
	})
	
	
	$(".nv7_right").click(function(){
		if(i<744){
			i+=120
		}
		
			$(".nv7_bottom ul").animate({"left":24-i},200)
		console.log(i)	
	})
	
	$(".nv7_left").click(function(){
		if(i>24){
			i-=120
		}
		console.log(i)	
			
			$(".nv7_bottom>ul").animate({"left":24-i},200)
			
	})
	
		/*------------------------------8F----------------------------------------*/	
	
//	5F 左侧圆形选择框
	$(".content_8f_left_bj>a").mouseover(function(){
		$(this).addClass("round8").siblings().removeClass("round8")
	})
	$(".content_8f_left_bj>a").mouseout(function(){
		$(this).removeClass("round8")
	})
	//	5F中间选择卡边
	$(function(){
		//改变标题边框
		
		f_eight(1)
		$(".content_8f_nav ul li").mouseover(function(){
			//index为页码
			index=$(this).index()+1
			$(this).addClass("color_bd8").siblings().removeClass("color_bd8")
			f_eight(index)
			//改变内部内容

		})
	})
	
	function f_eight(index){
			$.ajax({
				type:"get",
				url:"json/1F.json",
				success:function(res){
					var html=""
						//每页显示个数
					pageNum = 8
					for(var i=(index-1)*pageNum;i<index*pageNum;i++){
						
						var src=res.one_f[i].src
						var old=res.one_f[i].old_price
						var new_1=res.one_f[i].new_price
						var name=res.one_f[i].name
						html+=`
							<li>
								<a href="#">
								
									<img src="img/${src}" alt="" />
									<p>${name}</p>
									<p>a${old}</p>
									<p>${new_1}</p>
									<span>
										
									</span>
								</a>
							</li>
						`
					}
					$(".content_8f_content").html(html)
						index=$(this).index()
			}
		})
	}
	
	$.ajax({
		type:"get",
		url:"json/nv_bottom.json",
		success:function(res){
			html=""
			for(var i=0;i<res.img.length;i++){
				var pic=res.img[i]
				html+=`
					<a>
						<img src="img/${pic}" alt="" />
					</a>
				`
			}
			$(".nv8_bottom ul").html(html)
		}
	})
	
	$(".nv8_bottom").mouseover(function(){
			$(".nv8_left").css("display","block")
		$(".nv8_right").css("display","block")
	})
	
	$(".nv8_bottom").mouseout(function(){
		$(".nv8_left").css("display","none")
		$(".nv8_right").css("display","none")
	
	})
	
	
	$(".nv8_right").click(function(){
		if(i<744){
			i+=120
		}
		
			$(".nv8_bottom ul").animate({"left":24-i},200)
		console.log(i)	
	})
	
	$(".nv8_left").click(function(){
		if(i>24){
			i-=120
		}
		console.log(i)	
			
			$(".nv8_bottom>ul").animate({"left":24-i},200)
			
	})
	
/*-------------------楼梯---------------*/

	var flag = true
$(".LoutiNav li").click(function(){
		flag = false;
		//当前点击的span的文字红色  其余默认
		$(this).find("b")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("b")
			   .removeClass("active");
			   
		//根据当前操作的楼层号的下标  找到对应楼层距离文档顶部的 距离 
		var topHeight = $(".Louti").eq( $(this).index() ).offset().top;
		
		//设置滚动条滚走的距离 为  topHeight
		$("body,html").stop().animate({"scrollTop":topHeight},1000,function(){
			flag = true; //点击事件动画完成后，将开关变量改变成true，让scroll滚动条事件可以继续执行
		})
	})
	
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
	
		var top1 = $(".Louti").eq(0).offset().top;
		if(sTop>=top1){
			$(".LoutiNav").css("transform","scale(1)")
			$(".LoutiNav").stop().animate({"opacity":1},20)
		}else if(sTop<=top1){
			$(".LoutiNav").css("transform","scale(1.2)")
			$(".LoutiNav").stop().animate({"opacity":0},20)
		}
		
		if(flag){
			
			//获取滚动条滚走距离
			var sTop = $(document).scrollTop();
			
			var $floor = $(".Louti").filter(function(){
				return Math.abs( $(this).offset().top - sTop )   < $(this).height()/2;
			})
			//根据楼层的索引  找到对应的楼层号   设置样式
			$("#LoutiNav li").eq( $floor.index() )
							 .find("span")
							 .addClass("active")
							 .end()
							 .siblings()
							 .find("span")
							 .removeClass("active");
		}
	})
	
/*--------------------------身边的商超-------------------------------------*/
	$.ajax({
		type:"get",
		url:"json/shop.json",
		success:function(res){
			console.log(pic)
			html=""
			for(var i=0;i<res.list.length;i++){
				
				var name=res.list[i].name
				var pic=res.list[i].src
				html+=`
					<dl>
						<dt><a href="#"><img src="${pic}" alt="" width="222" height="156"/></a></dt>
						<dd>${name}</dd>
						<span></span>
					</dl>
				
				`
			}
			$(".shop_box").html(html)
		}
	})
	/*----------------------删除底部固定框--------------------------*/
	$(".hide").click(function(){
		$(".fix_bottom").css("display","none")
	})
	

		$(".aside_shop").click(function(){
			location="shopcar.html"
		})