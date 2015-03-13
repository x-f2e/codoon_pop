
#弹出框组件: codoon_pop by jserh
> # 概述

模仿bootcss的模态框，依赖jQuery或者zepto,写了一个简单的弹出层，可扩展性强

> # 必需

使用codoon_pop时，依赖html,css

&nbsp;**html**
```
<!--弹窗基本结构-->
<div class="codoon_pop fade" id="testPop2">
  <div class="pop_bg"></div>
  <div class="pop_container">
    <div class="header">
    <h4>pop标题</h4>
    </div> 
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
    <div class="pop_cont">
      <div style="font-family:'微软雅黑'; font-size:20px; color:#555; ">Hello，I'm jserh!
      </div>
    </div>
    <div class="footer">
      <button type="button" class="miss">取消</button>
      <button type="button" class="ensure">确认</button>
    </div>
  </div> 
</div>
<!--弹窗基本结构end-->
```
&nbsp;**css**
```
具体在 base.css 里面
```
> # 调用

```
eg:

$('#testPop').codoon_pop({state:'show',cont:'我是弹窗内容'});

```

> # demo

详情查看Test目录
