define(['jquery'],function($){
	//面向对象方式创建模块构造函数
	function ScrollTo(opts){
		//传递的参数覆盖对象的参数并返回
		this.opts=$.extend({},ScrollTo.DEFAULTS,opts);
		this.$e1=$('body,html');
		
		
	}
	//默认的参数
	ScrollTo.DEFAULTS={
		dest:0,
		speed:800,
		
	}
	//原形连上的方法
	ScrollTo.prototype.move=function(){
		
		var opts=this.opts;
		if($(window).scrollTop()!=opts.dest){
			if(!this.$e1.is(':animated')){
				this.$e1.animate({
					scrollTop:opts.dest
				},opts.speed)
			}
		}
	}
	ScrollTo.prototype.go=function(){
		
		this.$e1.scrollTop(this.opts.dest);
		
	}
	
	return{
		ScrollTo:ScrollTo
	}
})