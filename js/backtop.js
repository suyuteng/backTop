define(['jquery','scrollto'],function($,scrollto){
	//面向对象方式创建模块构造函数
	function BackTop(el,opts){
		this.opts=$.extend({},BackTop.DEFAULTS,opts);
		this.$el=$(el);
		this.scroll=new scrollto.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});
		//添加事件
		this._checkPosition();
		if(this.opts.mode=='move'){
			this.$el.on('click',$.proxy(this._move,this));
		}else{
			this.$el.on('click',$.proxy(this._go,this));
		}
		
		$(window).on('scroll',$.proxy(this._checkPosition,this));
		
		
	}
	//默认的参数
	BackTop.DEFAULTS={
		mode:'move',
		pos:$(window).height(),
		speed:800
		
	}
	
	//原形连上的方法
	BackTop.prototype._move=function(){
		
		this.scroll.move();
	}
	BackTop.prototype._go=function(){
		this.scroll.go();
		
		
	}
	BackTop.prototype._checkPosition=function(){
		if($(window).scrollTop()>this.opts.pos){
			this.$el.fadeIn();
		}else{
			this.$el.fadeOut();
		}
	}
	return{
		BackTop:BackTop
	}
})