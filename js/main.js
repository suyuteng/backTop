/*requirejs配置*/
requirejs.config({
	paths:{
		jquery:'jquery-3.1.0.min'
	}
});
/*requierjs入口*/
requirejs(['jquery'],function($){
	$('#bottomToup').on('click',move);
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});
	checkPosition($(window).height());
	function go(){
		$('html,body').scrollTop(0);
	}
	function move(){
		$('html,body').animate({
			scrollTop:0 //不能有分号,window不用引号
		},800);
	}
	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$('#bottomToup').fadeIn();
		}else{
			$('#bottomToup').fadeOut();
		}
	}
	
});
/*requirejs封装上边的方法*/
/*requirejs(['jquery','backtop'],function($,backtop){
	new backtop.BackTop($('#bottomToup'),{
		mode:'move'
	})
	
});*/
/*requeryjs封装一个回到顶部的模块插件*/
/*requirejs(['jquery','sildbar2'],function($,sildbar2){
	new sildbar2.Sildbar2($('#sildbar'),$('#sildbarClose'),{
		state:'close'
	})
});*/
