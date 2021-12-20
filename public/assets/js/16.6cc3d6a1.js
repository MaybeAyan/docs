(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{630:function(e,v,a){"use strict";a.r(v);var t=a(8),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,a=e._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"jquery-对象和-dom-对象的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-对象和-dom-对象的区别"}},[e._v("#")]),e._v(" jQuery 对象和 DOM 对象的区别")]),e._v(" "),a("p",[e._v("DOM 对象是通过原生 JS 获取来的对象；")]),e._v(" "),a("p",[e._v("使用 jQuery 的方式来获取元素；$('div')是一个 jQuery 对象；")]),e._v(" "),a("p",[e._v("jQuery 对象的本质是：利用$对 DOM 对象包装后产生的对象（伪数组的形式存储）;")]),e._v(" "),a("p",[e._v("jQuery 对象只能使用 jQuery 方法，DOM 对象则使用原生 JS 的属性和方法;")]),e._v(" "),a("h3",{attrs:{id:"jquery-对象和-dom-对象的互相转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-对象和-dom-对象的互相转换"}},[e._v("#")]),e._v(" jQuery 对象和 DOM 对象的互相转换")]),e._v(" "),a("p",[a("code",[e._v("var myvideo = document.querySelector('video');")])]),e._v(" "),a("p",[a("code",[e._v("// 将jQuery对象转换为DOM对象")])]),e._v(" "),a("p",[a("code",[e._v("$('video')[0].play();")])]),e._v(" "),a("p",[a("code",[e._v("$('video').get(0).play();")])]),e._v(" "),a("h3",{attrs:{id:"jquery-设置样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-设置样式"}},[e._v("#")]),e._v(" jQuery 设置样式")]),e._v(" "),a("p",[e._v('$("div").css("background", "pink");')]),e._v(" "),a("h4",{attrs:{id:"隐式迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式迭代"}},[e._v("#")]),e._v(" 隐式迭代")]),e._v(" "),a("p",[e._v("遍历内部 DOM 元素（伪数组形式存储）的过程就叫做隐式迭代。")]),e._v(" "),a("p",[e._v("简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，简化操作，方便调用。")]),e._v(" "),a("h4",{attrs:{id:"链式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链式编程"}},[e._v("#")]),e._v(" 链式编程")]),e._v(" "),a("p",[a("code",[e._v('$(this).css("color","red").siblings().css("color"."");')])]),e._v(" "),a("p",[e._v("原生 JS 的 className 会覆盖原先的类名")]),e._v(" "),a("p",[e._v("jquery 在原先的基础上追加了一个类名，不影响以前的类名，和原生的 classList 功能一样")]),e._v(" "),a("h3",{attrs:{id:"jquery-元素操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-元素操作"}},[e._v("#")]),e._v(" jQuery 元素操作")]),e._v(" "),a("h4",{attrs:{id:"遍历元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历元素"}},[e._v("#")]),e._v(" 遍历元素")]),e._v(" "),a("p",[a("code",[e._v('$("div").each(funtion(index,domEle) { xxx; } )')])]),e._v(" "),a("p",[e._v("index 是每个元素的索引号,可以自己指定索引号名称 ；domEle 是每个 DOM 元素对象，不是 jQuery 对象")]),e._v(" "),a("p",[e._v("想要使用 jquery 方法，需要给这个 DOM 元素转换为 jQuery 对象 $(domEle)")]),e._v(" "),a("h4",{attrs:{id:"创建元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建元素"}},[e._v("#")]),e._v(" 创建元素")]),e._v(" "),a("p",[a("code",[e._v('动态创建元素 $("<Li>我是后来创建的li</li>")')])]),e._v(" "),a("h4",{attrs:{id:"内部添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部添加"}},[e._v("#")]),e._v(" 内部添加")]),e._v(" "),a("p",[a("code",[e._v('$("ul").append(li);')]),e._v(" 内部添加并且放到内容的最后面")]),e._v(" "),a("p",[a("code",[e._v('$("ul").prepend(li);')]),e._v(" 内部添加并且放到内容的最前面")]),e._v(" "),a("h4",{attrs:{id:"外部添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部添加"}},[e._v("#")]),e._v(" 外部添加")]),e._v(" "),a("p",[a("code",[e._v("var div = $(”<div>我是后来添加的</div>“)")])]),e._v(" "),a("p",[a("code",[e._v('$("element").before(div);')]),e._v(" 外部添加到最前面")]),e._v(" "),a("p",[a("code",[e._v('$("element").after(div);')]),e._v(" 外部添加到最后面")]),e._v(" "),a("h4",{attrs:{id:"删除元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除元素"}},[e._v("#")]),e._v(" 删除元素")]),e._v(" "),a("p",[a("code",[e._v('$("elelment") . remove()')]),e._v(" 删除匹配的元素 自杀")]),e._v(" "),a("p",[a("code",[e._v('$("element") . empty()')]),e._v(" 删除匹配的元素里面的子节点 子级元素")]),e._v(" "),a("p",[a("code",[e._v('$("element") . html(" ")')]),e._v(" 删除匹配元素里面的子节点")]),e._v(" "),a("h4",{attrs:{id:"动画节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画节流"}},[e._v("#")]),e._v(" 动画节流")]),e._v(" "),a("p",[a("code",[e._v("stop()")]),e._v(" 用于动画节流")]),e._v(" "),a("h3",{attrs:{id:"jquery-属性操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-属性操作"}},[e._v("#")]),e._v(" jQuery 属性操作")]),e._v(" "),a("p",[e._v("设置或获取元素固有属性值 "),a("code",[e._v("prop()")]),e._v(" （可用于复选和全选的同步）")]),e._v(" "),a("h3",{attrs:{id:"jquery-事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-事件处理"}},[e._v("#")]),e._v(" jQuery 事件处理")]),e._v(" "),a("p",[e._v("事件处理 "),a("code",[e._v("·on()")]),e._v(" 绑定事件，可以注册多个事件")]),e._v(" "),a("p",[e._v("on 可以给未来动态创建的元素绑定事件，原理是通过事件委托添加的事件")]),e._v(" "),a("h3",{attrs:{id:"浅拷贝和深拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝和深拷贝"}},[e._v("#")]),e._v(" 浅拷贝和深拷贝")]),e._v(" "),a("p",[e._v("浅拷贝是把被拷贝的对象复杂数据类型中的地址拷贝给目标对象，修改目标对象会影响被拷贝对象；")]),e._v(" "),a("p",[e._v("深拷贝是完全克隆 修改目标对象不会影响被拷贝对象")]),e._v(" "),a("h3",{attrs:{id:"图片懒加载技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载技术"}},[e._v("#")]),e._v(" 图片懒加载技术")]),e._v(" "),a("h5",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[e._v("#")]),e._v(" 定义")]),e._v(" "),a("p",[e._v("当打开一个很多图片的页面时，先只加载页面上可视范围的图片，滚动到页面下面时候，在加载所需的图片，这就是图片懒加载")]),e._v(" "),a("h5",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[e._v("#")]),e._v(" 作用")]),e._v(" "),a("p",[e._v("减少或延迟请求次数，缓解浏览器的压力，增强用户体验")]),e._v(" "),a("h5",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[e._v("#")]),e._v(" 应用")]),e._v(" "),a("p",[e._v("性能优化")])])}),[],!1,null,null,null);v.default=r.exports}}]);