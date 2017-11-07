
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

var cookieInfo = getCookie("shoplist");
	var html = "";

	for (var i= 0 ; i < cookieInfo.length ; i++) {
		shopinfo = cookieInfo[i];
		html +=`<ul>
					<li><input type="checkbox" class="ck" checked="<checked></checked>"/></li>
					<li>
						<img src="img/${shopinfo.src}" alt="" />
						<p>${shopinfo.name}</p>
					</li>
					<li>
						<div class="updateCount minus">-</div>
						<input type="text" value="${shopinfo.count}" id="txt"/>
						<div class="updateCount add">+</div>
					</li>
					<li>
						<span>${shopinfo.price}</span>
					</li>
					<li>
						<span class="price">${(shopinfo.count*shopinfo.price).toFixed(2)}</span>
					</li>
					<li>
						<a href="#" class="delBtn">删除</a>
						<span style="display:none" class="str" data-name=${shopinfo.name} data-src=${shopinfo.src} data-price=${shopinfo.new_price} data-count=${shopinfo.count}></span>
					</li>
				</ul>`
		}
	$(".content_box").html( html );
	
	$(".delBtn").click(function(){
		var src=$(".str").data("src")
		
		if( confirm("确定要删除么？") ){
			//根据这个id去 获取的cookie数据中做比较   删除cookie中对应的商品
			for(var i = 0 ; i <cookieInfo.length ; i++ ){
				if( src == cookieInfo[i].src ){
					//删除数组中的某一个数据
					cookieInfo.splice(i,1);
					
					//改cookie   重设cookie
					setCookie("shoplist",JSON.stringify( cookieInfo ));
					
					break;
				}
			}
			$(this).parent().parent().remove();
		}
	})
	
	
		
		$(".allcheck").click(function(){
			$(".ck").prop("checked",$(this).prop("checked"));
			jiesuan();
		})
		
		$(".ck").click(function(){
			jiesuan();
		})
		$(document).ready(function(){
			if($(".ck").prop("checked")){
				jiesuan();
			}
		})
		//结算功能
		function jiesuan(){
			var sumPrice = 0;
			$(".ck:checked").each(function(){
				
				sumPrice += parseInt( $(this).parent().parent().find(".price").html() )
			})
			$(".all_price").html( sumPrice );
		}
		
		
		//加减操作
	$(".updateCount").click(function(){
		//确定当前操作的对象id
		
		var src=$(this).parent().parent().find(".str").data("src")
		var sumPrice = 0;
		var flag = $(this).html();
		var count = $(this).parent().parent().find("#txt").val()
	
		//alert(count)
		
		//如果当前操作对象的数量为1  并且操作的符号是 - ， 直接返回
		console.log(count)
		if( count<=1 && flag == "-" ){
			return;
		}
		for(var i = 0 ; i < cookieInfo.length ; i++){
			if( src == cookieInfo[i].src ){
				flag == "+" ? cookieInfo[i].count++ : cookieInfo[i].count--;
				//修改cookie信息
				setCookie("shoplist",JSON.stringify(cookieInfo));
				
				//修改界面信息
				$(this).parent().parent().find("#txt").val( cookieInfo[i].count );
				$(this).parent().parent().find(".price").html( (cookieInfo[i].count * cookieInfo[i].price).toFixed(2));
				jiesuan()
				
			}
		}
	})
	
	$(".clear1").click(function(){
		$(".all_price").html("0.00")
		$(".content_box ul").remove()
		setCookie("shoplist","[]")
	})