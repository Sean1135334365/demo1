(function ($) {
	$.fn.ImageZooming=function(options){
		options.target=$(this);
		var example=new ImageZooming();
		example.init(options);
	}
	function ImageZooming() {
		this.class='imagezooming';
	}
	ImageZooming.prototype={
		drag:false,
		i:0,
		scale:1,
		origiX:null,
		origiY:null,
		init:function(setting){
			this.options=$.extend({
				target:$(),
				limit:true,
				scale:2,
				parent:$(),
				deviation_x:0,
				deviation_y:0,
				callback:null
			},setting);
			this.options.target=$(this.options.target);
			this.bindEvent();
		},
		bindEvent:function(){
			var _this = this;
			this.options.target.on('click',function(e){
				e=e||window.event;
				_this.i++;
				setTimeout(function(){
					_this.i=0;
				},300);
				if(_this.i>1){
					_this.event['dblclick'].call(this,e,_this)
				}
			});
			this.options.target.on('contextmenu',function(e){			            
				window.event.returnValue = false;
				e=e||window.event;
				_this.event['Rclick'].call(this,e,_this)
			});
			this.options.target.on('touchstart',function(e){
				e=e||window.event;
				_this.event['mousedown'].call(this,e,_this)
			});
			this.options.target.on('mousedown',function(e){
				e=e||window.event;
				_this.event['mousedown'].call(this,e,_this)
			});
			this.options.target.on('touchmove',function(e){
				e=e||window.event;
				_this.event['mousemove'].call(this,e,_this)
			});
			this.options.target.on('mousemove',function(e){
				e=e||window.event;
				_this.event['mousemove'].call(this,e,_this)
			});
			$(document).on('touchend',function(e){
				e=e||window.event;
				_this.event['mouseup'].call(this,e,_this)
			});
			$(document).on('mouseup',function(e){
				e=e||window.event;
				_this.event['mouseup'].call(this,e,_this)
			})
		},
		event:{
			'dblclick':function(e,_this){
				_this.frag=false;
				var touch=e.changedTouches ? e.changedTouches[0] : e;
				_this.scaleUp.call(_this,touch,_this);
				return false;
			},
			'Rclick':function(e,_this){
				_this.frag=false;
				var touch=e.changedTouches ? e.changedTouches[0] : e;
				_this.scaleDown.call(_this,touch,_this);
				return false;
			},
			'mousedown':function(e,_this){
				e.preventDefault?e.preventDefault():window.event.returnValue = false;
				_this.drag=true;
				var touch=e.changedTouches ? e.changedTouches[0] : e;
				_this.setOrigi.call(_this,touch,_this);
				return false;
			},
			'mousemove':function(e,_this){
				e.preventDefault?e.preventDefault():window.event.returnValue = false;
				var touch=e.changedTouches ? e.changedTouches[0] : e;
				if(_this.drag&&_this.options.parent.offset().left>(_this.options.target.offset().left+1)&&_this.options.limit){
					_this.reset.call(_this,_this,'left');
					return _this.drag=false;
				}if(_this.drag&&_this.options.parent.offset().top>(_this.options.target.offset().top+1)&&_this.options.limit){
					_this.reset.call(_this,_this,'top');
					return _this.drag=false;
				}if(_this.drag&&(_this.scale*_this.options.target.width()+_this.options.target.offset().left)>(_this.options.parent.offset().left+_this.options.parent.width())&&_this.options.limit){
					_this.reset.call(_this,_this,'right');
					return _this.drag=false;
				}if(_this.drag&&(_this.scale*_this.options.target.height()+_this.options.target.offset().top)>(_this.options.parent.offset().top+_this.options.parent.height())&&_this.options.limit){
					_this.reset.call(_this,_this,'bottom');
					return _this.drag=false;
				}
				if(_this.drag){_this.setPosition.call(_this,touch,_this)};
			},
			'mouseup':function(e,_this){
				return _this.drag=false;
			}
		},
		setOrigi:function(touch,_this){
			_this.origiX=touch.pageX-parseInt(_this.options.target.css('left'));
			_this.origiY=touch.pageY-parseInt(_this.options.target.css('top'));
		},
		reset:function(_this,error){
			if(error=='left'){
				var x=parseInt(_this.options.target.css('left'));
				var cx=_this.options.target.offset().left-_this.options.parent.offset().left;
				_this.options.target.css('left',(x-cx)+'px');
			}if(error=='top'){
				var y=parseInt(_this.options.target.css('top'));
				var cy=_this.options.target.offset().top-_this.options.parent.offset().top;
				_this.options.target.css('top',(y-cy)+'px');
			}if(error=='right'){
				var x=parseInt(_this.options.target.css('left'));
				var cx=(_this.options.parent.offset().left+_this.options.parent.width())-(_this.scale*_this.options.target.width()+_this.options.target.offset().left);
				_this.options.target.css('left',(x+cx)+'px');
			}if(error=='bottom'){
				var y=parseInt(_this.options.target.css('top'));
				var cy=(_this.options.parent.offset().top+_this.options.parent.height())-(_this.scale*_this.options.target.height()+_this.options.target.offset().top);
				_this.options.target.css('top',(y+cy)+'px');
			}
		},
		setPosition:function(touch,_this){
			var movement={
				x:touch.pageX-_this.origiX,
				y:touch.pageY-_this.origiY,
			}
			var x=+movement.x;
			var y=+movement.y;
			_this.options.target.css({'left':x+'px','top':y+'px'});
		},
		scaleUp:function(touch,_this){
			if(_this.scale<_this.options.scale){
				var offset=_this.options.target.offset();
				var origiX=(touch.pageX-offset.left)/(_this.scale*_this.options.target.width());
				var origiY=(touch.pageY-offset.top)/(_this.scale*_this.options.target.height());
				_this.scale+=0.5;
				_this.options.target.css({'transform-origin':(origiX*100)+'% '+(origiY*100)+'%','transform':'scale('+_this.scale+')','-webkit-transform':'scale('+_this.scale+')','-moz-transform':'scale('+_this.scale+')','-ms-transform':'scale('+_this.scale+')','-o-transform':'scale('+_this.scale+')','-webkit-transform-origin':(origiX*100)+'% '+(origiY*100)+'%','-moz-transform-origin':(origiX*100)+'% '+(origiY*100)+'%','-ms-transform-origin':(origiX*100)+'% '+(origiY*100)+'%','-o-transform-origin':(origiX*100)+'% '+(origiY*100)+'%'});
			}
		},
		scaleDown:function(touch,_this){
			if(_this.scale>1){
				var offset=_this.options.target.offset();
				var origiX=(touch.pageX-offset.left)/(_this.scale*_this.options.target.width());
				var origiY=(touch.pageY-offset.top)/(_this.scale*_this.options.target.height());
				_this.scale-=0.5;
				_this.options.target.css({'transform-origin':'0% 0%','-webkit-transform-origin':'0% 0%','-moz-transform-origin':'0% 0%','-ms-transform-origin':'0% 0%','transform-origin':'0% 0%','-o-transform':'scale(1) translate3d(-50%,-50%,0px)','left':'50%','top':'50%','transition':'all 0s linear','-webkit-transition':'all 0s linear'});
				_this.options.target.css({'transform-origin':(origiX*100)+'% '+(origiY*100)+'%','transform':'scale('+_this.scale+')  translate3d(-50%,-50%,0px)','-webkit-transform':'scale('+_this.scale+') translate3d(-50%,-50%,0px)','-moz-transform':'scale('+_this.scale+')  translate3d(-50%,-50%,0px)','-ms-transform':'scale('+_this.scale+')  translate3d(-50%,-50%,0px)','-o-transform':'scale('+_this.scale+')  translate3d(-50%,-50%,0px)','-webkit-transform-origin':(origiX*100)+'% '+(origiY*100)+'%','-moz-transform-origin':(origiX*100)+'% '+(origiY*100)+'%','-ms-transform-origin':(origiX*100)+'% '+(origiY*100)+'%','-o-transform-origin':(origiX*100)+'% '+(origiY*100)+'%','transition':'transform 0.3s linear','-webkit-transition':'transform 0.3s linear'});
			}
		}
	}
	return ImageZooming;
})(jQuery);