
(function(){
  /* codoon_pop 弹出框，依赖zepto或者jQuery
   *   
   */
  $.fn.codoon_pop = function(options){
    $(this).each(function(){
      var pop = $(this);
      var defaults = { state : 'show'}
      var settings = $.extend({}, defaults, options || {});
      var _state = settings.state;
      var _cont = settings.cont;      
      function open(){
        pop.show();
        setTimeout(function(){ pop.addClass('show')},1)
      }
      function close(){
        pop.removeClass('show');
        setTimeout(function(){ pop.hide()},200)
        console.log('close')
      }
      if (_cont != undefined) $('.pop_cont',pop).html(_cont);
      if(_state == 'show') open();
      if(_state == 'hide') close();
      
      //关闭pop
      $('.miss,.close,.pop_bg',pop).off('click',close).on('click',close);
    })
  }

})();